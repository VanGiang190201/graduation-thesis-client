import * as React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../reudux/hook';
import { NotificationDataProps } from '../../Utils/interface';
import { Button, Image } from 'antd';
import { Text } from '../Text';
import { bellImage } from '../../assets/images';
import * as notificationRequest from '../../api/notificationApi';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { toast } from 'react-toastify';
interface INotificationProps {
    data: NotificationDataProps;
    setNotification: any;
}

const Wrapper = styled.div`
    margin-top: 1rem;
    overflow: hidden;
    align-items: center;
    margin-bottom: 0.5rem;
    background-color: #e6e6e6;
    cursor: pointer;
    border-radius: 0.4rem;
    .notification-item {
        background-color: #e6e6e6;
        min-height: 7rem;
        width: 100%;
        display: flex;
        align-items: center;
        position: relative;
        padding: 0 1rem;
        gap: 1rem;
        &:hover {
            background-color: #ccc;
        }
        &:active {
            background-color: #e6e6e6;
        }
    }
    .isRead {
        background-color: #ffffff;
        border-bottom: 1px solid #e6e6e6;
    }
    .left-content {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .ant-image {
        width: 100%;
        height: 100%;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .image-detail {
    }
    .center-content {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
    .title {
        font-family: 'Roboto Slab';
        font-size: 1.5rem;
        font-weight: 600;
    }
    .body {
        font-size: 1.4rem;
        font-family: 'Roboto Slab';
        color: #666;
    }

    .right-content {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    }
    //more wrapper
    .more-popup {
        width: 8rem;
        height: 6rem;
        background-color: #000;
        position: absolute;
    }
    .more-icon {
        color: #000;
    }

    //Detail

    .detail {
        margin-top: 1rem;
        text-align: center;
        padding: 12px;
        .top-detail {
            width: 12rem;
            height: 12rem;
            overflow: hidden;
            border-radius: 20px;
            margin: auto;
        }
        .image-detail {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .bottom-content {
            margin-top: 10px;
        }
        .button-wrapper {
            margin-top: 4px;
            display: flex;
            gap: 4px;
            justify-content: center;
        }
    }
`;
const Notification: React.FunctionComponent<INotificationProps> = (props) => {
    const { data, setNotification } = props;
    const [show, setShow] = React.useState<boolean>(false);

    const handleReadNotification = () => {
        setShow(!show);
    };

    const handleRead = () => {
        notificationRequest.isReading(data.id).then((res) => {
            setNotification(res.data);
            setShow(false);
        });
    };

    const handleDelete = () => {
        notificationRequest.deleteNotification(data.id).then((res) => {
            setNotification(res.data);
            setShow(false);
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
        <Wrapper>
            <div
                className={`notification-item ${data.is_read === true ? 'isRead' : ''}`}
                onClick={handleReadNotification}
            >
                <div className="left-content">
                    <Image src={data.image} alt={data.title} className="image" fallback={bellImage} />
                </div>
                <div className="center-content">
                    <Text textOfLine={1} className="title">
                        {data.title}
                    </Text>
                    <Text textOfLine={1} className="body">
                        {data.message}
                    </Text>
                </div>
                <div className="right-content">{show ? <FaAngleUp /> : <FaAngleDown />}</div>
            </div>
            {show && (
                <div className="detail" data-aos="fade-up">
                    <div className="top-detail">
                        <Image src={data.image} alt={data.title} className="image-detail" fallback={bellImage} />
                    </div>
                    <div className="bottom-content">
                        <p className="title">{data.title}</p>
                        <p className="body">{data.message}</p>
                    </div>
                    <div className="button-wrapper">
                        <Button onClick={handleDelete}>Ẩn thông báo này</Button>
                        {!data.is_read && <Button onClick={handleRead}>Đánh dấu đã xem</Button>}
                    </div>
                </div>
            )}
        </Wrapper>
    );
};

export default Notification;
