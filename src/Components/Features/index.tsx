import * as React from 'react';
import Slider from 'react-slick';
import { Text } from '../Text';
import { Wrapper } from './Features.style';
import FeatureItem from './FeatureItem';
import * as featuresRequest from '../../api/featuresApi';
import { FeaturesDataProps } from '../../Utils/interface';
interface IFeaturesProps {
    title?: string;
}

const Features: React.FunctionComponent<IFeaturesProps> = (props) => {
    const { title } = props;
    const [features, setFeatures] = React.useState<FeaturesDataProps[]>([]);
    React.useEffect(() => {
        featuresRequest.getListFeature().then((res) => setFeatures(res));
    }, []);

    console.log(features);

    const settings = {
        dots: false,
        infinite: features?.length < 4 ? false : true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        styles: {
            backgroundColor: 'transparent',
        },
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    arrows: true,
                    dots: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <Wrapper>
            <Text className="title-features">{title}</Text>
            <Slider {...settings}>
                {features?.map((item: FeaturesDataProps, index: number) => {
                    return <FeatureItem data={item} key={index} />;
                })}
            </Slider>
        </Wrapper>
    );
};

export default Features;
