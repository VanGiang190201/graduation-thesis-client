import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid #e1e1e4;
    margin-top: 1.4rem;
    padding-bottom: 1.5rem;
    cursor: pointer;
    &:hover {
        .cancel-icon {
            transform: scale(1.4);
        }
    }
    .container-product {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
    }
    .container-product.payment {
        grid-template-columns: 6fr 1fr;
    }
    .product {
        width: 100%;
        display: flex;
    }

    .left-content {
        width: 8.3rem;
        height: 8.7rem;
        position: relative;
        flex-shrink: 0;
    }
    .cancel-btn {
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        border: none;
        width: 1.2rem;
        height: 1.2rem;
        background-color: transparent;
        cursor: pointer;
        transition: 0.5s linear;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .right-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 1.7rem;
    }

    .name-product {
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #000;
        font-weight: 600;
    }

    .color-product {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #a1a8c1;
        font-weight: 600;
    }

    .code-product {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #a1a8c1;
        font-weight: 600;
    }

    .price {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        color: #15245e;
    }

    .quantity {
        display: flex;
        align-items: center;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            text-align: center;
            background-color: #f0eff2;
            height: 1.5rem;
            font-size: 1.2rem;
            color: #000;
        }
    }
    .quantity-btn {
        width: 1.2rem;
        height: 1.5rem;
        background-color: #e7e7ef;

        font-size: 1.8rem;
        color: #000;

        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
        cursor: pointer;
    }

    .disable-btn {
        color: #bebfc2;
    }

    /* .decrement {
    }

    .increment {
    } */

    .total-price {
        display: flex;
        align-items: center;
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #15245e;
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .container-product {
            max-width: 100rem;
        }
        /* .list-product {
            width: 50.8rem;
        } */
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .container-product {
            max-width: 89rem;
        }
        .list-product {
            width: 60.8rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container-product:not(.payment) {
            max-width: 100%;
            display: grid;
            .product {
                grid-column-start: 1;
                grid-column-end: 6;
                grid-row-start: 1;
                grid-row-end: 4;
            }
            .price {
                grid-column-start: 5;
                grid-column-end: 6;
                grid-row-start: 1;
                grid-row-end: 2;
                align-items: center;
                display: flex;
                justify-content: center;
            }
            .quantity {
                grid-column-start: 5;
                grid-column-end: 6;
                grid-row-start: 2;
                grid-row-end: 3;
            }
            .total-price {
                grid-column-start: 5;
                grid-column-end: 6;
                grid-row-start: 3;
                grid-row-end: 4;
                display: flex;
                justify-content: center;
            }
        }
    }
`;
export default Wrapper;
