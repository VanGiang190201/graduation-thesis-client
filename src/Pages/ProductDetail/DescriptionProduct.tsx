import * as React from 'react';
import styled from 'styled-components';

import { Text } from '../../Components/Text';
import { Image, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Style } from './ProductDetail.style';
import { IProduct, VideoDataProps } from '../../Utils/interface';
import * as videoRequest from '../../api/videoApi';

interface IDescriptionProductProps {
    data?: IProduct;
}

const DescriptionProduct: React.FunctionComponent<IDescriptionProductProps> = (props) => {
    const { data } = props;
    const [videos, setVideo] = React.useState<VideoDataProps[]>([]);

    console.log(videos);

    React.useEffect(() => {
        videoRequest.listVideoProduct(data?.id || 0).then((res) => setVideo(res));
    }, []);
    const CardDescription = () => {
        return (
            <StyleCom.Wrapper>
                <StyleCom.Des>
                    <div dangerouslySetInnerHTML={{ __html: data?.description_product ?? '' }} />
                </StyleCom.Des>
                <StyleCom.Image>
                    <h2 style={{ marginBottom: '40px' }}>Kích thước mô tả</h2>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0cbku_vttEeDAhKcAjrtE4nDsvQ3_V1iJcQ&usqp=CAU"
                        alt=""
                        preview
                        style={{ width: '100%' }}
                    />
                </StyleCom.Image>
            </StyleCom.Wrapper>
        );
    };

    const CardVideo = () => {
        return (
            <StyleCom.VideoWrapper>
                {videos.map((item, i) => {
                    return (
                        <div style={{ marginBottom: '40px' }}>
                            <h2 style={{ marginBottom: '20px' }}>{item.title}</h2>
                            <iframe width="840" height="485" src={item.media}></iframe>
                        </div>
                    );
                })}
            </StyleCom.VideoWrapper>
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
            children: `Content of Tab Pane 3`,
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
};

export default DescriptionProduct;
