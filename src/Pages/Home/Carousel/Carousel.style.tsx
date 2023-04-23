import styled from 'styled-components';
import { backgroundSliderImage } from '../../../assets/images';

export const Wrapper = styled.div`
    width: 98%;
    height: 100%;

    //Custom slider Css
    ul.slick-dots {
        position: relative;
        top: -4rem;

        .slick-active {
            background-color: var(--primary-background-color-btn);
        }

        & li {
            width: 1rem;
            height: 1rem;
            transform: rotate(-45deg);
            border: 1px solid var(--primary-background-color-btn);
        }

        & li button:before {
            width: 1rem;
            height: 1rem;
            color: transparent;
        }
    }
    //desktop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        padding: 0 3rem 0rem 4rem;
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        /* padding: 0 3rem 0rem 4rem; */
        padding: 0 7rem;
    }
    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        padding: 0 3rem;
    }
`;

export const CarouselItemWrapper = styled.div`
    width: 100%;
    height: 56rem;
    background-color: #f2f0ff;
    .container {
        max-width: 110rem;
        margin: auto;
        display: flex;
    }
    .information-carousel {
        width: 70%;
        height: 100%;
        position: relative;
    }
    .title-carousel {
        margin-top: 18rem;
        font-size: 5.3rem;
        font-weight: 700;
        line-height: 8.2rem;
        letter-spacing: 0.015em;
        color: #000;
    }

    .description-carousel {
        font-size: 1.6rem;
        font-family: 'Lato';
        font-weight: 700;
        line-height: 2.8rem;
        color: #8a8fb9;
    }

    .shop-btn {
        margin-top: 2rem;
        width: 16.3rem;
        height: 5rem;
        border: none;
        font-size: 1.7rem;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: 0.02em;
    }
    .shop-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }

    .light-image {
        position: absolute;
        top: 0;
    }

    .image-wrapper {
        background: url(${backgroundSliderImage});
        background-size: 43rem;
        background-repeat: no-repeat;
        width: 50rem;
        height: 42rem;
        margin-top: 13rem;
    }

    .image-carousel {
        width: 100%;
        height: 100%;
        box-shadow: 10px 2px 4px #444;
        clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 0 100%, 30% 80%, 0% 75%);
    }
    //responsive
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            max-width: 110rem;
        }
        .information-carousel {
            width: 60%;
            height: 100%;
        }
        .title-carousel {
            font-size: 3.3rem;
            font-weight: 700;
            line-height: 4.2rem;
            letter-spacing: 0.015em;
            color: #000;
        }
        .image-wrapper {
            width: 40rem;
            height: 38rem;
            margin-top: 10rem;
        }
    }
    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        height: 50rem;
        .container {
            position: relative;
        }
        .information-carousel {
            width: 100%;
            position: absolute;
            z-index: 3;
            .light-image {
                top: -1rem;
            }
        }
        .image-wrapper {
            opacity: 0.3;
        }
        .title-carousel {
            font-size: 2.6rem;
            font-weight: 700;
            line-height: 4.2rem;
            letter-spacing: 0.015em;
            color: #000;
        }
        .description-carousel {
            font-size: 1.4rem;
        }

        .shop-btn {
            margin-top: 2rem;
            width: 12.3rem;
            height: 4rem;
            border: none;
            font-size: 1.5rem;
        }
    }
`;
