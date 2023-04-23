import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, message, Space } from 'antd';

import NavbarWrapper from './Navbar.style';
import Menu from './Menu';
import MenuItem from './Menu/MenuItem';
import config from '../../../config';
import Search from '../../../Components/Search';
import { useAppSelector, useAppDisPatch } from '../../../reudux/hook';
import {
    BarIcon,
    HomeIcon,
    PageIcon,
    BlogIcon,
    AboutIcon,
    CartIcon,
    ListProductIcon,
    HeartIcon,
    LogOutIcon,
} from '../../../Components/Icons';
import { UserLogin } from '../../../assets/images';
import Image from '../../../Components/Image';
import Button from '../../../Components/Button';
import { authSlide } from '../../../reudux/feature/authSlide';
import { Text } from '../../../Components/Text';
import * as portfoliosRequest from '../../../api/portfoliosApi';
import { IGetPortfolios } from '../../../Utils/interface';

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = () => {
    const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
    const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const [listPortfolios, setListPortfolios] = useState<IGetPortfolios[]>();

    React.useEffect(() => {
        portfoliosRequest.getListPortfolios().then((res) => setListPortfolios(res));
    }, []);
    const dispatch = useAppDisPatch();
    const navigate = useNavigate();
    const handleToTopPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleShowMenu = () => {
        setIsShowMenu(true);
    };

    const handleHideMenu = () => {
        setIsShowMenu(false);
    };

    const handleLogoutCurrentUser = () => {
        setTimeout(() => {
            dispatch(authSlide.actions.logOut());
        }, 1000);
    };

    const handleRuleLogin = () => {
        setTimeout(() => navigate(config.login), 500);
        setTimeout(
            () =>
                toast.info('Please ! Login to buy', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                }),
            200,
        );
    };

    const onClick: MenuProps['onClick'] = ({ key }) => {
        navigate(`/shop/${key}`, { state: key });
    };

    const items = listPortfolios?.map((portfolios) => {
        return {
            label: portfolios.name_portfolios,
            key: portfolios.id,
        };
    });
    return (
        <NavbarWrapper>
            <div className="inner">
                <div className="logo">
                    <p className="app-logo" onClick={handleToTopPage}>
                        Hekto
                    </p>
                </div>
                <div className={`menu ${isShowMenu ? 'show-menu' : ''}`}>
                    <div className="top-menu">
                        {Object.keys(currentUser).length > 0 ? (
                            <div className="user-interface">
                                <div className="avatar">
                                    <Image alt="" src={UserLogin} className="user-image-login" />
                                </div>
                                <Text textOfLine={1} className="name-user">
                                    {currentUser.name}
                                </Text>
                            </div>
                        ) : (
                            <Link to={config.login} className="login-item">
                                <div>
                                    <p className="login-title">Đăng nhập</p>
                                </div>
                            </Link>
                        )}
                        {/* <div className="hide-btn" onClick={handleHideMenu}>
                            <HideIcon width="2.6rem" height="2.6rem" className="cancel-icon" />
                        </div> */}
                        <div className="logo-menu">
                            <p className="app-logo" onClick={handleToTopPage}>
                                Hekto
                            </p>
                        </div>
                    </div>
                    <Menu className="list-menu">
                        <MenuItem to={config.home} className="menu-item">
                            Trang chủ
                            <HomeIcon width="2.2rem" height="2.2rem" className="page-icon" />
                        </MenuItem>
                        <MenuItem to="/book-view" className="menu-item">
                            Đặt lịch
                            <PageIcon width="2.2rem" height="2.2rem" className="page-icon" />
                        </MenuItem>
                        <MenuItem to="" className="menu-item">
                            <Dropdown menu={{ items, onClick }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Sản phẩm
                                        <ListProductIcon width="2.2rem" height="2.2rem" className="list-icon" />
                                    </Space>
                                </a>
                            </Dropdown>
                        </MenuItem>
                        <MenuItem to="/blog" className="menu-item">
                            Bài viết
                            <BlogIcon width="2.2rem" height="2.2rem" className="blog-icon" />
                        </MenuItem>
                        <MenuItem to={config.aboutUs} className="menu-item">
                            Giới thiệu
                            <AboutIcon width="2.2rem" height="2.2rem" className="about-icon" />
                        </MenuItem>
                        <MenuItem to={config.wishList} className="wish-list-item">
                            Yêu thích
                            <HeartIcon width="2.2rem" height="2.2rem" className="wish-list-icon" />
                        </MenuItem>
                    </Menu>
                    <Link to={config.cart} className="cart-menu">
                        <div>
                            <p className="cart">Giỏ hàng </p>
                            {cart?.length > 0 && Object.keys(currentUser).length > 0 && (
                                <span className="quantity">({cart ? cart.length : 0})</span>
                            )}
                        </div>
                    </Link>
                    {Object.keys(currentUser).length > 0 ? (
                        <Button className="logout-btn" onClick={handleLogoutCurrentUser}>
                            <LogOutIcon width="2rem" height="2rem" className="logout-icon" /> <p>Logout</p>
                        </Button>
                    ) : (
                        ''
                    )}
                </div>

                {Object.keys(currentUser).length > 0 ? (
                    <Link to={config.cart}>
                        <div className="like-list">
                            <CartIcon width="2rem" height="2rem" className="icon-header cart-icon" />
                            {cart?.length > 0 && (
                                <div className="quantity-cart">
                                    <p>{cart?.length > 9 ? '9+' : cart?.length}</p>
                                </div>
                            )}
                        </div>
                    </Link>
                ) : (
                    <div onClick={handleRuleLogin} className="cart">
                        <div className="like-list">
                            <CartIcon width="1.8rem" height="1.6rem" className="icon-header cart-icon" />
                        </div>
                    </div>
                )}
                <div className="search">
                    <Search />
                </div>

                <div className="bar-option" onClick={handleShowMenu}>
                    <BarIcon width="2rem" height="2rem" className="bar-icon" />
                </div>
                {isShowMenu ? <div className="overlay" onClick={handleHideMenu}></div> : ''}
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
