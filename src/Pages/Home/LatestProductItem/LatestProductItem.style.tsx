import styled from 'styled-components';

const Wrapper = styled.div`
    width: 36rem;
    height: 30rem;
    margin-bottom: 5rem;
    margin-left: 3rem;
    &:nth-child(3n + 1) {
        margin-left: 0;
    }
    scroll-snap-align: center;
    &:hover {
        cursor: pointer;
        .image-product {
            background-color: #fff;
        }
        .active {
            left: 1.5rem;
        }
    }
    .image-product {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #f7f7f7;
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
        position: absolute;
        bottom: 3.8rem;
        left: -3rem;
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
        margin-bottom: 0.8rem;
        background-color: #fff;
        /* box-shadow: 0px 0px 27.6087px rgb(0 0 0 / 5%); */

        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px,
            rgba(17, 17, 26, 0.1) 0px 24px 80px;
        &:hover {
            background-color: #eeeffb;
        }
    }
    .active-btn:active {
        background-color: var(--primary-background-color-btn);
    }
    .heart-icon {
        color: #2f1ac4;
        height: 1.7rem;
    }
    .isLight {
        color: var(--primary-background-color-btn);
    }
    .cart-icon {
        color: #2f1ac4 !important;
        height: 1.7rem;
    }

    .search-plus-icon {
        color: #2f1ac4 !important;
        height: 1.9rem;
    }
    .sale-label {
        position: absolute;
        top: -0.2rem;
        left: 0;
    }
    .information-product {
        height: 3rem;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 2rem 0.4rem;
    }
    .name-product-wrapper {
        flex: 1;
        display: flex;
    }
    .name-product {
        font-size: 1.6rem;
        line-height: 1.9rem;
        max-width: 100%;
        color: #151875;
        font-weight: 600;
        border-bottom: 2px solid #eeeffb;
    }

    .sale-price {
        font-size: 1.4rem;
        line-height: 1.6rem;
        color: #151875;
    }

    .price-product {
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #fb2448;
        text-decoration: line-through;
        margin: 0 0.8rem 0 1rem;
    }
    .price-normal {
        margin-right: 3.8rem;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        flex-shrink: 0;
        margin-right: 2rem;
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        width: 28rem;
        height: 30rem;
        margin-bottom: 1.8rem;
        scroll-snap-align: start;
    }
`;
export default Wrapper;
