import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import Wrapper from './PayTotals.style';
import { useAppSelector } from '../../reudux/hook';
import { IGetCart } from '../../Utils/interface';
import config from '../../config';
import { toast } from 'react-toastify';
import { SpinnerIcon } from '../Icons';
interface IPayTotalsProps {
    payment?: boolean;
    listProductCart: IGetCart[];
    handleForm?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    isLoadingPayment?: boolean;
    total: number;
}

const PayTotals: React.FunctionComponent<IPayTotalsProps> = (props) => {
    const { total, listProductCart } = props;
    const { payment, handleForm, isLoadingPayment } = props;
    const [checked, setChecked] = useState<boolean>();
    const navigate = useNavigate();

    const handleIsChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    };

    const handleRoutePayment = () => {
        setTimeout(() => navigate(config.payment), 500);
        setTimeout(
            () =>
                toast.info('We are need your information', {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                }),
            300,
        );
    };
    return (
        <Wrapper>
            <div className="sub-totals">
                <p className="title">Subtotals</p>
                <p className="price">‎£{`${total.toFixed(2)}`}</p>
            </div>
            <div className="totals">
                <p className="title">Totals</p>
                <p className="price">‎£{`${(total + 10).toFixed(2)}`}</p>
            </div>
            <div className="ship">
                <input type="checkbox" className="check" onChange={handleIsChecked} />
                <p className="description">Shipping & taxes calculated at checkout</p>
            </div>

            {payment ? (
                <Button
                    className={`proceed-btn ${checked && listProductCart.length > 0 && total > 0 ? 'isChecked' : ''}`}
                    onClick={handleForm}
                >
                    Confirm Order
                </Button>
            ) : (
                <Button
                    className={`proceed-btn ${checked && listProductCart.length > 0 && total > 0 ? 'isChecked' : ''}`}
                    onClick={handleRoutePayment}
                >
                    {isLoadingPayment ? (
                        <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" />
                    ) : (
                        'Proceed To Checkout'
                    )}
                </Button>
            )}
        </Wrapper>
    );
};

export default PayTotals;
