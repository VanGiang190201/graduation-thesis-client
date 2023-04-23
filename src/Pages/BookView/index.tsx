import styled from 'styled-components';
import React, { useState } from 'react';
import 'react-datetime-range-super-picker/dist/index.css';
import { DateTimeRangePicker } from 'react-datetime-range-super-picker';

import ResultItem from '../SearchResult/ResultItem';
import * as wishListRequest from '../../api/wishListApi';
import { IGetWishList } from '../../Utils/interface';

interface BookViewProps {}

const BookView: React.FunctionComponent<BookViewProps> = () => {
    const [wishList, setWishList] = React.useState<IGetWishList[]>();
    React.useEffect(() => {
        wishListRequest.getWishList().then((res) => setWishList(res));
    }, []);

    const [from_date, setFromDate] = useState(new Date());
    const [to_date, setToDate] = useState(new Date());

    const handleFromDateUpdate = ({ date }: any) => {
        setFromDate(date.date);
    };

    const handleToDateUpdate = ({ date }: any) => {
        setToDate(date.date);
    };

    return (
        <Style.Wrapper>
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
        h2 {
            text-transform: uppercase;
            color: #2b2f32;
            margin-bottom: 2rem;
        }
    `,
    Booking: styled.div`
        margin: 6rem 0;
    `,
    InterestedProduct: styled.div``,
};
export default BookView;
