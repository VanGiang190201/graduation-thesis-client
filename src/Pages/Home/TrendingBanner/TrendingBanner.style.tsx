import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    background-color: #f1f0ff;
    display: flex;
    gap: 3rem;
    .left-content {
        width: 100%;
        margin-top: 3rem;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        overflow: hidden;
        gap: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
            rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    .image-product {
        margin-top: 1.5rem;
        object-fit: cover;
        width: 100%;
        height: 95%;
    }

    .right-content {
        width: 100%;
        height: 100%;
    }

    .title {
        margin-top: 6rem;
        font-size: 3rem;
        line-height: 132%;
        letter-spacing: 0.015em;
        color: #151875;
        font-weight: 700;
    }

    .description {
        margin-top: 1rem;
        .title {
            font-size: 2rem;
            line-height: 132%;
            letter-spacing: 0.015em;
            color: #333;
            font-weight: 600;
        }
    }
    .detail {
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        line-height: 2.8rem;
        color: #acabc3;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        span {
            display: inline-block;
            width: 1.1rem;
            height: 1.1rem;
            border-radius: 50%;
            background-color: #2bf5cc;
            margin-right: 1.2rem;
        }
    }
    .active {
        margin-top: 3.8rem;
        display: flex;
    }
    .add-btn {
        height: 4.5rem;
        width: 15.7rem;
        border: none;
        font-size: 1.7rem;
        line-height: 2rem;
        letter-spacing: 0.02em;
        font-weight: 600;
    }
    .add-btn:hover {
        background-color: var(--primary-background-color-hover-btn);
        cursor: pointer;
    }
    .information_product {
        margin-left: 1.9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .name {
        font-size: 1.4rem;
        line-height: 1.6rem;
        letter-spacing: 0.02em;
        color: #151875;
        font-weight: 600;
    }
    .price {
        font-family: 'Roboto Slab';
        font-size: 1.4rem;
        line-height: 1.7rem;
        font-weight: 400;
        color: #151875;
        margin-top: 0.3rem;
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        width: 100%;
        padding: 0 7rem;
        .left-content {
            width: 50%;
        }
        .title {
            margin-top: 4rem;
            font-size: 3.2rem;
            line-height: 100%;
            letter-spacing: 0.012em;
        }
        .image-product {
            margin-top: 6.5rem;
            object-fit: cover;
            width: 100%;
            height: 70%;
        }
        .right-content {
            width: 50%;
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        position: relative;
        padding: 0 3rem;
        .left-content {
            /* display: none; */
            opacity: 0.4;
            width: 100%;
        }
        .right-content {
            position: absolute;
            width: 83%;
        }
        .title {
            margin-top: 3.4rem;
            font-size: 2.8rem;
            line-height: 125%;
            letter-spacing: 0.01em;
        }
        .detail {
            color: #6b6b6b;
            font-size: 1.5rem;
        }
        .add-btn {
            height: 4rem;
            width: 13rem;
            border: none;
            font-size: 1.5rem;
            line-height: 2rem;
            letter-spacing: 0.02em;
            font-weight: 600;
        }
    }
`;
export default Wrapper;
