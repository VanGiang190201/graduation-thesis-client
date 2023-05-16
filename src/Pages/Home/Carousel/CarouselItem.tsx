import * as React from 'react';

import Button from '../../../Components/Button';
import Image from '../../../Components/Image';
import { lightImage } from '../../../assets/images';
import { CarouselItemWrapper } from './Carousel.style';
import { Text } from '../../../Components/Text';
interface ICarouselItemProps {
    data: {
        image_carousel: string;
        title_carousel: string;
        description_carousel: string;
    };
}

const CarouselItem: React.FunctionComponent<ICarouselItemProps> = (props) => {
    const { data } = props;
    return (
        <CarouselItemWrapper>
            <div className="container">
                <div className="information-carousel">
                    <Text className="title-carousel" textOfLine={2}>
                        {data.title_carousel}
                    </Text>
                    <Text className="description-carousel" textOfLine={3}>
                        {data.description_carousel}
                    </Text>
                    {/* <Button primary className="shop-btn">
                        Xem sản phẩm
                    </Button> */}
                    <Image src={lightImage} alt="" className="light-image" />
                </div>
                <div className="image-wrapper">
                    <Image src={data.image_carousel} alt="" className="image-carousel" />
                </div>
            </div>
        </CarouselItemWrapper>
    );
};

export default CarouselItem;
