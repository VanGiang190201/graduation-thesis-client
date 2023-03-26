import * as React from 'react';

import Wrapper from './AboutUs.style';
import Image from '../../Components/Image';
import {
    aboutImage,
    cashBackImage,
    freeDeliveryImage,
    supportImage,
    premiumQualityImage,
    customerImages,
} from '../../assets/images';
import Button from '../../Components/Button';
import Features from '../../Components/Features';
import FeatureItem from '../../Components/Features/FeatureItem';

interface IAboutUsProps {}

const AboutUs: React.FunctionComponent<IAboutUsProps> = (props) => {
    return (
        <Wrapper>
            <div className="container">
                <div className="wrapper-header-content">
                    <div className="header-content">
                        <div className="slide">
                            <Image src={aboutImage} alt="about-image" className="about-image" />
                        </div>
                        <div className="information">
                            <p className="title">Know About Our Ecomerce Business, History</p>
                            <p className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
                                aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor
                                lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                            </p>
                            <Button className="contact-btn">Contact us</Button>
                        </div>
                    </div>
                </div>
                <div className="wrapper-features">
                    <Features title="Our Features">
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
                <div className="wrapper-feedback">
                    <div className="feed-back">
                        <p className="title-feedback">Our Client Say!</p>
                        <div className="client-images">
                            <Image src={customerImages[0]} alt="first-image" className="first-image client-image" />
                            <Image src={customerImages[1]} alt="second-image" className="second-image client-image" />
                            <Image src={customerImages[2]} alt="third-image" className="third-image client-image" />
                        </div>
                        <div className="information-client">
                            <p className="name">Selina Gomez</p>
                            <p className="position">Ceo At Webecy Digital</p>
                        </div>
                        <div className="comment">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui
                            sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique
                            ultrices dolor aliquam lacus volutpat praesent.
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default AboutUs;
