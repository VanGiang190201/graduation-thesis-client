import * as React from 'react';

import Button from '../../../Components/Button';
import Input from '../../../Components/Input';
import FooterWrapper from './Footer.style';
import { DownArrowIcon, FacebookIcon, InstagramIcon, TwitterIcon } from '../../../Components/Icons';
import { IGetPortfolios } from '../../../Utils/interface';
import * as portfoliosRequest from '../../../api/portfoliosApi';
import { useNavigate } from 'react-router-dom';
import { getStoredAuth } from '../../../Utils/helper/localStorage';
import config from '../../../config';
import { toast } from 'react-toastify';

interface IFooterProps {}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
    const [showListFirst, setShowListFirst] = React.useState<boolean>(false);
    const [showListSecond, setShowListSecond] = React.useState<boolean>(false);
    const [showListThird, setShowListThird] = React.useState<boolean>(false);
    const [listPortfolios, setListPortfolios] = React.useState<IGetPortfolios[]>();

    const auth = getStoredAuth();

    const navigate = useNavigate();

    React.useEffect(() => {
        portfoliosRequest.getListPortfolios().then((res) => setListPortfolios(res));
    }, []);

    const handleShowMoreListFirst = () => {
        setShowListFirst(!showListFirst);
    };
    const handleShowMoreListSecond = () => {
        setShowListSecond(!showListSecond);
    };
    const handleShowMoreListThird = () => {
        setShowListThird(!showListThird);
    };

    const handleNavigate = (id: number) => {
        navigate(`/shop/${id}`, { state: id });
    };

    const handleRouteProtect = (route: string) => {
        if (auth) {
            navigate(route);
        } else {
            toast.info('Bạn cần đăng nhập', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleRoutePublic = (route: string) => {
        navigate(route);
    };

    const handleRouteExternal = (link: string) => {
        window.open(link, '_blank');
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
                            <Input type="text" className="input" placeholder="Nhập email của bạn" />

                            <Button className="btn">Đăng ký</Button>
                        </div>
                        <p className="item-footer">Địa chỉ cửa hàng</p>
                        <p className="item-footer">124, Ngõ 136 Minh Khai, Bắc Từ Liêm</p>
                        <p className="item-footer">68, Triều Khúc, Tân Triều, Thanh Trì</p>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListFirst}>
                            <h3 className="title-footer">Thể loại sản phẩm</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>
                        <div className={`content-header ${showListFirst && 'show'}`}>
                            {listPortfolios?.map((item: IGetPortfolios) => (
                                <p className="item-footer" onClick={() => handleNavigate(item.id)}>
                                    {item.name_portfolios}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListSecond}>
                            <h3 className="title-footer">Khách hàng quan tâm</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>

                        <div className={`content-header ${showListSecond && 'show'}`}>
                            <p className="item-footer" onClick={() => handleRouteProtect(config.profile)}>
                                Tài Khoản
                            </p>
                            <p className="item-footer" onClick={() => handleRouteProtect(config.order)}>
                                Lịch sử đơn hàng
                            </p>
                            <p className="item-footer" onClick={() => handleRouteProtect(config.cart)}>
                                Giỏ hàng
                            </p>
                            <p className="item-footer" onClick={() => handleRouteProtect(config.wishList)}>
                                Sản phẩm quan tâm
                            </p>
                        </div>
                    </div>
                    <div className="list-footer">
                        <div className="header-item" onClick={handleShowMoreListThird}>
                            <h3 className="title-footer">Trang</h3>
                            <DownArrowIcon width="1.5rem" height="1.5rem" className="arrow-icon" />
                        </div>

                        <div className={`content-header ${showListThird && 'show'}`}>
                            <p className="item-footer" onClick={() => handleRoutePublic(config.blog)}>
                                Bài viết
                            </p>
                            <p className="item-footer" onClick={() => handleRoutePublic(config.aboutUs)}>
                                Giới thiệu
                            </p>
                            <p className="item-footer" onClick={() => handleRouteProtect(config.bookView)}>
                                Đặt lịch{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="inner-bottom-footer">
                    <p className="copy-right">©Webecy - HEKTO</p>
                    <div className="social-logo">
                        <div onClick={() => handleRouteExternal('https://www.facebook.com/gjang.ngovan.1/')}>
                            <FacebookIcon width="2rem" height="2rem" className="icon" />
                        </div>
                        <div onClick={() => handleRouteExternal('https://www.instagram.com/giang__1902/')}>
                            <InstagramIcon width="2rem" height="2rem" className="icon" />
                        </div>
                        <div onClick={() => handleRouteExternal('https://www.facebook.com/gjang.ngovan.1/')}>
                            <TwitterIcon width="2rem" height="2rem" className="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

export default Footer;
