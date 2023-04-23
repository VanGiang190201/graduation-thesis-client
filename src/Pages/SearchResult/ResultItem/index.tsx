import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../Components/Button';
import { CartIcon, HeartIcon, SearchPlusIcon, StarIcon } from '../../../Components/Icons';
import Image from '../../../Components/Image';
import { IProduct } from '../../../Utils/interface';
import Wrapper from './ResultItem.style';
import { useAppDisPatch, useAppSelector } from '../../../reudux/hook';
import * as cartRequest from '../../../api/cartApi';
import * as productRequest from '../../../api/productApi';
import { addProductToWishList, deleteProductToWishList } from '../../../reudux/feature/wishListSlide';
import * as wishListRequest from '../../../api/wishListApi';
import { addCart } from '../../../reudux/feature/cartSlide';
import { Text } from '../../../Components/Text';
import { IWishListItem } from '../../../Components/FeatureProductItem';
import { toast } from 'react-toastify';
import config from '../../../config';

interface IResultItemProps {
    id: number;
    setWishList?: any;
}

const ResultItem: React.FunctionComponent<IResultItemProps> = (props) => {
    const { id, setWishList } = props;
    const [levelRoom, setLevelRoom] = React.useState<number>(1);
    const [product, setProduct] = React.useState<any>();
    const navigate = useNavigate();
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const cart = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const [isLight, setIsLight] = React.useState<boolean>(false);
    const wishList = useAppSelector((state) => state.persistedReducer.wishList.listWish);
    const dispatch = useAppDisPatch();

    React.useEffect(() => {
        productRequest.getProductById(id).then((res: any) => {
            setProduct(res[0]);
        });
        wishListRequest.isItemWishList(id).then((res) => setIsLight(res.isWishList));
    }, []);
    const handleAddCart = () => {
        dispatch(addCart({ selected_code_product: '', number: 1, product_id: id }))
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
    };
    const handleRoomIn = () => {
        setLevelRoom((prev) => prev + 1);
    };
    const handleViewDetail = () => {
        navigate(`/products/${product.id}`, { state: product.id });
    };
    const showRateStar = () => {
        let listStar = [];
        for (let i = 0; i < product?.rate; i++) {
            listStar.push(i);
        }
        return listStar;
    };

    const showUnRateStar = () => {
        let listUnRate = [];
        for (let i = 0; i < 5 - showRateStar().length; i++) {
            listUnRate.push(i);
        }
        return listUnRate;
    };

    const handleUpdateWishList = () => {
        if (Object.keys(currentUser).length > 0) {
            wishListRequest.updateWishList(id).then((res) => {
                setIsLight(res.isWishList);
                setWishList(res.wish_list);
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

    return (
        <Wrapper>
            <div className="image-wrapper" onClick={handleViewDetail}>
                <Image
                    src={product?.image_product}
                    alt={product?.name_product}
                    className={`image ${levelRoom % 2 === 0 ? 'room' : ''}`}
                />
            </div>
            <div className="information">
                <div className="first-information">
                    <Text textOfLine={1} className="name">
                        {product?.name_product}
                    </Text>
                    <div className="color">
                        <span className="first-color"></span>
                        <span className="second-color"></span>
                        <span className="third-color"></span>
                    </div>
                </div>
                <div className="second-information">
                    <p className="sale-price">
                        {product?.price_product - (product?.sale * product?.price_product) / 100} VNĐ
                    </p>
                    <p className="normal-price">{product?.price_product} VNĐ</p>
                    <div className="star">
                        {showRateStar().map((star: number) => (
                            <StarIcon width="1.6rem" height="1.6rem" className="star-light" key={star} />
                        ))}

                        {showUnRateStar().map((star: number) => (
                            <StarIcon width="1.6rem" height="1.6rem" className="star" key={star} />
                        ))}
                    </div>
                </div>
                <Text textOfLine={2} className="description">
                    <div dangerouslySetInnerHTML={{ __html: product?.description_product ?? '' }} />
                </Text>
                <div className="active">
                    <Button className="active-btn" onClick={handleAddCart}>
                        <CartIcon width="1.8rem" height="1.8rem" className="cart-icon" />
                    </Button>

                    <Button className="active-btn" onClick={handleUpdateWishList}>
                        <HeartIcon width="2rem" height="2rem" className={`heart-icon ${isLight ? 'isLight' : ''}`} />
                    </Button>
                    <Button className="active-btn" onClick={handleRoomIn}>
                        <SearchPlusIcon width="1.8rem" height="1.8rem" className="search-plus-icon" />
                    </Button>
                </div>
            </div>
        </Wrapper>
    );
};

export default ResultItem;
