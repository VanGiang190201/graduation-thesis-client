import styled from 'styled-components';

const Wrapper = styled.div`
    .logo {
        font-size: 3.6rem;
        letter-spacing: 0.3rem;
    }
    .description {
        font-size: 1.4rem;
        margin-top: 0.8rem;
        color: #666;
    }
    .center-modal {
        display: flex;
        gap: 1rem;
        margin-bottom: 3rem;
        border-top: 1px solid #ccc;
    }
    .signin-btn-wrapper {
        height: 4.2rem;
        width: 100%;
        margin-top: 2rem;
        text-decoration: none;
        border-radius: 2rem;
        border: 2px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #222;
        font-size: 1.3rem;
        font-weight: 600;
        font-family: 'Lato';
        position: relative;
        background-color: transparent;
        &:hover {
            background-color: #ccc;
        }
    }
    .icon-wrapper {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }
    .user-icon-modal {
        font-weight: 600;
    }
    .google-icon-modal {
    }
    .facebook-icon-modal {
        color: blue;
    }
    .bottom-modal {
        margin-top: 4rem;
        padding: 0 8rem;
    }
    .link {
        font-size: 1.4rem;
        color: #666;
    }
    .register-link {
    }

    .description-bottom {
        font-size: 1.3rem;
        color: #ccc;
        margin-top: 4rem;
    }

    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .center-modal {
            flex-direction: column;
        }
    }
`;

export default Wrapper;
