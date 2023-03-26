import * as React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ILocation } from '../../../Utils/interface';

import HeadingBarWrapper from './HeadingBar.style';

interface IHeadingBarProps {}

const HeadingBar: React.FunctionComponent<IHeadingBarProps> = (props) => {
    const location: ILocation = useLocation();
    const pathname = location.pathname.split('%20').join(' ');

    const params = useParams();
    const [titlePage, setTitlePage] = useState<string>('');
    useEffect(() => {
        if (pathname == '/login') setTitlePage('My Account');
        else if (pathname == '/list-product') setTitlePage('List Product');
        else if (pathname == `/product-detail/${location.state}`) setTitlePage('Product Detail');
        else if (pathname == '/about-us') setTitlePage('About Us');
        else if (pathname == '/order-completed') setTitlePage('Order Completed');
        else if (pathname == '/payment') setTitlePage('Payment');
        else if (pathname == '/cart') setTitlePage('Shopping Cart');
        else if (pathname == '/register') setTitlePage('Create Account');
        else if (pathname == '/wishlist') setTitlePage('Wish List');
        else if (pathname == `/search-result/${params.keySearch}`) setTitlePage('Search Result');
        else if (pathname == '/') setTitlePage('');
        else setTitlePage('404 Not Found');
    }, [pathname]);
    return (
        <HeadingBarWrapper>
            <div className="inner">
                <h3 className="title">{titlePage}</h3>
                {location.pathname == '/' ? (
                    ''
                ) : (
                    <p className="description">
                        {`Home .Page `}
                        <span className="mark">{`.${titlePage}`}</span>
                    </p>
                )}
            </div>
        </HeadingBarWrapper>
    );
};

export default HeadingBar;
