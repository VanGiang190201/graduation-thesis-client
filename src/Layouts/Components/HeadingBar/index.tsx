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
        else if (pathname == `/shop/${location.state}`) setTitlePage('Danh sách sản phẩm');
        else if (pathname == `/products/${location.state}`) setTitlePage('Chi tiết sản phẩm');
        else if (pathname == '/about-us') setTitlePage('Giới thiệu');
        else if (pathname == '/order-completed') setTitlePage('Thanh toán thành công');
        else if (pathname == '/blog') setTitlePage('Bài viết');
        else if (pathname == '/payment') setTitlePage('Thanh toán');
        else if (pathname == '/cart') setTitlePage('Giỏ hàng');
        else if (pathname == '/register') setTitlePage('Tạo tài khoản');
        else if (pathname == '/wishlist') setTitlePage('Sản phẩm yêu thích');
        else if (pathname == '/book-view') setTitlePage('Đặt lịch tư vấn ');
        else if (pathname == '/profile') setTitlePage('Cá nhân');
        else if (pathname == '/order') setTitlePage('Đơn hàng của bạn');
        else if (pathname == `/blog/${location.state}`) setTitlePage('Chi tiết bài viết');
        else if (decodeURIComponent(pathname) == `/search-result/${params.keySearch}`) setTitlePage('Kết quả tìm kiếm');
        else if (pathname == '/') setTitlePage('');
        else setTitlePage('Không tìm thấy trang');
    }, [pathname]);
    return (
        <HeadingBarWrapper>
            <div className="inner">
                <h3 className="title">{titlePage}</h3>
                {location.pathname == '/' ? (
                    ''
                ) : (
                    <p className="description">
                        {`Trang chủ `}
                        <span className="mark">{`.${titlePage}`}</span>
                    </p>
                )}
            </div>
        </HeadingBarWrapper>
    );
};

export default HeadingBar;
