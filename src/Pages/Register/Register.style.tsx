import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .form-register {
        width: 54rem;
        box-shadow: 0px 0px 25px 10px #f8f8fb;
        margin: auto;
        margin-top: 10rem;
        margin-bottom: 10rem;
        padding: 5rem;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    .header-form {
        margin-bottom: 3.6rem;
        text-align: center;
    }

    .title {
        font-size: 3.2rem;
        line-height: 3.6rem;
        color: #000;
        margin-bottom: 0.7rem;
        font-weight: 700;
    }

    .description {
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
        font-family: 'Roboto Slab';
        color: #9096b2;
    }

    .input {
        width: 43rem;
        height: 5rem;
        border: 1px solid #c2c5e1;
        border-radius: 0.2rem;
        outline: none;
        padding: 0.5rem 0.8rem;
        font-size: 1.4rem;
    }
    .test-input {
        height: 4rem;
        width: 26rem;
        padding: 0 0.6rem;
        border: 1px solid #c2c5e1;
    }

    .text-form {
        font-size: 1.6rem;
        line-height: 2rem;
        font-weight: 500;
        font-family: 'Roboto Slab';
        color: #9096b2;
        margin-bottom: 2rem;
    }
    .login-link {
        color: #9096b2;
    }
    /* .text-form:hover {
        color: #444;
        cursor: pointer;
    } */

    .register-btn {
        height: 4.7rem;
        background-color: var(--primary-background-color-btn);
        border: none;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2rem;
        color: #fff;
        margin-bottom: 2.8rem;
    }
    .register-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
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
    .login {
        text-align: center;
    }
    .error {
        color: var(--red-color);
        font-size: 1.2rem;
        margin: 0.8rem 0 1rem 0;
        font-weight: 600;
    }
    .logo-image {
        width: 90rem;
        margin: auto;
        margin-bottom: 10rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .form-register {
            margin-top: 4rem;
            padding: 2rem 7rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .form-register {
            margin-top: 4rem;
            max-width: 100%;
            padding: 2rem 3rem;
            margin-bottom: 1rem;
        }

        .title {
            font-size: 3rem;
            line-height: 3.2rem;
        }

        .description {
            font-size: 1.4rem;
        }

        .input {
            width: 100%;
            height: 4.5rem;
            border-radius: 0.4rem;
            padding: 0.4rem;
            font-size: 1.4rem;
        }
    }
`;

export default Wrapper;
