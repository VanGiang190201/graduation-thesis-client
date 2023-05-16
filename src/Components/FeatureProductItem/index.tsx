import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../Button';
import Image from '../Image';
import Wrapper from './FeatureProductItem.style';
import { SearchPlusIcon, HeartIcon, CartIcon } from '../Icons';
import { IProduct } from '../../Utils/interface';
import { Text } from '../Text';
import { useAppSelector, useAppDisPatch } from '../../reudux/hook';
import { addProductToWishList, deleteProductToWishList } from '../../reudux/feature/wishListSlide';
import * as wishListRequest from '../../api/wishListApi';
import config from '../../config';
import { addCart } from '../../reudux/feature/cartSlide';
interface IFeatureProductItemProps {
    data: IProduct;
}

export interface IWishListItem {
    product_id?: number;
}
const FeatureProductItem: React.FunctionComponent<IFeatureProductItemProps> = (props) => {
    const { data } = props;
    const [levelRoom, setLevelRoom] = React.useState<number>(1);
    const [isLight, setIsLight] = React.useState<boolean>(false);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);

    const navigate = useNavigate();
    const dispatch = useAppDisPatch();
    const handleViewProductDetail = () => {
        navigate(`/products/${data.id}`, { state: data.id });
    };

    const handleRoomImage = () => {
        setLevelRoom((prev) => prev + 1);
    };

    React.useEffect(() => {
        wishListRequest.isItemWishList(data.id).then((res) => setIsLight(res.isWishList));
    }, []);
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

            setTimeout(() => navigate(config.login), 500);
        }
    };
    return (
        <Wrapper>
            <div className="product-image">
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
                <Button className="view-btn" onClick={handleViewProductDetail}>
                    Chi tiết
                </Button>
            </div>
            <div className="information-product">
                <Text textOfLine={2} className="name-product">
                    {data.name_product}
                </Text>
                <div className="color-product">
                    <div className="color"></div>
                    <div className="color"></div>
                    <div className="color"></div>
                </div>
                <p className="price-product">
                    {`${(data.price_product - (data.price_product * data.sale) / 100).toLocaleString('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                    })}`}{' '}
                </p>
            </div>
        </Wrapper>
    );
};

export default FeatureProductItem;
