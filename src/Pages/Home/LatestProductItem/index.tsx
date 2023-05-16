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
    const [isLight, setIsLight] = React.useState<boolean>(false);
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const dispatch = useAppDisPatch();
    const [levelRoom, setLevelRoom] = React.useState<number>(1);
    const navigate = useNavigate();

    React.useEffect(() => {
        wishListRequest.isItemWishList(data.id).then((res) => setIsLight(res.isWishList));
    }, [wishList?.length]);

    //Add product to cart
    const handleAddCart = () => {
        if (Object.keys(currentUser).length > 0) {
            dispatch(addCart({ selected_code_product: '', number: 1, product_id: data.id }))
                .unwrap()
                .then((res) => {
                    toast.success(<div onClick={() => navigate(config.cart)}>{res.message}</div>, {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    });
                });
        } else {
            setTimeout(
                () =>
                    toast.info('Bạn cần đăng nhập', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    }),
                200,
            );

            setTimeout(() => navigate(config.login), 500);
        }
    };

    //update product to wishlist
    const handleUpdateWishList = () => {
        if (Object.keys(currentUser).length > 0) {
            wishListRequest.updateWishList(data.id).then((res) => {
                setIsLight(res.isWishList);
                toast.success(res.message, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            });
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

                    <Button className="active-btn" onClick={handleUpdateWishList}>
                        <HeartIcon width="2rem" height="2rem" className={`heart-icon ${isLight ? 'isLight' : ''}`} />
                    </Button>

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
                    <p className="sale-price-product">
                        {` ${(data.price_product - (data.price_product * data.sale) / 100).toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}`}
                    </p>
                )}
                <p className={data.sale ? 'price-product' : 'price-normal'}>{` ${Number(
                    data?.price_product,
                ).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`}</p>
            </div>
        </Wrapper>
    );
};

export default LatestProductItem;
