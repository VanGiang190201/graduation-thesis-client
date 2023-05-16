import styled from 'styled-components';

const Wrapper = styled.div`
    width: 27rem;
    margin-top: 1rem;
    background: linear-gradient(0deg, #ffffff, #ffffff), #ffffff;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    padding: 1.1rem;
    transition: 0.1s linear;
    scroll-snap-align: center;
    margin-left: 2rem;
    &:nth-child(4n + 1) {
        margin-left: 0;
    }
    &:hover {
        transform: scale(1.02);
    }
    .image-wrapper {
        width: 24.7rem;
        height: 24.4rem;
        overflow: hidden;
        background-color: #f5f6f8;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .information {
        padding: 1.5rem 0.5rem 2rem;
    }
    .star-light {
        color: yellow;
    }

    .star {
        color: #ccc;
    }
    .name-product {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: #151875;
        text-align: center;
        width: 98%;
    }

    .price {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 0.8rem;
    }

    .sale-price {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        text-align: center;
        color: #151875;
        margin-right: 1.2rem;
    }

    .normal-price {
        font-size: 1.2rem;
        line-height: 1.4rem;
        text-align: center;
        text-decoration-line: line-through;

        color: rgba(21, 24, 117, 0.3);
    }

    // styled related product

    .detail {
        display: flex;
    }
    .name-product-related {
        flex: 1;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 1.9rem;
        color: #151875;
    }
    .price-product-related {
        margin-top: 1.5rem;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.5rem;
        color: #151875;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        margin-right: 2rem;
        margin-top: 0;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        width: 24rem;
        scroll-snap-align: start;
        .image-wrapper {
            width: 20.7rem;
        }
    }
`;
export default Wrapper;
