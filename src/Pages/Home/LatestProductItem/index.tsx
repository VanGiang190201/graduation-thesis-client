import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Wrapper from './LatestProductItem.style';
import Image from '../../../Components/Image';
import Button from '../../../Components/Button';
import { CartIcon, HeartIcon, SearchPlusIcon } from '../../../Components/Icons';
import { saleLabel, hotLabel } from '../../../assets/images';
import { IProduct } from '../../../Utils/interface';
import { useAppDisPatch, useAppSelector } from '../../../reudux/hook';
import * as cartRequest from '../../../api/cartApi';
import { addCart } from '../../../reudux/feature/cartSlide';
import config from '../../../config';
import { Text } from '../../../Components/Text';
import { IWishListItem } from '../../../Components/FeatureProductItem';
import * as wishListRequest from '../../../api/wishListApi';
import { addProductToWishList, deleteProductToWishList } from '../../../reudux/feature/wishListSlide';
import Loading from '../../../Components/Loading';

interface ILatestProductItemProps {
    data: IProduct;
}
const LatestProductItem: React.FunctionComponent<ILatestProductItemProps> = (props) => {
    const { data } = props;
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const cart = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const [isLight, setIsLight] = React.useState<boolean>(false);
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const salePrice = data.price_product - (data.price_product * data.sale) / 100;
    const dispatch = useAppDisPatch();
    const [levelRoom, setLevelRoom] = React.useState<number>(1);
    const navigate = useNavigate();

    React.useEffect(() => {
        for (let i = 0; i < wishList?.length; i++) {
            let wishListItem: IWishListItem = wishList[i];
            if (wishListItem.product_id == data.id) {
                setIsLight(true);
            }
        }
    }, [wishList?.length]);

    //Add product to cart
    const handleAddCart = () => {
        if (Object.keys(currentUser).length > 0) {
            cartRequest.getListCart().then((res) => {
                dispatch(
                    addCart({
                        id: res[0].id,
                        user_id: currentUser.id,
                        cart: [
                            ...res[0].cart,
                            {
                                product_id: data.id,
                                amount: 1,
                                color: 'Black',
                                size: 'XL',
                                sub_total: salePrice * 1,
                            },
                        ],
                    }),
                )
                    .unwrap()
                    .then((data) => {
                        toast.success(<div onClick={() => navigate(config.cart)}>Add cart susses ✔</div>, {
                            position: 'top-right',
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'dark',
                        });
                    });
            });
        } else {
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
        }
        // setTimeout(() => navigate(config.cart), 1200);
    };

    //add product to wishlist
    const handleAddWishList = () => {
        if (Object.keys(currentUser).length > 0) {
            wishListRequest.getWishListByUserId(currentUser.id).then((res) => {
                dispatch(
                    addProductToWishList({
                        id: res[0].id,
                        user_id: currentUser.id,
                        wishlist: [
                            ...res[0].wishlist,
                            {
                                product_id: data.id,
                            },
                        ],
                    }),
                );
            });
        } else {
            toast.info('Please ! Login to add wish list', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    //remove product from wishlist

    const deleteWishList = () => {
        const newWishList: any = [];
        for (let i = 0; i < wishList.length; i++) {
            const wishListItem: any = wishList[i];
            if (wishListItem.product_id !== data.id) {
                newWishList.push(wishListItem);
            }
        }
        return newWishList;
    };
    const handleRemoveWishList = () => {
        setIsLight(false);
        if (Object.keys(currentUser).length > 0) {
            wishListRequest.getWishListByUserId(currentUser.id).then((res) => {
                dispatch(
                    deleteProductToWishList({
                        id: res[0].id,
                        user_id: currentUser.id,
                        wishlist: [...deleteWishList()],
                    }),
                );
            });
        }
    };
    const handleRoomImage = () => {
        setLevelRoom((prev) => prev + 1);
    };
    const handleViewDetail = () => {
        navigate(`/products/${data.id}`, { state: data.id });
    };
    return (
        <Wrapper>
            <div className="image-product">
                <Image
                    src={data.image_product}
                    alt={data.name_product}
                    className={`image ${levelRoom % 2 === 0 ? 'room' : ''}`}
                />
                <div className="active">
                    <Button className="active-btn" onClick={handleAddCart}>
                        <CartIcon width="2rem" height="2rem" className="cart-icon" />
                    </Button>
                    {isLight ? (
                        <Button className="active-btn" onClick={handleRemoveWishList}>
                            <HeartIcon
                                width="2rem"
                                height="2rem"
                                className={`heart-icon ${isLight ? 'isLight' : ''}`}
                            />
                        </Button>
                    ) : (
                        <Button className="active-btn" onClick={handleAddWishList}>
                            <HeartIcon
                                width="2rem"
                                height="2rem"
                                className={`heart-icon ${isLight ? 'isLight' : ''}`}
                            />
                        </Button>
                    )}
                    <Button className="active-btn" onClick={handleRoomImage}>
                        <SearchPlusIcon width="2rem" height="2rem" className="search-plus-icon" />
                    </Button>
                </div>
                {data.sale && <Image src={saleLabel} alt="sale-label" className="sale-label" />}
                {data.sale > 40 && <Image src={hotLabel} alt="hot-label" className="hot-label" />}
            </div>
            <div className="information-product" onClick={handleViewDetail}>
                <div className="name-product-wrapper">
                    <Text textOfLine={1} className="name-product">
                        {data.name_product}
                    </Text>
                </div>
                {data.sale && (
                    <p className="sale-price-product">{`$ ${(
                        data.price_product -
                        (data.price_product * data.sale) / 100
                    ).toFixed(2)}`}</p>
                )}
                <p className={data.sale ? 'price-product' : 'price-normal'}>{`$ ${data?.price_product}`}</p>
            </div>
        </Wrapper>
    );
};

export default LatestProductItem;
