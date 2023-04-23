import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as cartRequest from '../../api/cartApi';
import * as wishListRequest from '../../api/wishListApi';
import * as productRequest from '../../api/productApi';
import Button from '../../Components/Button';
import { IWishListItem } from '../../Components/FeatureProductItem';
import { FacebookIcon, HeartIcon, InstagramIcon, SpinnerIcon, StarIcon, TwitterIcon } from '../../Components/Icons';
import Image from '../../Components/Image';
import { Text } from '../../Components/Text';
import config from '../../config';
import { addCart } from '../../reudux/feature/cartSlide';
import { addProductToWishList, deleteProductToWishList } from '../../reudux/feature/wishListSlide';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { IProduct, IGetImage } from '../../Utils/interface';
import { TopContentWrapper } from './ProductDetail.style';
import { Image as ImageAnt } from 'antd';

interface ITopContentProps {
    data: IProduct;
}

const TopContent: React.FunctionComponent<ITopContentProps> = (props) => {
    const { data } = props;
    const navigate = useNavigate();
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const dispatch = useAppDisPatch();
    const [currentImage, setCurrentImage] = React.useState<string>(data.image_product);
    const [selectCodeImage, setSelectCodeImage] = React.useState<string>();
    const [quantity, setQuantity] = React.useState<number>(1);
    const [isLight, setIsLight] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [listOtherImage, setListOtherImage] = React.useState<IGetImage[]>([]);
    const [size, setSize] = React.useState<string>('L');

    React.useEffect(() => {
        productRequest.getListImageProduct(data.id).then((res) => setListOtherImage(res));
        wishListRequest.isItemWishList(data.id).then((res) => setIsLight(res.isWishList));
    }, [data.id]);

    const handleAddCart = () => {
        setIsLoading(true);
        if (Object.keys(currentUser).length > 0) {
            dispatch(addCart({ selected_code_product: selectCodeImage, number: quantity, product_id: data.id }))
                .unwrap()
                .then((res) => {
                    setIsLoading(false);
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
        // setTimeout(() => navigate(config.cart), 1200);
    };

    const showRateStar = () => {
        let listStar = [];
        for (let i = 0; i < data.rate; i++) {
            listStar.push(i);
        }
        return listStar;
    };

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handlePickSize = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSize(e.target.value);
    };

    React.useEffect(() => {
        for (let i = 0; i < wishList?.length; i++) {
            let wishListItem: IWishListItem = wishList[i];
            if (wishListItem.product_id == data.id) {
                setIsLight(true);
            }
        }
    }, [wishList?.length]);
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

    const handleChangePrimaryImage = (item: IGetImage) => {
        setCurrentImage(item.image_product);
        setSelectCodeImage(item.code_id);
    };
    return (
        <TopContentWrapper>
            <div className="top-content">
                <div className="images-wrapper">
                    {listOtherImage.length > 0 && (
                        <div className="left-images">
                            {listOtherImage?.map((item, index) => (
                                <div
                                    className={`child-image ${item.image_product == currentImage && 'isActive'}`}
                                    key={index}
                                    onClick={() => handleChangePrimaryImage(item)}
                                >
                                    <Image src={item.image_product} alt="" className="image" />
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="right-images">
                        <ImageAnt src={currentImage} alt="" className="bg-image" />
                    </div>
                </div>
                <div className="information-wrapper">
                    <Text textOfLine={3} className="name-product">
                        {data?.name_product}
                    </Text>
                    <div className="rate-product">
                        {showRateStar().map((star: number) => (
                            <StarIcon width="1.6rem" height="1.6rem" className="star" key={star} />
                        ))}
                    </div>
                    <div className="price-product">
                        <p className="sale-price">{`$ ${
                            data?.price_product - (data?.price_product * data?.sale) / 100
                        }`}</p>
                        <p className="normal-price">{`$ ${data?.price_product}`}</p>
                    </div>

                    <Text textOfLine={3} className="description-product">
                        <div dangerouslySetInnerHTML={{ __html: data?.description_product ?? '' }} />
                    </Text>
                    <div className="active">
                        <Button className="add-cart-btn" onClick={handleAddCart}>
                            {isLoading ? (
                                <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" />
                            ) : (
                                'Add To Cart'
                            )}
                        </Button>

                        <div onClick={handleUpdateWishList}>
                            <HeartIcon width="2rem" height="2rem" className={`heart-icon ${isLight && 'isLight'}`} />
                        </div>
                    </div>
                    <div className="quantity-wrapper">
                        <p className="title">Quantity</p>
                        <div className="quantity">
                            <Button
                                className={`decrement quantity-btn ${quantity == 1 && 'disable-btn'}`}
                                onClick={decrementQuantity}
                            >
                                {' '}
                                -{' '}
                            </Button>
                            <span> {quantity} </span>
                            <Button className="increment quantity-btn" onClick={incrementQuantity}>
                                {' '}
                                +{' '}
                            </Button>
                        </div>
                    </div>
                    <div className="size">
                        <p className="title">Size</p>
                        <div className="container-size">
                            <input
                                type="radio"
                                className="radio"
                                name="size"
                                id="X"
                                value="X"
                                onChange={handlePickSize}
                            />
                            <label htmlFor="X" className={`label-sizeX ${size === 'X' ? 'checked' : ''}`}>
                                X
                            </label>
                            <input
                                type="radio"
                                className="radio"
                                name="size"
                                id="L"
                                value="L"
                                onChange={handlePickSize}
                            />
                            <label htmlFor="L" className={`label-sizeL ${size === 'L' ? 'checked' : ''}`}>
                                L
                            </label>
                            <input
                                type="radio"
                                className="radio"
                                name="size"
                                id="XL"
                                value="XL"
                                onChange={handlePickSize}
                            />
                            <label htmlFor="XL" className={`label-sizeXL ${size === 'XL' ? 'checked' : ''}`}>
                                XL
                            </label>
                            <input
                                type="radio"
                                className="radio"
                                name="size"
                                id="XXL"
                                value="XXL"
                                onChange={handlePickSize}
                            />
                            <label htmlFor="XXL" className={`label-sizeXXL ${size === 'XXL' ? 'checked' : ''}`}>
                                XXL
                            </label>
                        </div>
                    </div>
                    <div className="share">
                        <p>Share</p>
                        <span>
                            <div className="social-logo">
                                <FacebookIcon width="1.8rem" height="1.8rem" className="facebook-icon icon" />
                                <InstagramIcon width="1.8rem" height="1.8rem" className="instagram-icon icon" />
                                <TwitterIcon width="1.8rem" height="1.8rem" className="twitter-icon icon" />
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </TopContentWrapper>
    );
};

export default TopContent;
