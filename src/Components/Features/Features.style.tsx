import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.4rem;
    border-bottom: 2px solid transparent;
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
    margin-top: 2rem;
    background-color: #fff;
    box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
    padding: 2.6rem 2.6rem 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 2px solid transparent;
    .image-feature {
        margin-top: 4rem;
    }

    .image {
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
        font-family: 'Lato';
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
