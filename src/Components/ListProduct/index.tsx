import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import config from '../../config';

import { Text } from '../Text';
interface IListProductProps {
    children: React.ReactNode;
    title: string;
    related?: boolean;
}
const Wrapper = styled.div`
    width: 100%;
    margin-top: 6rem;
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-list {
        font-size: 4.2rem;
        line-height: 4.9rem;
        color: #1a0b5b;
        font-weight: 600;
    }
    .related {
        width: 100%;
    }
    .list-product {
        display: flex;
        margin-top: 2.8rem;
        justify-content: flex-start;
        width: 100%;
        flex-wrap: wrap;
        scroll-snap-type: x mandatory;
    }
    .show-all {
        display: none;
    }
    .show-all:hover {
        font-weight: 600;
        text-decoration: underline;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .list-product {
            flex-wrap: nowrap;
            overflow-y: hidden;
            overflow-x: auto;
            padding: 2rem 0;
        }
        //scrollbar CSS
        .list-product::-webkit-scrollbar {
            border-radius: 0;
            width: 4px;
            height: 8px;
        }

        .list-product::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: transparent;
        }
        .list-product:hover::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #ccc;
        }

        .list-product::-webkit-scrollbar-track {
            border-radius: 0;
            background-color: rgba(0, 0, 0, 0);
        }
        .header-list {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        margin-top: 0;
        align-items: unset;
        position: relative;
        .title-list {
            font-size: 2rem;
            line-height: 4rem;
            color: #1a0b5b;
            font-weight: 600;
        }
        .list-product {
            margin-top: 0;
            padding: 0rem 0 1rem 0;
        }
        .show-all {
            display: block;
            display: block;
            font-weight: 500;
            text-decoration: none;
            cursor: pointer;
            letter-spacing: -0.05rem;
            color: #1a0b5b;
        }
    }
`;

const ListProduct: React.FunctionComponent<IListProductProps> = (props) => {
    const { children, title, related } = props;
    return (
        <Wrapper>
            <div className="header-list">
                <Text className={`title-list ${related ? 'related' : ''}`}>{title}</Text>
                <Link className="show-all" to={config.listProduct}>
                    Show more &gt;
                </Link>
            </div>
            <div className="list-product">{children}</div>
        </Wrapper>
    );
};

export default ListProduct;
