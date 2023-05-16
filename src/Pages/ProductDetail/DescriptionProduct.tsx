import * as React from 'react';
import styled from 'styled-components';

import { Text } from '../../Components/Text';
import { Image, Input, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Style } from './ProductDetail.style';
import { CommentDataProps, IProduct, VideoDataProps } from '../../Utils/interface';
import * as videoRequest from '../../api/videoApi';
import * as commentRequest from '../../api/commentApi';
import moment from 'moment';
import 'moment-timezone';
import { useAppSelector } from '../../reudux/hook';
import { FaRegPaperPlane, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface IDescriptionProductProps {
    data?: IProduct;
}

const DescriptionProduct: React.FunctionComponent<IDescriptionProductProps> = (props) => {
    const { data } = props;
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const [videos, setVideo] = React.useState<VideoDataProps[]>([]);
    const [comments, setComments] = React.useState<CommentDataProps[]>([]);
    const [isChange, setIsChange] = React.useState<boolean>(false);

    React.useEffect(() => {
        videoRequest.listVideoProduct(data?.id || 0).then((res) => setVideo(res));
        commentRequest.getCommentsProduct(data?.id || 0).then((res) => setComments(res.data));
    }, [isChange]);
    const CardDescription = () => {
        return (
            <StyleCom.Wrapper>
                <StyleCom.Des>
                    <div dangerouslySetInnerHTML={{ __html: data?.description_product ?? '' }} />
                </StyleCom.Des>
            </StyleCom.Wrapper>
        );
    };

    const CardVideo = () => {
        return (
            <StyleCom.VideoWrapper>
                {videos.map((item, i) => {
                    return (
                        <div style={{ marginBottom: '40px' }}>
                            <h2 style={{ marginBottom: '20px' }}>Tiêu đề: {item.title}</h2>
                            <iframe width="840" height="485" src={item.media}></iframe>
                        </div>
                    );
                })}
            </StyleCom.VideoWrapper>
        );
    };
    const CommentItem = ({ data }: any) => {
        const handleDeleteComment = () => {
            commentRequest.deleteComment(data.id).then((res) => {
                setIsChange(!isChange);
                toast.success(res.message, {
                    position: 'top-right',
                    autoClose: 600,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            });
        };
        return (
            <StyleCom.CommentItem>
                <StyleCom.Avatar>
                    <Image src={data.avatar} alt="" preview={false} style={{ width: '100%', height: '100%' }} />
                </StyleCom.Avatar>
                <StyleCom.Comment>
                    <h3>{data.display_name}</h3>
                    <p className="time">
                        {moment(data.time_comment).tz('Asia/Ho_Chi_Minh').format('YYYY/MM/DD, h:mm:ss A')}
                    </p>
                    <p>{data.comment}</p>
                </StyleCom.Comment>
                {data.user_id === currentUser.id && (
                    <StyleCom.Trash onClick={handleDeleteComment}>
                        <FaTrashAlt fontSize="16px" />
                    </StyleCom.Trash>
                )}
            </StyleCom.CommentItem>
        );
    };

    const CardComment = () => {
        const [commentSend, setCommentSend] = React.useState<string>('');

        const handleSendComment = () => {
            commentRequest
                .sendComment({
                    comment: commentSend,
                    product_id: data?.id,
                })
                .then((res) => {
                    setIsChange(!isChange);
                    toast.success(res.message, {
                        position: 'top-right',
                        autoClose: 600,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        };

        const handleChangeComment = (e: any) => {
            setCommentSend(e.target.value);
        };
        return (
            <StyleCom.CommentWrapper>
                <StyleCom.WriteComment>
                    <StyleCom.YourAvatar>
                        <Image
                            src={currentUser.avatar}
                            alt=""
                            preview={false}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </StyleCom.YourAvatar>
                    <Input
                        type="text"
                        placeholder="Viết bình luân của bạn ..."
                        className="comment"
                        onChange={(e) => handleChangeComment(e)}
                    />
                    <FaRegPaperPlane className="send-icon" onClick={handleSendComment} />
                </StyleCom.WriteComment>
                {comments.map((comment: CommentDataProps) => (
                    <CommentItem data={comment} key={comment.id} />
                ))}
            </StyleCom.CommentWrapper>
        );
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: `MÔ TẢ SẢN PHẨM`,
            children: <CardDescription />,
        },
        {
            key: '3',
            label: `ĐÁNH GIÁ SẢN PHẨM`,
            children: <CardComment />,
        },
        {
            key: '4',
            label: `VIDEO`,
            children: <CardVideo />,
        },
    ];
    return (
        <Style.DescriptionProductWrapper>
            <div className="wrapper">
                <Style.WrapperContent>
                    <Tabs defaultActiveKey="1" items={items} />
                </Style.WrapperContent>
            </div>
        </Style.DescriptionProductWrapper>
    );
};

const StyleCom = {
    Wrapper: styled.div``,
    Des: styled.div``,
    Image: styled.div`
        margin-top: 4rem;
        .ant-image {
            width: 70%;
        }
    `,
    VideoWrapper: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    CommentWrapper: styled.div``,
    CommentItem: styled.div`
        display: flex;
        gap: 2rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 1rem;
        padding: 0.5rem 2rem;
        position: relative;
    `,
    Avatar: styled.div`
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        overflow: hidden;
        .ant-image {
            width: 5rem;
            height: 5rem;
        }
    `,
    YourAvatar: styled.div`
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 100;

        .ant-image {
            width: 4rem;
            height: 4rem;
        }
    `,
    Comment: styled.div`
        h3 {
            margin-bottom: 0.4rem;
        }
        .time {
            color: #888;
            font-size: 1.2rem;
            margin-bottom: 0.6rem;
        }
    `,
    WriteComment: styled.div`
        position: relative;
        margin-bottom: 2rem;
        .comment {
            height: 5rem;
            padding: 0 6rem;
        }
        .send-icon {
            position: absolute;
            right: 20px;
            font-size: 20px;
            top: 50%;
            transform: translateY(-50%);
            z-index: 100;
            cursor: pointer;
        }
    `,

    Trash: styled.div`
        position: absolute;
        right: 3rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    `,
};

export default DescriptionProduct;
