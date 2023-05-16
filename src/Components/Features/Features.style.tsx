import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 8rem;
    width: 100%;
    text-align: center;
    padding: 0.4rem;
    border-bottom: 2px solid transparent;
    .slick-arrow {
        width: 3rem;
        height: 3rem;
    }
    .slick-prev {
        left: -38px;
    }
    .slick-prev::before {
        color: #ccc;
        font-size: 3rem;
    }
    .slick-next {
        right: -28px;
    }
    .slick-next::before {
        color: #ccc;
        font-size: 3rem;
    }
    .title-features {
        font-size: 4rem;
        line-height: 5rem;
        color: #000;
        font-weight: 600;
        margin-bottom: 2rem;
    }
    .list-feature {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        padding: 0.4rem 0;
        .list-feature {
            padding: 2rem 0rem;
            justify-content: space-between;
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        margin-top: 4rem;
        .title-features {
            font-size: 2.6rem;
            margin-bottom: 0;
        }
        .list-feature {
            padding: 1rem 0;
            justify-content: center;
        }
    }
`;

export const FeatureItemWrapper = styled.div`
    width: 27rem;
    height: 40rem;
    margin-top: 2rem;
    background-color: #fff;
    box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
    padding: 2.6rem 2.6rem 4.5rem;
    display: flex;
    margin-left: 0.6rem;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid transparent;
    .image-feature {
        height: 14rem;
        width: 100%;
        margin-top: 2rem;
        overflow: hidden;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .title-feature {
        font-size: 2.2rem;
        line-height: 2.4rem;
        font-weight: 600;
        color: #151875;
        margin-top: 2rem;
        text-align: center;
    }

    .description-feature {
        text-align: center;
        font-family: 'Roboto Slab';
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 700;
        color: rgba(26, 11, 91, 0.3);
        margin-top: 2rem;
    }
    &:hover {
        cursor: pointer;
        border-bottom-color: #ff9100;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        width: 30rem;
    }
`;
