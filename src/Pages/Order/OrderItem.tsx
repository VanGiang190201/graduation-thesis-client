import * as React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Steps, Button } from 'antd';

import { Text } from '../../Components/Text';
import { IProduct, OrderProps } from '../../Utils/interface';
import * as orderRequest from '../../api/orderApi';
import { Image } from 'antd';
import { TypeStatusOrder } from '../../Utils/enum';
import moment from 'moment';
import { toast } from 'react-toastify';
interface IOrderItemProps {
    data: OrderProps;
    setIsChangeList?: any;
    isChangeList?: boolean;
}

const items = [
    {
        title: 'Chờ xác nhận đơn hàng',
    },
    {
        title: 'Xác nhận đơn hàng',
    },
    {
        title: 'Đang chuẩn bị đơn hàng',
    },
    {
        title: 'Đơn hàng đang vận chuyển',
    },
    {
        title: 'Đơn hàng đã giao đến',
    },
    {
        title: 'Đã thanh toán toàn bộ chi phí',
    },
];

const OrderItem: React.FunctionComponent<IOrderItemProps> = ({ data, setIsChangeList, isChangeList }) => {
    const [show, setShow] = React.useState<boolean>(false);
    const [products, setProducts] = React.useState<IProduct[]>([]);
    React.useEffect(() => {
        orderRequest.getProducts(data.id).then((res) => setProducts(res.data));

        AOS.init({
            duration: 1000,
        });

        AOS.refresh();
    }, []);

    const renderStatus = (status: number) => {
        console.log(status);
        switch (status) {
            case TypeStatusOrder.WAIT_CONFIRM:
                return 'Chờ xác nhận đơn hàng';
            case TypeStatusOrder.CONFIRMED:
                return 'Đã xác nhận đơn hàng';
            case TypeStatusOrder.PREPARING_ORDER:
                return 'Đang chuẩn bị đơn hàng';
            case TypeStatusOrder.SHIPPING:
                return 'Đơn hàng đang vận chuyển';
            case TypeStatusOrder.SUCCESSFUL_DELIVERY:
                return 'Đơn hàng đã giao đến';
            case TypeStatusOrder.RECEIVED_MONEY:
                return 'Đã thanh toán toàn bộ chi phí';
            case TypeStatusOrder.CANCEL_ORDER:
                return 'Đơn đã được hủy';
            default:
                return null;
        }
    };

    const handleCancelOrder = () => {
        orderRequest
            .deleteOrder(data.id)
            .then((res) => {
                toast.success(res.message, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
                setIsChangeList(!isChangeList);
            })
            .catch((error) => {
                toast.success(error.message, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };
    return (
        <Style.Wrapper>
            <Style.ItemWrapper data-aos="fade-up" onClick={() => setShow(!show)}>
                <Style.ImageWrapper>
                    <Image
                        preview={false}
                        src="https://marvel-b1-cdn.bc0a.com/f00000000094873/www.purolator.com/sites/default/files/styles/cta/public/images/2019-10/1-boxes-courier.jpg?itok=0HWmCTSJ"
                        alt=""
                        className=""
                    />
                </Style.ImageWrapper>
                <Style.Information>
                    <Style.Overview>
                        <Style.Order>
                            <Text textOfLine={1} className="status">
                                {renderStatus(data.status)}
                            </Text>
                            <Text textOfLine={1} className="total_pay">
                                Tổng tiền : {data.total_order} VNĐ
                            </Text>
                            <Text textOfLine={1} className="time">
                                Thời gian đặt : {moment(data.time_order).format('YYYY/MM/DD, h:mm:ss A')}
                            </Text>
                        </Style.Order>
                        <Style.Receive>
                            <Text textOfLine={1} className="person-receive">
                                Nguời nhận : {`${data.first_name} ${data.last_name}`}
                            </Text>
                            <Text textOfLine={1} className="total_pay">
                                Địa chỉ nhận : {data.address}
                            </Text>
                            <Text textOfLine={1} className="phone">
                                Điện thoại : {data.phone}
                            </Text>
                        </Style.Receive>
                    </Style.Overview>
                    <Style.Icon>
                        {show ? <FaEyeSlash style={{ fontSize: '24px' }} /> : <FaEye style={{ fontSize: '24px' }} />}
                    </Style.Icon>
                </Style.Information>
            </Style.ItemWrapper>
            {show && (
                <Style.Detail data-aos="fade-up">
                    {data.status !== TypeStatusOrder.CANCEL_ORDER && (
                        <Steps current={data.status} labelPlacement="vertical" items={items} />
                    )}
                    <Text textOfLine={1} className="heading">
                        Chi tiết đơn hàng
                    </Text>
                    <div style={{ display: 'flex', gap: '4rem', marginBottom: '2rem' }}>
                        <Text textOfLine={1}>Địa chỉ nhà : {data.apartment}</Text>
                        <Text textOfLine={1}>Thành phố : {data.city}</Text>
                    </div>
                    <Text textOfLine={1} className="heading">
                        Sản phẩm
                    </Text>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        {products?.map((product: any, i: number) => (
                            <div style={{ display: 'flex', gap: '2rem', width: '500px', height: '140px' }}>
                                <Image src={product.image_product} alt="" preview={false} style={{ height: '120px' }} />
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1.5rem',
                                        width: '100%',
                                        padding: '2rem',
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Text textOfLine={1} className="text">
                                            {product.name_product}
                                        </Text>
                                        <Text textOfLine={1} className="text">{`x ${product.number}`}</Text>
                                    </div>
                                    <div>
                                        <Text>{`Loại: ${
                                            product.selected_code_product ? product.selected_code_product : 'Mặc định'
                                        }`}</Text>
                                        <Text>{`Giá: ${product.price_product}`}</Text>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {data.status === TypeStatusOrder.WAIT_CONFIRM && (
                        <Button onClick={handleCancelOrder}>Hủy đơn hàng</Button>
                    )}
                </Style.Detail>
            )}
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div``,
    ItemWrapper: styled.div`
        display: flex;
        margin-bottom: 2rem;
        border-radius: 10px;
        border: 2px solid #ccc;
        padding: 1rem;
        gap: 3rem;
        cursor: pointer;
    `,
    Information: styled.div`
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 1rem;
        align-items: center;
    `,
    Overview: styled.div`
        display: flex;
        gap: 2rem;
        width: 100%;
        justify-content: space-around;
    `,
    Order: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        .status {
            font-size: 1.8rem;
            font-weight: 700;
        }
    `,
    Receive: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    `,
    Icon: styled.div``,
    ImageWrapper: styled.div`
        width: 200px;
        overflow: hidden;
        .ant-image {
            width: 100%;
        }
    `,
    Detail: styled.div`
        border-radius: 10px;
        border: 2px solid #ccc;
        padding: 2rem;
        margin-bottom: 2rem;
        .heading {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1.4rem;
        }
        .text {
            font-weight: 600;
        }
    `,
};

export default OrderItem;
