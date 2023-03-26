import * as React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Wrapper } from './Carousel.style';
import CarouselItem from './CarouselItem';

interface ICarouselProps {
    data: {
        image_carousel: string;
        title_carousel: string;
        description_carousel: string;
    }[];
}

const Carousel: React.FunctionComponent<ICarouselProps> = (props) => {
    const { data } = props;
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
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
        <Wrapper className="slider">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <CarouselItem data={item} key={index} />
                ))}
            </Slider>
        </Wrapper>
    );
};

export default Carousel;
