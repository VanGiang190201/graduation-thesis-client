import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .inner {
        margin: auto;
        max-width: 117rem;
    }
    .order-completed {
        width: 100rem;
        border-left: 1px dotted #d2d1d1;
        border-bottom: 1px dotted #d2d1d1;
        height: 30rem;
        padding: 0 4rem;
        margin-top: 18rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 16rem auto 10rem;
        position: relative;
    }

    .title {
        font-size: 3.6rem;
        line-height: 4rem;
        color: #101750;
        font-weight: 600;
        margin-bottom: 2.8rem;
    }

    .description {
        font-family: 'Lato';
        font-size: 1.6rem;
        font-weight: 600;
        text-align: center;
        color: #8d92a7;
        width: 64rem;
        margin-bottom: 3.2rem;
    }

    .continue-btn {
        width: 20rem;
        height: 6rem;
        background-color: var(--primary-background-color-btn);
        font-family: 'Lato';
        font-weight: 600;
        font-size: 1.6rem;
        color: #fff;
        border: none;
        outline: none;
        border-radius: 0.8rem;
    }

    .continue-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }
    .check-image {
        position: absolute;
        top: -10rem;
    }
    .clock-image {
        position: absolute;
        top: -4rem;
        left: -4.6rem;
    }

    .checklist-image {
        position: absolute;
        bottom: -3rem;
        right: -2rem;
    }
    .logo-image {
        width: 110rem;
        height: 12rem;
        margin: 10rem auto 8rem;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .inner {
            max-width: 100%;
            padding: 0 7rem;
        }
        .order-completed {
            max-width: 100%;
        }
        .logo-image {
            max-width: 100%;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .inner {
            max-width: 100%;
            padding: 2rem 3rem;
        }
        .order-completed {
            max-width: 100%;
            margin-top: 12rem;
        }
        .title {
            font-size: 2rem;
            line-height: 3rem;
        }
        .description {
            width: 100%;
            font-size: 1.4rem;
        }
        .logo-image {
            width: 100%;
            height: 12rem;
            margin: 6rem auto 4rem;
        }
        .clock-image {
            position: absolute;
            top: -9rem;
            left: -1rem;
        }
        .checklist-image {
            right: 0;
        }
        .continue-btn {
            height: 5rem;
        }
    }
`;
export default Wrapper;
