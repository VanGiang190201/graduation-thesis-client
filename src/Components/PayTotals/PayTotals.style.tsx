import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: #f4f4fc;
    border-radius: 3px;
    padding: 3.4rem 2.3rem;
    .sub-totals {
        display: flex;
        padding: 1.3rem 0;
        border-bottom: 2px solid #e8e6f1;
        align-items: center;
    }

    .title {
        font-size: 1.8rem;
        font-family: 'Lato';
        font-weight: 600;
        line-height: 2.6rem;
        color: #1d3178;
        flex: 1;
    }

    .price {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #15245e;
    }

    .totals {
        display: flex;
        margin-top: 3.4rem;
        padding: 1.3rem 0;
        border-bottom: 2px solid #e8e6f1;
        align-items: center;
    }

    .ship {
        display: flex;
        align-items: center;
        margin-top: 2.7rem;
    }

    .check {
        width: 1rem;
        height: 1rem;
        cursor: pointer;
    }
    .check:checked {
        accent-color: #19d16f;
    }

    .description {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 1.4rem;
        color: #8a91ab;
        margin-left: 0.7rem;
    }

    .proceed-btn {
        width: 100%;
        height: 4rem;
        background-color: #19d16f;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.7rem;
        color: #fff;
        border: none;
        margin-top: 2.6rem;
        border-radius: 0.4rem;
        opacity: 0.6;
        cursor: pointer;
        pointer-events: none;
        &:hover {
            background-color: #077e3e;
        }
    }

    .proceed-btn.isChecked {
        opacity: 1;
        pointer-events: all;
    }

    .spinner-icon {
        animation: spinner 2s linear infinite;
    }
    @keyframes spinner {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        padding: 1.2rem 2rem;
        .ship {
            .check {
                width: 2rem;
                height: 2rem;
            }
            .description {
                font-size: 1.5rem;
            }
        }
        .totals {
            margin-top: 0;
        }

        .proceed-btn {
            margin-top: 2rem;
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        padding: 1rem 1.5rem;
        display: grid;
        .ship {
            grid-row-start: 1;
            grid-row-end: 2;
            grid-column-start: 1;
            grid-column-end: 4;
            margin-top: 0.6rem;
            margin-bottom: 1rem;
            justify-content: center;
            .check {
                width: 2rem;
                height: 2rem;
            }
            .description {
                font-size: 1.3rem;
            }
        }

        .sub-totals {
            grid-row-start: 2;
            grid-row-end: 2;
            grid-column-start: 1;
            grid-column-end: 2;
            padding: 1rem 0.6rem;
            margin-right: 1rem;
            .title {
                font-size: 1.6rem;
            }
            .price {
                font-size: 1.4rem;
            }
        }
        .totals {
            grid-row-start: 3;
            grid-row-end: 3;
            grid-column-start: 1;
            grid-column-end: 2;
            margin-top: 0;
            padding: 1rem 0.6rem;
            margin-right: 1rem;
            .title {
                font-size: 1.6rem;
            }
            .price {
                font-size: 1.4rem;
            }
        }
        .proceed-btn {
            grid-row-end: 4;
            grid-row-start: 2;
            grid-column-start: 2;
            grid-column-end: 4;
            margin-top: 0;
            height: 100%;
            padding: 1rem;
        }
    }
`;
export default Wrapper;
