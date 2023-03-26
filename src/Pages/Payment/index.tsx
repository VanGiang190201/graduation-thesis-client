import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as cartRequest from '../../api/cartApi';
import Button from '../../Components/Button';
import InCartProducts from '../../Components/InCartProducts';
import Loading from '../../Components/Loading';
import PayTotals from '../../Components/PayTotals';
import config from '../../config';
import { cartSlide, deleteCart } from '../../reudux/feature/cartSlide';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { ICart, IFormInput } from '../../Utils/interface';
import { schema_payment } from '../../validation';
import InformationForm from './InformationForm';
import Wrapper from './Payment.style';
import firebaseClient from '../../api/firebaseClientServer';

interface IPaymentProps {}

const Payment: React.FunctionComponent<IPaymentProps> = (props) => {
    const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const tokenNotification = useAppSelector((state) => state.persistedReducer.notification.tokenNotification);
    const [listProductCart, setListProductCart] = useState<ICart[]>(cart);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);
    const dispatch = useAppDisPatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        mode: 'onTouched',
        resolver: yupResolver(schema_payment),
    });
    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            setIsLoading(false);
            setListProductCart(cart);
        }
    }, [cart?.length]);
    const handleSubmitFormText = (data: any) => {
        dispatch(
            cartSlide.actions.setShip({
                informationShip: data,
                order: listProductCart,
            }),
        );
        cartRequest.getListCartByUserId(currentUser.id).then((res) => {
            setIsLoadingPayment(true);
            dispatch(
                deleteCart({
                    id: res[0].id,
                    user_id: currentUser.id,
                    cart: [],
                }),
            )
                .unwrap()
                .then((data) => {
                    setIsLoadingPayment(false);
                    setTimeout(() => navigate(config.orderCompleted, { replace: true }));
                    setTimeout(() => handleTest(), 3000);
                });
        });
    };
    const handleRouteListProduct = () => {
        navigate(config.listProduct);
    };
    const handleTest = () => {
        firebaseClient.post('/send', {
            to: tokenNotification,
            notification: {
                title: 'Successful purchase!',
                body: 'Thank you for your purchase. Hope you will continue to support us.',
                image: 'https://lh3.googleusercontent.com/ogw/AAEL6shVsXzxPV4yUSvUCCUt6vLX0oSYoExGn60jjo7m=s32-c-mo',
                mutable_content: true,
                sound: 'Tri-tone',
            },
            data: {
                url: '<url of media image>',
                dl: '<deeplink action on tap of notification>',
            },
        });
    };
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                {cart?.length > 0 ? (
                    <div className="form">
                        <InformationForm register={register} errors={errors} />
                    </div>
                ) : (
                    <div className="blank">
                        <h2>Let's Shopping! Your cart is blank</h2>
                        <Button className="btn-view-product" onClick={handleRouteListProduct}>
                            List Product
                        </Button>
                    </div>
                )}
                {cart?.length > 0 && (
                    <div className="pay-detail">
                        <div className="list-product">
                            {listProductCart.map((item: ICart, index) => (
                                <InCartProducts key={index} data={item} payment />
                            ))}
                        </div>
                        <div className="pay-total">
                            <div className="detail-totals">
                                <PayTotals
                                    payment
                                    listProductCart={listProductCart}
                                    handleForm={handleSubmit(handleSubmitFormText)}
                                    isLoadingPayment={isLoadingPayment}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Payment;
