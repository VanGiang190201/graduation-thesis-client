import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Button from '../../Components/Button';
import config from '../../config';
import { OrderProps } from '../../Utils/interface';
import * as orderRequest from '../../api/orderApi';
import OrderItem from './OrderItem';
interface IOrderProps {}

const Order: React.FunctionComponent<IOrderProps> = (props) => {
    const [orders, setOrders] = React.useState<OrderProps[]>();
    const [isChangeList, setIsChangeList] = React.useState<boolean>(false);

    React.useEffect(() => {
        orderRequest.listOrder().then((res) => setOrders(res.reverse()));
    }, [isChangeList]);
    const navigate = useNavigate();
    const handleRouteHome = () => {
        navigate(config.home);
    };
    return (
        <Wrapper>
            <div className="container">
                {orders?.length ? (
                    orders?.map((item: OrderProps) => (
                        <OrderItem
                            key={item.id}
                            data={item}
                            setIsChangeList={setIsChangeList}
                            isChangeList={isChangeList}
                        />
                    ))
                ) : (
                    <div className="blank">
                        <h2>Bạn chưa có đơn hàng nào</h2>
                        <Button className="btn-view-home" onClick={handleRouteHome}>
                            HOME
                        </Button>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    .container {
        max-width: 114rem;
        margin: 8rem auto;
    }
    //blank

    .blank {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            margin-bottom: 2.4rem;
        }
        .btn-view-home {
            height: 5rem;
            width: 14rem;
            font-weight: 700;
            outline: none;
            border: none;
            font-size: 1.6rem;
            border-radius: 0.8rem;
            cursor: pointer;
        }
        .btn-view-home:hover {
            background-color: var(--primary-background-color-hover-btn);
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            max-width: 100%;
            padding: 0 7rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container {
            max-width: 100%;
            padding: 0 3rem;
        }
        .blank {
            height: 30rem;
        }
    }
`;
export default Order;
