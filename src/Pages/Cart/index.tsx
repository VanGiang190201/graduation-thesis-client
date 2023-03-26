import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import InCartProducts from '../../Components/InCartProducts';
import { IGetCart, IProduct, IUser } from '../../Utils/interface';
import PayTotals from '../../Components/PayTotals';
import { Wrapper } from './Cart.style';
import { useAppSelector } from '../../reudux/hook';
import * as cartRequest from '../../api/cartApi';
import Loading from '../../Components/Loading';
import Button from '../../Components/Button';
import config from '../../config';

interface ICartProps {}
const Cart: React.FunctionComponent<ICartProps> = (props) => {
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const [listProductCart, setListProductCart] = useState<IGetCart[]>([]);
    const [totalPay, setTotalPay] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(currentUser).length > 0) {
            cartRequest.getListCart().then((res) => {
                setIsLoading(false);
                setListProductCart(res?.list_cart);
                setTotalPay(res?.total_pay);
            });
        }
    }, []);

    const handleRouteListProduct = () => {
        navigate(config.listProduct);
    };
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                {listProductCart.length > 0 ? (
                    <div className="list-product">
                        <div className="title">
                            <p className="title-item">Product</p>
                            <p className="title-item">Price</p>
                            <p className="title-item">Quantity</p>
                            <p className="title-item">Total</p>
                        </div>
                        <div className="products">
                            {listProductCart.map((item: IGetCart, index) => {
                                return <InCartProducts key={index} data={item} />;
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="blank">
                        <h2>Let's Shopping! Your cart is blank</h2>
                        <Button className="btn-view-product" onClick={handleRouteListProduct}>
                            List Product
                        </Button>
                    </div>
                )}
                {listProductCart.length > 0 && (
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
