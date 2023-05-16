import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { logoImage, checkImage, clockImage, checkListImage } from '../../assets/images';
import Button from '../../Components/Button';
import Wrapper from './OrderCompleted.style';
import Image from '../../Components/Image';

interface IOrderCompletedProps {}

const OrderCompleted: React.FunctionComponent<IOrderCompletedProps> = (props) => {
    const navigate = useNavigate();
    const handleRouteHomePage = () => {
        navigate('/');
    };
    return (
        <Wrapper>
            <div className="inner">
                <div className="order-completed">
                    <p className="title">Đơn hàng của bạn đã hoàn tất!</p>
                    <p className="description">
                        Cảm ơn bạn đã đặt hàng của bạn! Đơn đặt hàng của bạn đang được xử lý và sẽ được hoàn thành trong
                        vòng 3-6 giờ. Bạn sẽ nhận được email xác nhận khi đơn đặt hàng của bạn hoàn tất.
                    </p>
                    <Button className="continue-btn" onClick={handleRouteHomePage}>
                        Tiếp tục mua hàng
                    </Button>
                    <Image src={checkImage} alt="check-image" className="check-image" />
                    <Image src={clockImage} alt="clock-image" className="clock-image" />
                    <Image src={checkListImage} alt="checklist-image" className="checklist-image" />
                </div>
                <div className="logo-image">
                    <Image src={logoImage} alt="logo-image" className="image" />
                </div>
            </div>
        </Wrapper>
    );
};

export default OrderCompleted;
