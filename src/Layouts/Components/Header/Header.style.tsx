import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: #55595b;
    height: 4.4rem;

    .inner {
        max-width: 1140px;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .contact-header {
        display: flex;
    }

    .mail-contact {
        display: flex;
        align-items: center;
        margin-right: 5.6rem;
    }
    .icon-header {
        color: #fff;
    }
    .icon-header:not(.cart-icon) {
        margin: 0.2rem 1.3rem 0 0.3rem;
    }

    .text-header {
        font-size: 1.5rem;
        line-height: 1.9rem;
        color: #f1f1f1;
        font-weight: 600;
    }

    .phone-contact {
        display: flex;
        align-items: center;
    }

    .option-header {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .language-translate,
    .currency-unit,
    .login-header,
    .wish-list,
    .notification {
        display: flex;
        margin-right: 1rem;
        text-decoration: none;
        cursor: pointer;
    }

    .bell-alert-icon {
        animation: Shake 1s linear infinite;
    }

    @keyframes Shake {
        0% {
            transform: rotateZ(0);
        }
        40% {
            transform: rotateZ(0);
        }
        60% {
            transform: rotateZ(20deg);
        }
        70% {
            transform: rotateZ(-20deg);
        }
        80% {
            transform: rotateZ(20deg);
        }
        90% {
            transform: rotateZ(-20deg);
        }
        100% {
            transform: rotateZ(0);
        }
    }
    .like-list {
        display: flex;
        margin-right: 0.7rem;
        text-decoration: none;
        position: relative;
    }

    .arrow-icon {
        color: transparent;
        margin-top: 0.3rem;
    }
    .like-icon {
        margin-top: 0.2rem;
    }
    .cart-icon {
        margin-top: 0;
    }
    .more-option {
        display: none;
    }
    .isLight {
        color: var(--primary-background-color-btn);
    }
    .quantity-cart {
        position: absolute;
        background-color: #fff;
        width: 2rem;
        height: 2rem;
        right: -1.4rem;
        border-radius: 2rem;
        top: -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color: var(--primary-background-color-btn);
            font-size: 1.4rem;
            font-weight: 700;
            margin-left: 0.1rem;
        }
    }

    .user-icon {
        margin-left: -0.1rem;
    }

    .login-header:active {
        text-decoration: none;
    }
    .name-wrapper {
        position: relative;
        :hover {
            .logout-wrapper {
                display: flex;
            }
        }
    }
    .avatar {
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 2rem;
        cursor: pointer;
        .user-image-login {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .user-name {
        padding: 0.2rem 0rem 0.2rem 0;
        text-align: center;
        color: #ccc;
        font-size: 1.4rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.3s linear;
    }
    .logout-wrapper {
        min-width: 14rem;
        min-height: 8rem;
        position: absolute;
        z-index: 3;
        background-color: #333;
        border-radius: 1rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.6rem;
        display: none;
        padding: 0.4rem;
        top: 3.2rem;
        left: -2rem;
        &::before {
            content: '';
            position: absolute;
            border: 1rem solid transparent;
            border-color: transparent transparent #333 transparent;
            z-index: 9999;
            top: -1.6rem;
            left: 2.4rem;
        }
        .logout-icon {
            margin: 0 0.6rem 0.4rem 0;
            color: #ccc;
        }

        .logout {
            display: flex;
            border-top: 1px solid #ccc;
            padding: 0.4rem 0;
        }
    }
    .logout-text {
        color: #ccc;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 1.4rem;
    }

    //Popper Notification

    .wrapper-notification {
        padding: 2rem 1rem;
    }

    // responsive
    //desktop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .inner {
            max-width: 100rem;
            margin: auto;
        }
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner {
            max-width: 89rem;
            margin: auto;
        }
    }

    //tablet

    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .inner {
            max-width: 100%;
            padding: 0 6rem;
            /* justify-content: space-around; */
        }
        .contact-header {
            display: inline;
        }
        .mail-contact {
            display: none;
        }
        .language-translate {
            display: none;
        }
        .currency-unit {
            display: none;
        }
        .wish-list {
            p {
                display: none;
            }
        }
        .more-option {
            display: block;
            cursor: pointer;
            height: 100%;
            position: relative;
            margin-left: 2rem;
            &:hover {
                .sub-option {
                    display: block;
                }
            }
        }
        .more-icon {
            color: #fff;
        }
        .sub-option {
            position: absolute;
            display: none;
            left: -8rem;
            bottom: -7.4rem;
            padding: 0.8rem;
            width: 12rem;
            background-color: #ccc;
            border-radius: 0.4rem;
            .language-translate {
                display: flex;
                height: 3rem;
                &:hover {
                    .text-header {
                        color: var(--primary-background-color-btn);
                    }
                    .icon-header {
                        color: var(--primary-background-color-btn);
                    }
                }
            }
            .text-header {
                color: #444;
                flex: 1;
            }
            .icon-header {
                color: #444;
                margin-right: 0;
            }
            .currency-unit {
                display: flex;
                height: 3rem;
                &:hover {
                    .text-header {
                        color: var(--primary-background-color-btn);
                    }
                    .icon-header {
                        color: var(--primary-background-color-btn);
                    }
                }
            }
        }
    }
    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .inner {
            width: 100%;
            padding: 0 3rem;
        }
        .contact-header {
            display: none;
        }
        .like-list {
            display: none;
        }

        .option-header {
            justify-content: flex-end;
        }
        .more-option {
            display: none;
        }
    }
`;
