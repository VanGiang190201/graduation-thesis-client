import styled from 'styled-components';
import React, { useState } from 'react';
import 'react-datetime-range-super-picker/dist/index.css';
import { DateTimeRangePicker } from 'react-datetime-range-super-picker';
import { Text } from '../../Components/Text';

import ResultItem from '../SearchResult/ResultItem';
import * as wishListRequest from '../../api/wishListApi';
import * as meetingRequest from '../../api/meetingApi';

import { IGetWishList } from '../../Utils/interface';
import { Button } from 'antd';
import { mailImage } from '../../assets/images';
import Image from '../../Components/Image';
import { toast } from 'react-toastify';
import moment from 'moment';
import 'moment-timezone';

interface BookViewProps {}

const BookView: React.FunctionComponent<BookViewProps> = () => {
    const [wishList, setWishList] = React.useState<IGetWishList[]>();
    const [meeting, setMeeting] = React.useState<any>();
    React.useEffect(() => {
        wishListRequest.getWishList().then((res) => setWishList(res));
        meetingRequest.getMeetings().then((res) => setMeeting(res.data));
    }, []);

    const [from_date, setFromDate] = useState(new Date());
    const [to_date, setToDate] = useState(new Date());

    const handleFromDateUpdate = ({ date }: any) => {
        setFromDate(date.date);
    };

    const handleToDateUpdate = ({ date }: any) => {
        setToDate(date.date);
    };

    const handleBooking = () => {
        meetingRequest
            .addMeeting({
                time_start: from_date,
                time_end: to_date,
                active: false,
            })
            .then((res) => {
                toast.success(res.message, {
                    position: 'top-right',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                });
                setMeeting(res.data ? res.data : meeting);
            });
    };

    return (
        <Style.Wrapper>
            <Style.ListMeeting>
                {meeting && (
                    <div className="meeting-item">
                        {meeting.active ? (
                            <h3 style={{ marginBottom: '0.8rem' }}>Bạn có một cuộc hẹn tư vấn</h3>
                        ) : (
                            <h3 style={{ marginBottom: '0.8rem' }}>Bạn đã đặt một lịch tư vấn</h3>
                        )}
                        <h3>
                            Thời gian :{' '}
                            {moment(meeting.time_start).tz('Asia/Ho_Chi_Minh').format('YYYY/MM/DD, h:mm:ss A')}
                        </h3>
                        {meeting.active ? <p>Đừng quên lịch hẹn nhé 💕 </p> : <p>Vui lòng chờ xác nhận 💕 </p>}
                        <div style={{ width: '300px', overflow: 'hidden' }}>
                            <Image src={mailImage} alt="" className="image" />
                        </div>
                    </div>
                )}
            </Style.ListMeeting>
            <h2>Thời gian làm việc</h2>
            <Text textOfLine={1} className="heading">
                Sáng : 8h đến 12h
            </Text>
            <Text textOfLine={1} className="heading">
                Chiều : 13h đến 20h
            </Text>
            <Style.Booking>
                <h2>Thời gian tư vấn</h2>
                <DateTimeRangePicker
                    from_date={from_date}
                    to_date={to_date}
                    onFromDateTimeUpdate={handleFromDateUpdate}
                    onToDateTimeUpdate={handleToDateUpdate}
                    format={'dd/MM/yy hh:mm aaa'}
                    timeFormat={'hh:mm aaa'}
                    dateFormat={'dd/MM/YYY'}
                    weekStartsOn={0}
                    colors={{
                        primary_color: '#ccc',
                        primary_font_color: '#ccc',
                        light_font_color: '#ccc',
                        secondary_color: '#333',
                        primary_highlight_color: '#e28743',
                        secondary_highlight_color: '#2596be',
                    }}
                />
            </Style.Booking>
            <Style.ButtonWrapper>
                <Button
                    style={{
                        marginBottom: '1rem',
                        height: '60px',
                        fontSize: '1.6rem',
                        backgroundColor: '#4096ff',
                        color: '#fff',
                    }}
                    onClick={handleBooking}
                >
                    Xác nhận đặt lịch
                </Button>
            </Style.ButtonWrapper>
            <Style.InterestedProduct>
                <h2>Sản phẩm bạn đã quan tâm</h2>
                {wishList?.map((item: any) => (
                    <ResultItem key={item.product_id} id={item.product_id} setWishList={setWishList} />
                ))}
            </Style.InterestedProduct>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        width: 114rem;
        margin: auto;
        padding: 4rem 0;
        .heading {
            font-size: 1.6rem;
            margin: 2rem 0 1rem 2rem;
            font-weight: 600;
        }
        h2 {
            text-transform: uppercase;
            color: #2b2f32;
            margin-bottom: 2rem;
        }
    `,
    ListMeeting: styled.div`
        width: 100%;
        text-align: center;
        .meeting-item {
            width: 340px;
            margin: auto;
            padding: 2rem;
            border-radius: 20px;
            border: 2px solid #ccc;
        }
        .image {
            width: 100%;
        }
    `,
    Booking: styled.div`
        margin: 6rem 0;
    `,
    InterestedProduct: styled.div``,
    ButtonWrapper: styled.div`
        width: 100%;
        text-align: center;
    `,
};
export default BookView;
