import styled from 'styled-components';

const HeadingBarWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f5ff;
    .inner {
        width: 1140px;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title {
        font-size: 3rem;
        line-height: 4rem;
        color: #101750;
    }
    .description {
        font-size: 1.5rem;
        line-height: 2rem;
        font-family: 'Roboto Slab';
        font-weight: 600;
        color: #000;
        word-spacing: 0.4rem;
    }
    .mark {
        color: var(--primary-background-color-btn);
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner {
            max-width: 78rem;
            margin: auto;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .inner {
            max-width: 100rem;
            margin: auto;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .inner {
            max-width: 100%;
            padding: 0 7rem;
        }
        .title {
            font-size: 3rem;
            line-height: 4rem;
        }
        .description {
            font-size: 1.5rem;
            line-height: 2rem;
            word-spacing: 0.2rem;
        }
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .inner {
            max-width: 100%;
            padding: 0 3rem;
        }
        .title {
            font-size: 2.6rem;
            line-height: 3.4rem;
        }
        .description {
            font-size: 1.4rem;
            line-height: 1.8rem;
            word-spacing: 0.2rem;
        }
    }
`;

export default HeadingBarWrapper;
