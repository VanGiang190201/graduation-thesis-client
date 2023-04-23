import styled from 'styled-components';

const Wrapper = styled.div`
    width: 37rem;
    border-radius: 0.5rem;
    box-shadow: 0px 8px 20px rgba(49, 32, 138, 0.05);
    border-bottom: 4px solid #eaeaea;
    background-color: #fff;
    overflow: hidden;
    cursor: pointer;
    margin-top: 1rem;
    scroll-snap-align: center;
    margin-right: 1.5rem;
    &:hover {
        .title-blog {
            color: var(--primary-background-color-btn);
        }
        .read-more {
            color: var(--primary-background-color-btn);
            border-bottom-color: var(--primary-background-color-btn);
        }
    }
    .top-blog {
        width: 100%;
        height: 25.5rem;
        overflow: hidden;
        border-radius: 0.5rem;
    }

    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .bottom-blog {
        padding: 1.9rem 1.9rem 3.5rem;
    }

    .information-blog {
        display: flex;
        align-items: center;
    }
    .left-content {
        display: flex;
        max-width: 50%;
        align-items: center;
    }
    .right-content {
        display: flex;
        max-width: 50%;
        align-items: center;
    }
    .pen-icon {
        margin: -0.5rem 0.76rem 0 0;
        width: 1.4rem;
        height: 1.4rem;
        flex-shrink: 0;
    }

    .author {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        color: #151875;
        margin-right: 1.7rem;
    }

    .calendar-icon {
        margin: -0.5rem 0.76rem 0 0;
        width: 1.4rem;
        height: 1.4rem;
        flex-shrink: 0;
    }

    .time {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.6rem;
        color: #151875;
    }

    .content-blog {
        margin-top: 3.35rem;
    }

    .title-blog {
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 600;
        color: #151875;
    }

    .description-blog {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        color: #72718f;
    }
    .read-more {
        margin-top: 1.4rem;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 3rem;
        text-decoration: none;
        color: #151875;
        border-bottom: 1px solid #151875;
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        flex-shrink: 0;
        margin-right: 2rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        max-width: 30rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        max-width: 28rem;
        scroll-snap-align: start;
        .top-blog {
            height: 20rem;
        }
        .content-blog {
            margin-top: 1rem;
        }
        .title-blog {
            font-size: 1.6rem;
        }
        .description-blog {
            font-size: 1.4rem;
        }
        .read-more {
            font-size: 1.4rem;
        }
    }
`;

export default Wrapper;
