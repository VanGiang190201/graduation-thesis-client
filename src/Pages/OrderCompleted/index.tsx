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
                    <p className="title">Your Order Is Completed!</p>
                    <p className="description">
                        Thank you for your order! Your order is being processed and will be completed within 3-6 hours.
                        You will receive an email confirmation when your order is completed.
                    </p>
                    <Button className="continue-btn" onClick={handleRouteHomePage}>
                        Continue Shopping
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
