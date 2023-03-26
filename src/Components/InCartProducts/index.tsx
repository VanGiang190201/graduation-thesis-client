import * as React from 'react';
import { useState } from 'react';

import Button from '../Button';
import { CancelIcon } from '../Icons';
import Image from '../Image';
import Wrapper from './InCartProducts.style';
import { IGetCart } from '../../Utils/interface';
import * as productRequest from '../../api/productApi';
import * as cartRequest from '../../api/cartApi';
import { deleteCart, updateQuantityCart } from '../../reudux/feature/cartSlide';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { cartSlide } from '../../reudux/feature/cartSlide';
import { Text } from '../Text';
import { toast } from 'react-toastify';
interface IInCartProductsProps {
    data: IGetCart;
    payment?: boolean;
}

const InCartProducts: React.FunctionComponent<IInCartProductsProps> = (props) => {
    const { data, payment } = props;
    const [quantity, setQuantity] = useState<number>(data.number);
    const [isChange, setIsChange] = useState<boolean>(true);
    const [product, setProduct] = useState<any>({});
    const dispatch = useAppDisPatch();
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const isChangeMoney: boolean = useAppSelector((state) => state.persistedReducer.cart.isChangeMoney);
    //handle update quantity product in cart

    const handleUpdateQuantityIncrement = () => {
        let newCart: any = [];
        let newProductUpdate = {};
        for (let i = 0; i < cart.length; i++) {
            const cartItem: any = cart[i];
            if (cartItem.product_id === data.product_id) {
                newProductUpdate = {
                    product_id: cartItem.product_id,
                    amount: quantity + 1,
                    color: cartItem.color,
                    size: cartItem.size,
                    sub_total:
                        Math.round(product?.price_product - (product?.price_product * product?.sale) / 100) *
                        (quantity + 1),
                };
                newCart.push(newProductUpdate);
            }
            if (cartItem.product_id !== data.product_id) {
                newCart.push(cartItem);
            }
        }

        return newCart;
    };

    const handleUpdateQuantityDecrement = () => {
        let newCart: any = [];
        let newProductUpdate = {};
        for (let i = 0; i < cart.length; i++) {
            const cartItem: any = cart[i];
            if (cartItem.product_id === data.product_id) {
                newProductUpdate = {
                    product_id: cartItem.product_id,
                    amount: quantity - 1,
                    color: cartItem.color,
                    size: cartItem.size,
                    sub_total:
                        Math.round(product?.price_product - (product?.price_product * product.sale) / 100) *
                        (quantity - 1),
                };
                newCart.push(newProductUpdate);
            }
            if (cartItem.product_id !== data.product_id) {
                newCart.push(cartItem);
            }
        }

        return newCart;
    };

    //
    React.useEffect(() => {
        productRequest.getProductById(data.product_id).then((res) => {
            setProduct(res[0]);
            setQuantity(data.number);
        });
    }, [data.number]);
    //Handle delete product in cart
    const deleteProduct = () => {
        const newCart: any = [];
        for (let i = 0; i < cart.length; i++) {
            const cartItem: any = cart[i];
            if (cartItem.product_id !== data.product_id) {
                newCart.push(cartItem);
            }
        }
        return newCart;
    };

    const handleCancelCartProduct = () => {
        cartRequest.getListCart().then((res) =>
            dispatch(
                deleteCart({
                    id: res[0].id,
                    user_id: currentUser.id,
                    cart: [...deleteProduct()],
                }),
            )
                .unwrap()
                .then((data) => {
                    toast.success('Remove product susses ✔', {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'dark',
                    });
                }),
        );
    };
    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1);
        setIsChange(!isChange);
        dispatch(cartSlide.actions.setIsChangeMoney(!isChangeMoney));

        cartRequest.getListCart().then((res) => {
            dispatch(
                updateQuantityCart({
                    id: res[0].id,
                    user_id: currentUser.id,
                    cart: [...handleUpdateQuantityIncrement()],
                }),
            );
        });
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
            setIsChange(!isChange);
            dispatch(cartSlide.actions.setIsChangeMoney(!isChangeMoney));
            cartRequest.getListCart().then((res) => {
                dispatch(
                    updateQuantityCart({
                        id: res[0].id,
                        user_id: currentUser.id,
                        cart: [...handleUpdateQuantityDecrement()],
                    }),
                );
            });
        }
    };
    return (
        <Wrapper>
            <div className={`container-product ${payment && 'payment'}`}>
                <div className="product ">
                    <div className="left-content">
                        <Image src={product?.image_product} alt="" className="image" />
                        <Button className="cancel-btn" onClick={handleCancelCartProduct}>
                            <CancelIcon width="1.2rem" height="1.2rem" className="cancel-icon" />
                        </Button>
                    </div>
                    <div className="right-content">
                        <Text textOfLine={2} className="name-product">
                            {product?.name_product}
                        </Text>
                        <p className="color-product">Color : {data?.color}</p>
                        <p className="size-product">Size : {data?.size}</p>
                    </div>
                </div>
                <p className="price">{`$ ${
                    product?.sale
                        ? (product?.price_product - (product?.price_product * product.sale) / 100)?.toFixed(2)
                        : product?.price_product?.toFixed(2)
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
                        {((product?.price_product - (product?.price_product * product?.sale) / 100) * quantity).toFixed(
                            2,
                        )}
                    </p>
                )}
            </div>
        </Wrapper>
    );
};

export default InCartProducts;
