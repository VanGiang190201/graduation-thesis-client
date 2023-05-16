import { yupResolver } from '@hookform/resolvers/yup';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import * as cartRequest from '../../api/cartApi';
import * as orderRequest from '../../api/orderApi';
import Button from '../../Components/Button';
import InCartProducts from '../../Components/InCartProducts';
import Loading from '../../Components/Loading';
import PayTotals from '../../Components/PayTotals';
import config from '../../config';
import { cartSlide, deleteCart } from '../../reudux/feature/cartSlide';
import { useAppDisPatch, useAppSelector } from '../../reudux/hook';
import { IFormInput, IGetCart } from '../../Utils/interface';
import { schema_payment } from '../../validation';
import InformationForm from './InformationForm';
import Wrapper from './Payment.style';
import firebaseClient from '../../api/firebaseClientServer';
import * as vnpayRequest from '../../api/vnpayApi';
import { toast } from 'react-toastify';

interface IPaymentProps {}

const Payment: React.FunctionComponent<IPaymentProps> = (props) => {
    const cart: any = useAppSelector((state) => state.persistedReducer.cart.listCart);
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const tokenNotification = useAppSelector((state) => state.persistedReducer.notification.tokenNotification);
    const [listProductCart, setListProductCart] = useState<IGetCart[]>(cart);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isLoadingPayment, setIsLoadingPayment] = useState<boolean>(false);
    const [method, setMethod] = useState<string>('direct');

    const dispatch = useAppDisPatch();
    const navigate = useNavigate();

    console.log(totalPay);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        mode: 'onTouched',
        resolver: yupResolver(schema_payment),
    });
    useEffect(() => {
        cartRequest.getListCart().then((res) => {
            setIsLoading(false);
            setListProductCart(res.list_cart);
            setTotalPay(res.total_pay);
        });
    }, [cart?.length]);
    const handleSubmitFormText = (data: any) => {
        if (method === 'direct') {
            orderRequest
                .addOrder({
                    phone: data.phone,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    address: data.address,
                    apartment: data.apartment,
                    city: data.city,
                    total_order: totalPay,
                })
                .then((res) => {
                    setTimeout(() => navigate(config.orderCompleted, { replace: true }));
                    toast.success(res.message, {
                        position: 'top-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        } else if (method === 'online') {
            vnpayRequest
                .checkout({
                    phone: data.phone,
                    first_name: data.firstName,
                    last_name: data.lastName,
                    address: data.address,
                    apartment: data.apartment,
                    city: data.city,
                    amount: totalPay,
                })
                .then((res) => {
                    window.location.replace(res.data);
                });
        }
    };

    const handleSelectMethod = (selected: string) => {
        setMethod(selected);
    };
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                <div className="form">
                    <InformationForm register={register} errors={errors} />
                    <div className="method-payment">
                        <h3>Phương thức thanh toán</h3>
                        <div className="select">
                            <div
                                className={`direct ${method === 'direct' ? 'select-method' : ''}`}
                                onClick={() => handleSelectMethod('direct')}
                            >
                                Thanh toán khi nhận hàng
                            </div>
                            <div
                                className={`online ${method === 'online' ? 'select-method' : ''}`}
                                onClick={() => handleSelectMethod('online')}
                            >
                                Thanh toán online
                            </div>
                        </div>
                    </div>
                </div>
                {/* {cart?.length > 0 ? (
                ) : (
                    <div className="blank">
                        <h2>Let's Shopping! Your cart is blank</h2>
                        <Button className="btn-view-product" onClick={handleRouteListProduct}>
                            List Product
                        </Button>
                    </div>
                )} */}
                {
                    <div className="pay-detail">
                        <div className="list-product">
                            {listProductCart.map((item: IGetCart, index) => (
                                <InCartProducts key={index} data={item} payment />
                            ))}
                        </div>

                        <div className="pay-total">
                            <div className="detail-totals">
                                <PayTotals
                                    total={totalPay}
                                    method={method}
                                    payment
                                    listProductCart={listProductCart}
                                    handleForm={handleSubmit(handleSubmitFormText)}
                                    isLoadingPayment={isLoadingPayment}
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Wrapper>
    );
};

export default Payment;
