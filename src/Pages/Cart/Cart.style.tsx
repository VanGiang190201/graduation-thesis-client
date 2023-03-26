import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    .container {
        height: 100%;
        width: 114rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        padding: 13.1rem 0;
        justify-content: space-between;
        gap: 6rem;
    }
    .list-product {
        width: 71.8rem;
    }

    .title {
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    .title-item {
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.3rem;
        color: #1d3178;
    }
    .title-total {
    }

    .products {
        width: 71.8rem;
        margin-top: 4.8rem;

        ::-webkit-scrollbar {
            border-radius: 0;
            width: 4px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: transparent;
        }
        :hover::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #ccc;
        }
        ::-webkit-scrollbar-track {
            border-radius: 0;
            background-color: rgba(0, 0, 0, 0);
        }
    }
    .no-item-icon {
        width: 100%;
        text-align: center;
        margin-top: 4rem;
        color: #ccc;
    }
    // Cart totals

    .cart-totals {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .detail-totals {
        margin-top: 3.2rem;
        width: 100%;
        position: sticky;
        top: 12.4rem;
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
        .btn-view-product {
            height: 5rem;
            width: 14rem;
            outline: none;
            border: none;
            font-size: 1.6rem;
            border-radius: 0.8rem;
            cursor: pointer;
        }
        .btn-view-product:hover {
            background-color: var(--primary-background-color-hover-btn);
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .container {
            max-width: 100rem;
        }
        /* .list-product {
            width: 50.8rem;
        } */
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .container {
            max-width: 89rem;
        }
        .list-product {
            max-width: 60.8rem;
        }
        .products {
            max-width: 60.8rem;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            flex-direction: column;
            max-width: 100%;
            padding: 2rem 7rem;
        }
        .list-product {
            max-width: 100%;
        }
        .products {
            max-width: 100%;
            overflow: unset;
            height: unset;
        }
        .cart-totals {
            /* position: sticky;
            bottom: 0rem; */
            position: sticky;
            bottom: 0;
        }

        .title-item {
            display: none;
        }
        .detail-totals {
            width: 100%;
            padding-left: 0;
        }
        .blank {
            height: 30rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container {
            flex-direction: column;
            max-width: 100%;
            padding: 2rem 3rem;
        }
        .list-product {
            max-width: 100%;
        }

        .products {
            max-width: 100%;
        }
    }
`;

export const ListProductCartWrapper = styled.div``;
