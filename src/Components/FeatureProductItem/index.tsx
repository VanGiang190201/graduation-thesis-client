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
        for (let i = 0; i < wishList?.length; i++) {
            let wishListItem: IWishListItem = wishList[i];
            if (wishListItem.product_id == data.id) {
                setIsLight(true);
            }
        }
    }, [wishList?.length]);
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

    //remove product to wishlist

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
    return (
        <Wrapper>
            <div className="product-image">
                <Image
                    src={data.image_product}
                    alt={data.name_product}
                    className={`image ${levelRoom % 2 === 0 ? 'room' : ''}`}
                />
                <div className="active">
                    <Button className="active-btn">
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
                <Button className="view-btn" onClick={handleViewProductDetail}>
                    View Details
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
                <p className="code-product">Code - Y523201</p>
                <p className="price-product">{`$ ${(
                    data.price_product -
                    (data.price_product * data.sale) / 100
                ).toFixed(2)}`}</p>
            </div>
        </Wrapper>
    );
};

export default FeatureProductItem;
