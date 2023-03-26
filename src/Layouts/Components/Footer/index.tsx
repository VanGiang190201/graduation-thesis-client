import * as React from 'react';

import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import FooterWrapper from './Footer.style';
import { DownArrowIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../../../Components/Icons';
interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const [showListFirst, setShowListFirst] = React.useState<boolean>(false);
    const [showListSecond, setShowListSecond] = React.useState<boolean>(false);
    const [showListThird, setShowListThird] = React.useState<boolean>(false);
    const handleShowMoreListFirst = () => {
        setShowListFirst(!showListFirst);
    };
    const handleShowMoreListSecond = () => {
        setShowListSecond(!showListSecond);
    };
    const handleShowMoreListThird = () => {
        setShowListThird(!showListThird);
    };
    return (
        <FooterWrapper>
            <div className="inner-top-footer">
                <div className="top-footer">
                    <div className="list-footer">
                        <div className="logo-footer">
                            <p className="app-logo">Hekto</p>
                        </div>
                        <div className="email-login">
                            <Input type="text" className="input" placeholder="Enter Email Address" />

                            <Button className="btn">Sign Up</Button>
                        </div>
                        <p className="item-footer">Contact Info</p>
                        <p className="item-footer">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListFirst}>
                            <h3 className="title-footer">Catagories</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>
                        <div className={`content-header ${showListFirst && 'show'}`}>
                            <p className="item-footer">Laptops & Computers</p>
                            <p className="item-footer">Cameras & Photography</p>
                            <p className="item-footer">Smart Phones & Tablets</p>
                            <p className="item-footer">Video Games & Consoles</p>
                            <p className="item-footer">Waterproof Headphones</p>
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListSecond}>
                            <h3 className="title-footer">Customer Care</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>

                        <div className={`content-header ${showListSecond && 'show'}`}>
                            <p className="item-footer">My Account</p>
                            <p className="item-footer">Discount</p>
                            <p className="item-footer">Returns</p>
                            <p className="item-footer">Orders History</p>
                            <p className="item-footer">Order Tracking</p>
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListThird}>
                            <h3 className="title-footer">Pages</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>

                        <div className={`content-header ${showListThird && 'show'}`}>
                            <p className="item-footer">Blog</p>
                            <p className="item-footer">Browse the Shop</p>
                            <p className="item-footer">Category</p>
                            <p className="item-footer">Pre-Built Pages</p>
                            <p className="item-footer">Visual Composer Elements</p>
                            <p className="item-footer">WooCommerce Pages</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="inner-bottom-footer">
                    <p className="copy-right">©Webecy - All Rights Reserved</p>
                    <div className="social-logo">
                        <FacebookIcon width="2rem" height="2rem" className="icon" />
                        <InstagramIcon width="2rem" height="2rem" className="icon" />
                        <TwitterIcon width="2rem" height="2rem" className="icon" />
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
