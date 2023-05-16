import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signOut, getAuth } from 'firebase/auth';
import HeadlessTippy from '@tippyjs/react/headless';
import { FaShippingFast, FaUserAlt } from 'react-icons/fa';

import { Wrapper } from './Header.style';
import { useAppDisPatch } from '../../../reudux/hook';
import { authSlide } from '../../../reudux/feature/authSlide';
import { useAppSelector } from '../../../reudux/hook';
import config from '../../../config';
import {
    MailIcon,
    PhoneIcon,
    DownArrowIcon,
    UserIcon,
    HeartIcon,
    CartIcon,
    MoreIcon,
    LogOutIcon,
    BellIcon,
    BellAlertIcon,
} from '../../../Components/Icons';
import Image from '../../../Components/Image';
import { Text } from '../../../Components/Text';
import { UserLogin } from '../../../assets/images';
import Popper from '../../../Components/Popper';
import Notification from '../../../Components/Notification';
import { IGetCart, NotificationDataProps } from '../../../Utils/interface';
import * as cartRequest from '../../../api/cartApi';
import * as notificationRequest from '../../../api/notificationApi';
import { getStoredAuth } from '../../../Utils/helper/localStorage';
import { onMessageListener } from '../../../firebase/firebase.config';

interface IHeaderProps {}
const Header: React.FunctionComponent<IHeaderProps> = () => {
    // Get list product cart
    const [listProductCart, setListProductCart] = React.useState<IGetCart[]>([]);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const cartList = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const [notifications, setNotification] = React.useState<NotificationDataProps[]>([]);
    const navigate = useNavigate();
    const dispatch = useAppDisPatch();

    const [auth, setAuth] = React.useState<string>();

    const [isChangeNoti, setIsChangeNoti] = React.useState<boolean>(false);

    React.useEffect(() => {
        const auth = getStoredAuth();
        setAuth(auth);
    }, []);
    React.useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            cartRequest.getListCart().then((res) => {
                setListProductCart(res?.list_cart);
            });
        }
    }, [cartList?.length]);

    React.useEffect(() => {
        notificationRequest.getListNotification().then((res) => setNotification(res.data));
    }, [isChangeNoti]);

    const filterNotRead = notifications.filter((item: NotificationDataProps) => item.is_read === false);

    React.useEffect(() => {
        const channel = new BroadcastChannel('notifications');
        channel.addEventListener('message', (event) => {
            setIsChangeNoti(!isChangeNoti);
        });
    }, []);

    onMessageListener()
        .then((payload: any) => {
            setIsChangeNoti(!isChangeNoti);
            toast(
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 1rem' }}>
                    <div className="left-content">
                        <h4 style={{ fontWeight: '600' }}>{payload.notification.title}</h4>
                        <p style={{ fontSize: '1.2rem' }}>{payload.notification.body}</p>
                    </div>
                    <div
                        className="right-content"
                        style={{ width: '5rem', height: '5rem', overflow: 'hidden', flexShrink: '0' }}
                    >
                        <Image src={payload.notification.image} alt="" />
                    </div>
                </div>,
            );
        })
        .catch((err) => console.log('failed: ', err));

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(authSlide.actions.logOut());
            })
            .catch((error) => {
                toast.error(error);
            });
    };
    const handleRuleLogin = () => {
        if (!auth) {
            navigate(config.login);
        }
    };

    const handleNavigateWishListPage = () => {
        navigate(config.wishList);
    };
    return (
        <Wrapper>
            <div className="inner">
                <div className="contact-header">
                    <div className="mail-contact">
                        <MailIcon width="1.8rem" height="1.4rem" className="icon-header mail-icon" />
                        <p className="text-header ">ngogiang190201@gmail.com</p>
                    </div>
                    <div className="phone-contact">
                        <PhoneIcon width="1.8rem" height="1.4rem" className="icon-header mail-icon" />
                        <p className="text-header">0868351902</p>
                    </div>
                </div>
                <div className="option-header">
                    {auth ? (
                        <div className="name-wrapper">
                            <div className="avatar">
                                <Image
                                    alt={currentUser?.display_name}
                                    src={currentUser?.avatar ? currentUser.avatar : UserLogin}
                                    className="user-image-login"
                                />
                            </div>

                            <div className="logout-wrapper">
                                <Text className="user-name">{currentUser.display_name}</Text>
                                <div className="profile" onClick={() => navigate(config.profile)}>
                                    <FaUserAlt className="logout-icon" />
                                    <p className="logout-text">Cá nhân</p>
                                </div>
                                <div className="order" onClick={() => navigate(config.order)}>
                                    <FaShippingFast className="logout-icon" />
                                    <p className="logout-text">Đơn hàng</p>
                                </div>
                                <div className="logout" onClick={handleLogout}>
                                    <LogOutIcon width="2rem" height="2rem" className="logout-icon" />
                                    <p className="logout-text">Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {auth ? (
                        <HeadlessTippy
                            placement="bottom-end"
                            offset={[0, 8]}
                            delay={[0, 1000]}
                            interactive
                            render={(attrs) => {
                                return (
                                    <Popper className="popper" {...attrs}>
                                        <div className="wrapper-notification" tabIndex={-1}>
                                            <div className="header-notification">
                                                <p className="heading">Thông báo</p>
                                                <BellIcon
                                                    width="2.2rem"
                                                    height="2rem"
                                                    className="icon-header bell-icon"
                                                />
                                            </div>
                                            <div className="content-notification">
                                                {notifications?.length > 0 ? (
                                                    notifications.map((notification, index) => (
                                                        <Notification
                                                            data={notification}
                                                            key={index}
                                                            setNotification={setNotification}
                                                        />
                                                    ))
                                                ) : (
                                                    <Text className="blank">Chưa có thông báo nào</Text>
                                                )}
                                            </div>
                                        </div>
                                    </Popper>
                                );
                            }}
                        >
                            <Link to="">
                                <div className="notification">
                                    {filterNotRead?.length > 0 ? (
                                        <BellAlertIcon
                                            width="2.2rem"
                                            height="2rem"
                                            className="icon-header bell-alert-icon"
                                        />
                                    ) : (
                                        <BellIcon width="2.2rem" height="2rem" className="icon-header bell-icon" />
                                    )}
                                </div>
                            </Link>
                        </HeadlessTippy>
                    ) : (
                        // <div onClick={handleRuleLogin}>
                        //     <div className="notification">
                        //         <BellIcon width="2.2rem" height="2rem" className="icon-header bell-icon" />
                        //     </div>
                        // </div>
                        ''
                    )}
                    {!auth ? (
                        <div className="login-header" onClick={handleRuleLogin}>
                            <p className="text-header">Đăng nhập</p>
                            <UserIcon width="2rem" height="1.5rem" className="icon-header user-icon" />
                        </div>
                    ) : (
                        ''
                    )}
                    {auth ? (
                        <div className="wish-list" onClick={handleNavigateWishListPage}>
                            <p className={`text-header ${wishList?.length > 0 && 'isLight'}`}>Yêu thích</p>
                            <HeartIcon
                                width="1.8rem"
                                height="1.4rem"
                                className={`icon-header heart-icon ${wishList?.length > 0 && 'isLight'}`}
                            />
                        </div>
                    ) : (
                        <div className="wish-list" onClick={handleRuleLogin}>
                            <p className={`text-header`}>Yêu thích</p>
                            <HeartIcon width="1.8rem" height="1.4rem" className={`icon-header heart-icon`} />
                        </div>
                    )}
                    {auth ? (
                        <Link to={config.cart}>
                            <div className="like-list">
                                <CartIcon width="1.8rem" height="1.6rem" className="icon-header cart-icon" />
                                {listProductCart?.length > 0 && (
                                    <div className="quantity-cart">
                                        <p>{listProductCart?.length > 9 ? '9+' : listProductCart?.length}</p>
                                    </div>
                                )}
                            </div>
                        </Link>
                    ) : (
                        <div onClick={handleRuleLogin}>
                            <div className="like-list">
                                <CartIcon width="1.8rem" height="1.6rem" className="icon-header cart-icon" />
                            </div>
                        </div>
                    )}

                    <div className="more-option">
                        <MoreIcon width="2rem" height="2rem" className="more-icon" />
                        <div className="sub-option">
                            <div className="language-translate">
                                <p className="text-header">English</p>
                                <DownArrowIcon width="1.4rem" height="1.4rem" className="icon-header arrow-icon" />
                            </div>
                            <div className="currency-unit">
                                <p className="text-header">USD</p>
                                <DownArrowIcon width="1.4rem" height="1.4rem" className="icon-header arrow-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal isOpened={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <ModalLogin setIsOpenModal={setIsOpenModal} />
            </Modal> */}
        </Wrapper>
    );
};

export default Header;
