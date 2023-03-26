import styled from 'styled-components';

const Wrapper = styled.div`
    width: 27rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.2rem;
    margin-top: 1rem;
    /* border-color: transparent; */
    overflow: hidden;
    scroll-snap-align: center;
    &:not(:first-child) {
        margin-left: 1.9rem;
    }

    &:nth-child(4n + 1) {
        margin-left: 0.8rem;
    }
    &:hover {
        cursor: pointer;
        .information-product {
            background-color: #2f1ac4;
            .name-product,
            .code-product,
            .price-product {
                color: #fff;
            }
        }
        .active {
            top: 1.8rem;
        }
        .view-btn {
            bottom: 0.9rem;
        }
    }
    .product-image {
        width: 100%;
        height: 23.6rem;
        overflow: hidden;
        background-color: #f6f7fb;
        position: relative;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.5s linear;
    }

    .room {
        transform: scale(1.3);
    }
    .active {
        display: flex;
        position: absolute;
        top: -3.8rem;
        left: 1.1rem;
        transition: 0.2s linear;
    }
    .active-btn {
        border: none;
        margin-right: 1.5rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: #fff;
        /* box-shadow: 0px 0px 27.6087px rgb(0 0 0 / 5%); */

        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px,
            rgba(17, 17, 26, 0.1) 0px 24px 80px;
        &:hover {
            background-color: #eeeffb;
        }
        &:active {
            background-color: var(--primary-background-color-btn);
        }
    }
    .heart-icon {
        color: #1389ff;
        height: 1.7rem;
    }
    .cart-icon {
        color: #2f1ac4 !important;
        height: 1.7rem;
    }
    .isLight {
        color: var(--primary-background-color-btn);
    }
    .search-plus-icon {
        color: #1389ff !important;
        height: 1.9rem;
    }
    .view-btn {
        position: absolute;
        bottom: -3rem;
        left: 50%;
        transform: translateX(-50%);
        width: 9.4rem;
        height: 2.9rem;
        background-color: #08d15f;
        border-radius: 0.2rem;
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: 0.2s linear;
    }

    .cart-icon {
        color: #000;
    }
    .information-product {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2.3rem;
        height: 100%;
    }

    .name-product {
        margin: 1.5rem 0 1rem 0;
        width: 24rem;
        font-family: 'Lato';
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 700;
        color: var(--primary-background-color-btn);
    }

    .color-product {
        display: flex;
        margin-top: 1rem;
        width: 5.2rem;
        justify-content: space-between;
    }

    .color {
        width: 1.4rem;
        height: 0.4rem;
        background: #05e6b7;
        border-radius: 1rem;
    }
    .color:nth-child(2) {
        background: #f701a8;
    }
    .color:nth-child(3) {
        background: #00009d;
    }

    .code-product {
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #151875;
        margin-top: 1.4rem;
        font-weight: 600;
    }

    .price-product {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.7rem;
        color: #151875;
        margin-top: 1.2rem;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        flex-shrink: 0;
        margin-right: 2rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        width: 21rem;
        scroll-snap-align: start;
        .product-image {
            width: 100%;
            height: 18rem;
            overflow: hidden;
            background-color: #f6f7fb;
            position: relative;
        }
    }
`;

export default Wrapper;
