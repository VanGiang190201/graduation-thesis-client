import * as React from 'react';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import * as blogRequest from '../../api/blogApi';
import * as productRequest from '../../api/productApi';
import * as adsRequest from '../../api/advertisementApi';
import * as slidersRequest from '../../api/slidersApi';
import * as portfoliosRequest from '../../api/portfoliosApi';
import { cashBackImage, freeDeliveryImage, logoImage, premiumQualityImage, supportImage } from '../../assets/images';
import Features from '../../Components/Features';
import FeatureItem from '../../Components/Features/FeatureItem';
import Image from '../../Components/Image';
import LatestBlogItem from '../../Components/LatestBlogItem';
import ListProduct from '../../Components/ListProduct';
import Loading from '../../Components/Loading';
import { IBlogProps, IGetAdDetail, IGetPortfolios, IProduct, ISliderProps } from '../../Utils/interface';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Carousel from './Carousel';
import Wrapper from './Home.style';
import TrendingBanner from './TrendingBanner';
import Advertisement from './Advertisement';
import FeatureProduct from './FeatureProduct';
import HotSaleProduct from './HotSaleProduct';
import ListBlog from './ListBlog';
import { useNavigate } from 'react-router-dom';
import config from '../../config';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const [sliders, setSliders] = useState<ISliderProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [adIsUsed, setAdIsUsed] = useState<IGetAdDetail>();
    const [listPortfolios, setListPortfolios] = useState<IGetPortfolios[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        slidersRequest.getSliders().then((res) => {
            setIsLoading(false);
            setSliders(res);
        });
    }, []);

    useEffect(() => {
        adsRequest.getAdIsUsed().then((res) => {
            setIsLoading(false);
            setAdIsUsed(res[0]);
        });
    }, []);
    useEffect(() => {
        portfoliosRequest.getListPortfolios().then((res) => {
            setIsLoading(false);
            setListPortfolios(res);
        });
    }, []);

    const handleRoute = () => {
        if (listPortfolios[0].id) {
            navigate(`/shop/${listPortfolios[0].id}`, { state: listPortfolios[0].id });
        }
    };
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                <div className="banner-wrapper">
                    {sliders && (
                        <div className="banner">
                            <Carousel data={sliders} />
                        </div>
                    )}
                </div>
                <Advertisement data={adIsUsed} onClick={handleRoute} />
                <FeatureProduct data={listPortfolios} />
                <div className="wrapper-offer">
                    <Features title="Ưu đãi gì từ chúng tôi!" />
                </div>
                <div className="wrapper-trending-banner">
                    <TrendingBanner />
                </div>
                <div className="trending-product-wrapper">
                    <HotSaleProduct />
                </div>

                <BackgroundImage />

                <div className="logo-bottom">
                    <Image src={logoImage} alt="" className="image" />
                </div>

                <div className="wrapper-blogs">
                    <ListBlog />
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
