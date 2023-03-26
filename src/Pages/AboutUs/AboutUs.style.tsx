import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .container {
        width: 100%;
    }
    .wrapper-header-content {
        max-width: 110rem;
        margin: auto;
    }
    .header-content {
        margin-top: 11.9rem;
        display: flex;
    }
    .slide {
        width: 55rem;
        height: 39rem;
        border-radius: 0.6rem;
        position: relative;
        flex-shrink: 0;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: -1.5rem;
            width: 100%;
            height: 40.9rem;
            background-color: #2b3cab;
            z-index: -1;
            border-radius: 0.6rem;
        }
    }
    .about-image {
        width: 100%;
        height: 100%;
        border-radius: 0.6rem;
    }
    .information {
        margin-left: 3rem;
    }
    .title {
        font-size: 3.4rem;
        line-height: 4.4rem;
        color: #151875;
        font-weight: 600;
        margin-top: 3.2rem;
    }
    .description {
        font-family: 'Lato';
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 600;
        color: #8a8fb9;
        text-align: justify;
        margin-top: 1.4rem;
        width: 50rem;
    }
    .contact-btn {
        width: 14.5rem;
        height: 4.4rem;
        background-color: var(--primary-background-color-btn);
        border-radius: 0.3rem;
        font-family: 'Lato';
        font-size: 1.6rem;
        line-height: 2.4rem;
        font-weight: 600;
        color: #fff;
        border: none;
        outline: none;
        margin-top: 5rem;
    }
    .contact-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }
    //features styled
    .wrapper-features {
        max-width: 114rem;
        margin: auto;
    }

    //feed-back styled
    .wrapper-feedback {
        max-width: 100%;
        height: 50rem;
        background-color: #fbfbff;
        margin-top: 13rem;
        padding: 7rem;
    }
    .feed-back {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .title-feedback {
        font-size: 4rem;
        line-height: 2.4rem;
        color: #000;
        font-weight: 600;
    }

    .client-images {
        margin-top: 12rem;
        width: 20rem;
        position: relative;
        display: flex;
    }
    .client-image {
        width: 5.5rem;
        height: 5.5rem;
    }
    .first-image {
        position: absolute;
        left: 0;
        bottom: 0;
    }

    .second-image {
        position: absolute;
        top: -6.5rem;
        left: 50%;
        transform: translateX(-50%);
    }

    .third-image {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    .information-client {
        margin-top: 4rem;
        font-family: 'Lato';
    }

    .name {
        font-size: 2.2rem;
        line-height: 2.6rem;
        font-weight: 600;
        color: #151875;
    }

    .position {
        font-size: 1rem;
        line-height: 2.6rem;
        font-weight: 600;
        color: #8a8fb9;
    }

    .comment {
        margin-top: 1.4rem;
        font-family: 'Lato';
        font-size: 1.6rem;
        line-height: 2.6rem;
        color: #8a8fb9;
        max-width: 68.9rem;
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .wrapper-header-content {
            max-width: 84rem;
            margin: auto;
        }
        .slide {
            width: 42rem;
        }
        .description {
            width: 40rem;
        }
        .wrapper-features {
            max-width: 90rem;
            margin: auto;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .wrapper-header-content {
            max-width: 96rem;
            margin: auto;
        }
        .slide {
            width: 50rem;
        }
        .description {
            width: 42rem;
        }
        .wrapper-features {
            max-width: 100rem;
            margin: auto;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        padding: 0 7rem;
        .wrapper-header-content {
            max-width: 100%;
            margin: auto;
        }
        .header-content {
            flex-direction: column;
            margin-top: 6rem;
        }
        .slide {
            width: 100%;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 40.9rem;
                background-color: #2b3cab;
                z-index: -1;
                border-radius: 0.6rem;
            }
        }
        .information {
            margin: 0;
            .title {
                width: 100%;
            }
            .description {
                width: 100%;
            }
        }
        .wrapper-features {
        }
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        padding: 0 3rem;
        .wrapper-header-content {
            max-width: 100%;
            margin: auto;
            padding: 0;
        }
        .header-content {
            margin-top: 6rem;
        }
        .slide {
            height: 28rem;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 30rem;
                background-color: #2b3cab;
                z-index: -1;
                border-radius: 0.6rem;
            }
        }
        .information {
            margin: 0;
            .title {
                font-size: 2.4rem;
                line-height: 4rem;
                color: #151875;
                font-weight: 600;
                margin-top: 3rem;
            }
            .description {
                font-size: 1.4rem;
                line-height: 2.4rem;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 4;
            }
        }

        .contact-btn {
            margin-top: 3rem;
        }

        .wrapper-feedback {
            margin-top: 4rem;
            padding: 2rem;
        }
        .title-feedback {
            font-size: 2.8rem;
        }
        .comment {
            font-size: 1.4rem;
        }
    }
`;

export default Wrapper;
