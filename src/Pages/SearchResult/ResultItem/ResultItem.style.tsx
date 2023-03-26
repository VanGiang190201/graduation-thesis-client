import styled from 'styled-components';

const Wrapper = styled.div`
    cursor: pointer;
    width: 100%;
    height: 25.4rem;
    background-color: #fff;
    box-shadow: 0px 0px 25px 5px rgba(246, 246, 253, 0.5);
    padding: 1.9rem;
    display: flex;
    margin-bottom: 2rem;
    transition: 0.1s linear;
    &:hover {
        transform: scale(1.01);
    }
    .image-wrapper {
        height: 100%;
        width: 31.3rem;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 100%;
        transition: 0.5s linear;
        object-fit: cover;
    }
    .room {
        transform: scale(1.2);
    }
    .information {
        padding: 2.6rem;
    }

    .first-information {
        display: flex;
        align-items: center;
    }

    .name {
        font-size: 2rem;
        line-height: 2.3rem;
        font-weight: 700;
        color: #111c85;
        min-width: 22.5rem;
    }

    .color {
        margin-left: 1.82rem;
        span {
            margin-right: 0.552rem;
            display: inline-block;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
        }
        .first-color {
            background-color: #de9034;
        }
        .second-color {
            background-color: #e60584;
        }
        .third-color {
            background-color: #5e37ff;
        }
    }

    .second-information {
        display: flex;
        margin-top: 1.4rem;
    }

    .sale-price {
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: #111c85;
        margin-right: 0.9rem;
    }

    .normal-price {
        font-size: 1.5rem;
        line-height: 1.8rem;
        text-decoration: line-through;
        color: var(--primary-background-color-btn);
        margin-right: 1.9rem;
    }
    .star {
        color: #ccc;
    }
    .star-light {
        color: yellow;
    }

    .description {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.7rem;
        line-height: 3.1rem;
        color: #9295aa;
        margin-top: 1.1rem;
    }

    .active {
        margin-top: 2rem;
        display: flex;
    }
    .active-btn {
        border: none;
        background-color: transparent;
        margin-right: 2rem;
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0px 0px 27.6087px rgba(0, 0, 0, 0.05);
        &:hover {
            background-color: #eeeffb;
        }
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
        color: #2f1ac4;
        height: 1.9rem;
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .image-wrapper {
            width: 40rem;
        }
        .information {
            padding: 0.6rem 2.6rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        flex-direction: column;
        max-width: 100%;
        height: 100%;
        .image-wrapper {
            max-height: 28rem;
            flex-shrink: 0;
            max-width: 100%;
            padding: 2rem;
            overflow: hidden;
            display: flex;
            justify-content: center;
        }
        .description {
            font-family: 'Lato';
            font-weight: 400;
            font-size: 1.5rem;
            line-height: 2.8rem;
            color: #9295aa;
            margin-top: 1.1rem;
        }
    }
`;

export default Wrapper;
