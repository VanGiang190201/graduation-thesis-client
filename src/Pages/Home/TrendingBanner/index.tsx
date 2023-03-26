import * as React from 'react';
import { trendingBanner } from '../../../assets/images';
import Button from '../../../Components/Button';
import Image from '../../../Components/Image';
import Wrapper from './TrendingBanner.style';
import { Text } from '../../../Components/Text';

interface ITrendingBannerProps {}

const TrendingBanner: React.FunctionComponent<ITrendingBannerProps> = (props) => {
    return (
        <Wrapper>
            <div className="left-content">
                <Image src={trendingBanner} alt="" className="image-product" />
            </div>
            <div className="right-content">
                <Text textOfLine={3} className="title">
                    Unique Features Of leatest & Trending Poducts
                </Text>
                <div className="description">
                    <Text textOfLine={3} className="detail">
                        <span></span> All frames constructed with hardwood solids and laminates
                    </Text>
                    <Text textOfLine={3} className="detail">
                        <span></span> Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                        nails
                    </Text>
                    <Text textOfLine={3} className="detail">
                        <span></span> Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                        nails
                    </Text>
                </div>
                <div className="active">
                    <Button className="add-btn"> Add To Cart </Button>
                    <div className="information_product">
                        <Text textOfLine={1} className="name">
                            B&B Italian Sofa{' '}
                        </Text>
                        <p className="price">$32.00</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default TrendingBanner;
