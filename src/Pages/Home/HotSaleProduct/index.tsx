import Slider from 'react-slick';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import * as productRequest from '../../../api/productApi';
import { IProduct } from '../../../Utils/interface';
import LatestProductItem from '../LatestProductItem';
interface HotSaleProductProps {}

const HotSaleProduct: React.FunctionComponent<HotSaleProductProps> = (props) => {
    const [listHotSaleProduct, setListHotSaleProduct] = useState<IProduct[]>([]);

    useEffect(() => {
        productRequest.getHotSaleProduct().then((res: IProduct[]) => setListHotSaleProduct(res));
    }, []);

    const settings = {
        dots: false,
        infinite: listHotSaleProduct?.length < 3 ? false : true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
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
        <Style.Wrapper>
            <Slider {...settings}>
                {listHotSaleProduct?.map((item: IProduct, index: number) => {
                    return <LatestProductItem data={item} key={index} />;
                })}
            </Slider>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        .slick-arrow {
            width: 3rem;
            height: 3rem;
        }
        .slick-prev {
            left: -38px;
        }
        .slick-prev::before {
            color: #ccc;
            font-size: 3rem;
        }
        .slick-next {
            right: -16px;
        }
        .slick-next::before {
            color: #ccc;
            font-size: 3rem;
        }
    `,
};
export default HotSaleProduct;
