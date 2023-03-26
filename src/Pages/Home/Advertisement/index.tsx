import styled, { keyframes } from 'styled-components';
import Button from '../../../Components/Button';
import Image from '../../../Components/Image';
import { Text } from '../../../Components/Text';
import { IGetAdDetail } from '../../../Utils/interface';
interface AdvertisementProps {
    data?: IGetAdDetail;
    onClick: any;
}

const Advertisement: React.FunctionComponent<AdvertisementProps> = (props) => {
    const { data, onClick } = props;
    return (
        <Style.Wrapper>
            <Style.LeftAds>
                <Text className="heading">{data?.heading}</Text>
                <div className="border"></div>
                <Text className="title">{data?.title}</Text>
                <Text className="description">{data?.description}</Text>
                <Button className="shop-now-btn" onClick={onClick}>
                    View our product
                </Button>
            </Style.LeftAds>
            <Style.RightAds>
                <Style.WrapperImage>
                    <Image className="image" src={data?.image_first} alt="" />
                    <Image className="image-serve" src={data?.image_second} alt="" />
                </Style.WrapperImage>
            </Style.RightAds>
        </Style.Wrapper>
    );
};

const Style = {
    //Get latest area
    Wrapper: styled.div`
        max-width: 114rem;
        margin: auto;
        margin: 4rem auto 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    LeftAds: styled.div`
        width: 40rem;
        .heading {
            font-size: 2rem;
            line-height: 155%;
            letter-spacing: 0.015em;
            color: #2b2f32cc;
            font-weight: 400;
            margin-bottom: 1rem;
        }
        .border {
            width: 16rem;
            height: 0.6rem;
            background-color: #2b2f32;
            margin-bottom: 2rem;
        }
        .title {
            font-size: 2.8rem;
            line-height: 5rem;
            letter-spacing: 0.015em;
            color: #2b2f32;
            font-weight: 700;
        }
        .description {
            font-size: 1.6rem;
            line-height: 2.2rem;
            letter-spacing: 0.015em;
            color: #55585a;
        }
        .shop-now-btn {
            width: 17.3rem;
            height: 4rem;
            margin-top: 2.2rem;
            border-radius: 0.4rem;
            border: none;
            cursor: pointer;
            font-size: 1.4rem;
            line-height: 2rem;
            font-weight: 600;
            letter-spacing: 0.02em;
        }

        .shop-now-btn:hover {
            background-color: var(--primary-background-color-hover-btn);
        }
    `,
    RightAds: styled.div`
        width: 52rem;
        .image {
            width: 100%;
            object-fit: cover;
            border-radius: 0.8rem;
            opacity: 0.28;
        }
        .image-serve {
            width: 82%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -25%;
            border-radius: 0.8rem;
        }
    `,

    WrapperImage: styled.div`
        width: 100%;
        position: relative;
    `,
};
export default Advertisement;
