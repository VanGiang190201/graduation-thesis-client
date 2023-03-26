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
import TrendingProductItem from '../../Components/TrendingProductItem';
import { IBlogProps, IGetAdDetail, IGetPortfolios, IProduct, ISliderProps } from '../../Utils/interface';
import BackgroundImage from './BackgroundImage/BackgroundImage';
import Carousel from './Carousel';
import Wrapper from './Home.style';
import LatestProductItem from './LatestProductItem';
import TrendingBanner from './TrendingBanner';
import Advertisement from './Advertisement';
import FeatureProduct from './FeatureProduct';

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);
    const [trendingProducts, setTrendingProducts] = useState<IProduct[]>([]);
    const [sliders, setSliders] = useState<ISliderProps[]>([]);
    const [blogs, setBlogs] = useState<IBlogProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [adIsUsed, setAdIsUsed] = useState<IGetAdDetail>();
    const [listPortfolios, setListPortfolios] = useState<IGetPortfolios[]>([]);
    useEffect(() => {
        productRequest.getProducts().then((res) => {
            setIsLoading(false);
            const filterLatestProducts = res.filter((item: IProduct) => item.type === 'Latest Products');
            const filterTrendingProducts = res.filter((item: IProduct) => item.type === 'Trending Products');
            setLatestProducts(filterLatestProducts);
            setTrendingProducts(filterTrendingProducts);
        });
    }, []);

    useEffect(() => {
        slidersRequest.getSliders().then((res) => {
            setIsLoading(false);
            setSliders(res);
        });
    }, []);

    useEffect(() => {
        blogRequest.getBlogs().then((res) => {
            setIsLoading(false);
            setBlogs(res);
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

    const handleRoute = () => {};
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
                <div className="latest-product-wrapper">
                    <ListProduct title="Latest Products">
                        {latestProducts.map((item, index) => (
                            <LatestProductItem data={item} key={index} />
                        ))}
                    </ListProduct>
                </div>
                <div className="wrapper-offer">
                    <Features title="What Shopex Offer!">
                        <FeatureItem
                            srcImage={freeDeliveryImage}
                            titleFeature="Free Delivery"
                            descriptionFeature="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
                        />
                        <FeatureItem
                            srcImage={cashBackImage}
                            titleFeature="100% Cash Back"
                            descriptionFeature="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
                        />
                        <FeatureItem
                            srcImage={premiumQualityImage}
                            titleFeature="Quality Product"
                            descriptionFeature="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
                        />
                        <FeatureItem
                            srcImage={supportImage}
                            titleFeature="24/7 Support"
                            descriptionFeature="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
                        />
                    </Features>
                </div>
                <div className="wrapper-trending-banner">
                    <TrendingBanner />
                </div>
                <div className="trending-product-wrapper">
                    <ListProduct title="Trending Products">
                        {trendingProducts.map((item, index) => (
                            <TrendingProductItem data={item} key={index} />
                        ))}
                    </ListProduct>
                </div>

                <BackgroundImage />

                <div className="logo-bottom">
                    <Image src={logoImage} alt="" className="image" />
                </div>

                <div className="wrapper-blogs">
                    <ListProduct title="Latest Blog">
                        {blogs?.map((item: IBlogProps) => (
                            <LatestBlogItem data={item} key={item.id} />
                        ))}
                    </ListProduct>
                </div>
            </div>
        </Wrapper>
    );
};

export default Home;
