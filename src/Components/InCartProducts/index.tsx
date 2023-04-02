import * as React from 'react';
import { useState } from 'react';

import Button from '../Button';
import { CancelIcon } from '../Icons';
import Image from '../Image';
import Wrapper from './InCartProducts.style';
import { IGetCart, IGetImage } from '../../Utils/interface';
import * as imageRequest from '../../api/imageApi';
import { deleteCart, updateQuantityCart } from '../../reudux/feature/cartSlide';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { cartSlide } from '../../reudux/feature/cartSlide';
import { Text } from '../Text';
import { toast } from 'react-toastify';
interface IInCartProductsProps {
    data: IGetCart;
    payment?: boolean;
    setIsChangeMoney?: any;
    setListProductCart?: any;
    isChangeMoney?: boolean;
}

const InCartProducts: React.FunctionComponent<IInCartProductsProps> = (props) => {
    const { data, payment, setIsChangeMoney, isChangeMoney, setListProductCart } = props;
    const [quantity, setQuantity] = useState<number>(data.number);
    const [isChange, setIsChange] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<IGetImage>();
    const dispatch = useAppDisPatch();
    // const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    // const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    // const isChangeMoney: boolean = useAppSelector((state) => state.persistedReducer.cart.isChangeMoney);

    React.useEffect(() => {
        imageRequest.getImageByCodeID(data.selected_code_product).then((res) => setSelectedImage(res[0]));
    }, [isChangeMoney]);
    //Handle delete product in cart
    console.log(selectedImage);

    const handleCancelCartProduct = () => {
        dispatch(deleteCart(data.id))
            .unwrap()
            .then((res) => {
                setIsChangeMoney(!isChangeMoney);
                setListProductCart(res.list_cart);
                toast.success(res.message, {
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
    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
        setIsChange(!isChange);
        setIsChangeMoney(!isChangeMoney);
        dispatch(updateQuantityCart({ id: data.id, number: { number: quantity + 1 } }));
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            setIsChange(!isChange);
            dispatch(cartSlide.actions.setIsChangeMoney(!isChangeMoney));
            setIsChangeMoney(!isChangeMoney);
            dispatch(updateQuantityCart({ id: data.id, number: { number: quantity - 1 } }));
        }
    };
    return (
        <Wrapper>
            <div className={`container-product ${payment && 'payment'}`}>
                <div className="product ">
                    <div className="left-content">
                        <Image
                            src={data.selected_code_product ? selectedImage?.image_product : data.image_product}
                            alt=""
                            className="image"
                        />
                        <Button className="cancel-btn" onClick={handleCancelCartProduct}>
                            <CancelIcon width="1.2rem" height="1.2rem" className="cancel-icon" />
                        </Button>
                    </div>
                    <div className="right-content">
                        <Text textOfLine={2} className="name-product">
                            {data?.name_product}
                        </Text>

                        <p className="code-product">
                            Code : {data.selected_code_product ? data.selected_code_product : 'Default'}
                        </p>
                    </div>
                </div>
                <p className="price">{`$ ${
                    data?.sale
                        ? (data?.price_product - (data?.price_product * data.sale) / 100)?.toFixed(2)
                        : data?.price_product?.toFixed(2)
                }`}</p>
                {!payment && (
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
                )}
                {!payment && (
                    <p className="total-price">
                        ‎£
                        {((data?.price_product - (data?.price_product * data?.sale) / 100) * quantity).toFixed(2)}
                    </p>
                )}
            </div>
        </Wrapper>
    );
};

export default InCartProducts;
