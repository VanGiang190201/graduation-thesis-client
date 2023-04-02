import * as React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../reudux/hook';
import { useNavigate } from 'react-router-dom';

import ResultItem from '../SearchResult/ResultItem';
import Button from '../../Components/Button';
import config from '../../config';
import { IGetWishList } from '../../Utils/interface';
import * as wishListRequest from '../../api/wishListApi';
interface IWishListProps {}

const WishList: React.FunctionComponent<IWishListProps> = (props) => {
    const [wishList, setWishList] = React.useState<IGetWishList[]>();
    console.log(wishList);

    React.useEffect(() => {
        wishListRequest.getWishList().then((res) => setWishList(res));
    }, []);
    const navigate = useNavigate();
    const handleRouteHome = () => {
        navigate(config.home);
    };
    return (
        <Wrapper>
            <div className="container">
                {wishList?.length ? (
                    wishList?.map((item: any) => (
                        <ResultItem key={item.product_id} id={item.product_id} setWishList={setWishList} />
                    ))
                ) : (
                    <div className="blank">
                        <h2>Let's Shopping! Your wish list is blank</h2>
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
export default WishList;
