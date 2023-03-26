import Slider from 'react-slick';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import FeatureProductItem from '../../../Components/FeatureProductItem';
import * as productRequest from '../../../api/productApi';
import { IProduct } from '../../../Utils/interface';
interface FeatureProductListProps {
    id: number;
}

const FeatureProductList: React.FunctionComponent<FeatureProductListProps> = (props) => {
    const { id } = props;
    const [listProductOfPortfolios, setListProductOfPortfolios] = useState<IProduct[]>([]);

    useEffect(() => {
        productRequest.getProductsOfPortfolios(id).then((res) => setListProductOfPortfolios(res));
    }, [id]);

    const settings = {
        dots: false,
        infinite: listProductOfPortfolios?.length < 4 ? false : true,
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
        <Style.Wrapper>
            <Slider {...settings}>
                {listProductOfPortfolios?.map((item: IProduct, index: number) => {
                    return <FeatureProductItem data={item} key={index} />;
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
        .slick-prev::before {
            color: #ccc;
            font-size: 3rem;
        }
        .slick-next::before {
            color: #ccc;
            font-size: 3rem;
        }
    `,
};
export default FeatureProductList;
