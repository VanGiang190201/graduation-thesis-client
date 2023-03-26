import * as React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import HeadingBar from '../Components/HeadingBar';
import * as DefaultLayoutStyle from './DefaultLayout.style';
import { ILocation } from '../../Utils/interface';

interface IDefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<IDefaultLayoutProps> = (props) => {
    const { children } = props;
    const location: ILocation = useLocation();
    return (
        <DefaultLayoutStyle.DefaultLayoutWrapper>
            <DefaultLayoutStyle.HeaderWrapper>
                <Header />
            </DefaultLayoutStyle.HeaderWrapper>
            <DefaultLayoutStyle.NavBarWrapper>
                <Navbar />
            </DefaultLayoutStyle.NavBarWrapper>

            {location.pathname !== '/' && (
                <DefaultLayoutStyle.HeadingBarWrapper>
                    <HeadingBar />
                </DefaultLayoutStyle.HeadingBarWrapper>
            )}

            <DefaultLayoutStyle.ContentWrapper>{children}</DefaultLayoutStyle.ContentWrapper>

            <DefaultLayoutStyle.FooterWrapper>
                <Footer />
            </DefaultLayoutStyle.FooterWrapper>
        </DefaultLayoutStyle.DefaultLayoutWrapper>
    );
};

export default DefaultLayout;
