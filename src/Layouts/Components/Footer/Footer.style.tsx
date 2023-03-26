import styled from 'styled-components';

const FooterWrapper = styled.div`
    background-color: #eeeffb;
    width: 100%;
    .inner-top-footer {
        max-width: 114rem;
        height: 100%;
        margin: auto;
        padding: 8rem;
    }

    .top-footer {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .list-footer {
        display: flex;
        flex-direction: column;
        margin-right: 2rem;
    }

    .logo-footer {
        margin-bottom: 3.1rem;
    }

    .app-logo {
        font-size: 3.4rem;
        line-height: 4rem;
        color: #0d0e43;
        font-weight: 600;
    }

    .email-login {
        display: flex;
        height: 3.8rem;
        width: 26rem;
        align-items: center;
        background-color: #fff;
        border-radius: 0.4rem;
        margin-bottom: 2.5rem;
        padding: 0.2rem;
    }

    .input {
        border: none;
        height: 100%;
        outline: none;
        font-size: 1.4rem;
        padding: 0.4rem;
        font-family: 'Lato';
        color: #8a8fb9;
        flex-grow: 1;
    }

    .btn {
        width: 8.2rem;
        height: 3.2rem;
        border: none;
        background-color: var(--primary-background-color-btn);
        border-radius: 0.4rem;
        flex-shrink: 0;
    }
    .btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }
    .btn:active {
        color: #555;
    }

    .item-footer {
        font-family: 'Lato';
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: #8a8fb9;
        margin-bottom: 2rem;
        cursor: pointer;
    }
    .arrow-icon {
        display: none;
    }
    .item-footer:hover {
        color: #444;
    }

    .title-footer {
        margin-bottom: 4rem;
        line-height: 2.4rem;
    }

    .bottom-footer {
        background-color: #e7e4f8;
        height: 5rem;
        width: 100%;
    }

    .inner-bottom-footer {
        width: 1140px;
        height: 100%;
        margin: auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .copy-right {
        font-family: 'Lato';
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: #8a8fb9;
        cursor: pointer;
    }
    .copy-right:hover {
        color: #444;
    }
    .social-logo {
        display: flex;
    }
    .icon {
        margin-right: 1rem;
        cursor: pointer;
        color: #151875;
    }

    //desktop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .inner-top-footer {
            max-width: 100rem;
            margin: auto;
        }
        .inner-bottom-footer {
            max-width: 100rem;
            margin: auto;
        }
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner-top-footer {
            max-width: 89rem;
            margin: auto;
        }
        .inner-bottom-footer {
            max-width: 89rem;
            margin: auto;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .inner-top-footer {
            max-width: 100%;
            margin: auto;
            padding: 4rem 7rem;
        }
        .top-footer {
            justify-content: space-between;
        }
        .inner-bottom-footer {
            max-width: 100%;
            margin: auto;
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .inner-top-footer {
            max-width: 100%;
            margin: auto;
            padding: 4rem 3rem;
        }
        .top-footer {
            .list-footer {
                margin: 0;
                margin-bottom: 1rem;
                width: 100%;
                .header-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                }
                .arrow-icon {
                    display: block;
                }
                .logo-footer,
                .title-footer {
                    margin-bottom: 0.8rem;
                }
                .item-footer {
                    font-size: 1.2rem;
                }
                .content-header {
                    height: 0.4rem;
                    overflow: hidden;
                    transition: 0.4s ease;
                }
                .show {
                    height: 100%;
                }
            }
        }
        .inner-bottom-footer {
            max-width: 100%;
            margin: auto;

            .copy-right {
                font-size: 1.1rem;
                font-weight: 400;
                line-height: 1.4rem;
                color: #8a8fb9;
                cursor: pointer;
            }
            .icon {
                width: 1.4rem;
                height: 1.4rem;
            }
        }
    }
`;
export default FooterWrapper;
