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
    method?: string;
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
                toast.info('Hãy cho chúng tôi biết thông tin giao hàng', {
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
            {payment ? (
                <div className="sub-totals">
                    <p className="title">Tổng thanh toán</p>
                    <p className="price">
                        ‎{`${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`}
                    </p>
                </div>
            ) : (
                <div className="sub-totals">
                    <p className="title">Tổng đơn hàng</p>
                    <p className="price">
                        ‎{`${total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`}
                    </p>
                </div>
            )}
            <div className="ship">
                <input type="checkbox" className="check" onChange={handleIsChecked} />
                <p className="description">Miễn phí vận chuyển & thuế</p>
            </div>

            {payment ? (
                <Button
                    className={`proceed-btn ${checked && listProductCart.length > 0 && total > 0 ? 'isChecked' : ''}`}
                    onClick={handleForm}
                >
                    Đặt hàng
                </Button>
            ) : (
                <Button
                    className={`proceed-btn ${checked && listProductCart.length > 0 && total > 0 ? 'isChecked' : ''}`}
                    onClick={handleRoutePayment}
                >
                    {isLoadingPayment ? (
                        <SpinnerIcon width="2rem" height="2rem" className="spinner-icon" />
                    ) : (
                        'Tiến hành thanh toán'
                    )}
                </Button>
            )}
        </Wrapper>
    );
};

export default PayTotals;
