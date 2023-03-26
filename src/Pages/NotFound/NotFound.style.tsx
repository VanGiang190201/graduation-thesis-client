import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .inner {
        max-width: 124rem;
        margin: 0 auto;
    }
    .error-view {
        width: 91rem;
        height: 52.6rem;
        margin: 0 auto;
    }

    .error-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .back-home {
        margin-top: 1.6rem;
        width: 100%;
        height: 4.4rem;
        display: flex;
        justify-content: center;
    }

    .back-home-btn {
        width: 16.5rem;
        height: 100%;
        background-color: var(--primary-background-color-btn);
        border: none;
        outline: none;
        color: #fff;
        font-weight: 600;
        font-size: 1.6rem;
        border-radius: 0.8rem;
    }
    .back-home-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }

    .logo-image {
        width: 124rem;
        height: 12.8rem;
        margin: 10rem auto 5rem;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .inner {
            max-width: 100rem;
        }

        .logo-image {
            max-width: 100%;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner {
            max-width: 89rem;
        }
        .error-view {
            max-width: 100%;
            height: 35.6rem;
            margin: 0 auto;
            padding: 2rem;
        }
        .logo-image {
            margin-top: 4rem;
        }
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner {
            max-width: 100%;
            padding: 0 7rem;
        }
        .error-view {
            height: 39.6rem;
        }
    }
`;

export default Wrapper;
