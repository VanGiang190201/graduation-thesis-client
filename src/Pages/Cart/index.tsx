import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import InCartProducts from '../../Components/InCartProducts';
import { IGetCart } from '../../Utils/interface';
import PayTotals from '../../Components/PayTotals';
import { Wrapper } from './Cart.style';
import { useAppSelector } from '../../reudux/hook';
import * as cartRequest from '../../api/cartApi';
import Loading from '../../Components/Loading';
import Button from '../../Components/Button';
import config from '../../config';

interface ICartProps {}
const Cart: React.FunctionComponent<ICartProps> = () => {
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const [listProductCart, setListProductCart] = useState<IGetCart[]>([]);
    const [isChangeMoney, setIsChangeMoney] = useState<boolean>(false);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();
    console.log(listProductCart);

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            cartRequest.getListCart().then((res) => {
                setIsLoading(false);
                setListProductCart(res?.list_cart);
                setTotalPay(res?.total_pay);
            });
        }
    }, [isChangeMoney]);

    const handleRouteHome = () => {
        navigate(config.home);
    };
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                {listProductCart?.length > 0 ? (
                    <div className="list-product">
                        <div className="title title-header">
                            <p className="title-item">Product</p>
                            <p className="title-item">Price</p>
                            <p className="title-item">Quantity</p>
                            <p className="title-item">Total</p>
                        </div>
                        <div className="products">
                            {listProductCart.map((item: IGetCart, index) => {
                                return (
                                    <InCartProducts
                                        key={index}
                                        data={item}
                                        setIsChangeMoney={setIsChangeMoney}
                                        isChangeMoney={isChangeMoney}
                                        setListProductCart={setListProductCart}
                                    />
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="blank">
                        <h2>Let's Shopping! Your cart is blank</h2>
                        <Button className="btn-view-home" onClick={handleRouteHome}>
                            HOME
                        </Button>
                    </div>
                )}
                {listProductCart?.length > 0 && (
                    <div className="cart-totals">
                        <p className="title-item title-total">Cart Totals</p>

                        <div className="detail-totals">
                            <PayTotals total={totalPay} listProductCart={listProductCart} />
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default Cart;
