import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    padding: 4.6rem 3.1rem;
    background-color: #f8f8fd;
    border-radius: 0.3rem;
    .contact-information {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .title {
        font-size: 1.8rem;
        line-height: 2.1rem;
        font-weight: 600;
        color: #1d3178;
    }

    .shipped-address {
        margin-top: 6rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    input {
        border: none;
        border-bottom: 2px solid #bfc6e0;
        padding: 1.2rem 0;
        height: 4.6rem;
        background-color: #f8f8fd;
        font-size: 1.4rem;
        font-family: 'Lato';
        line-height: 1.7rem;
        letter-spacing: 0.02em;
    }
    input:focus {
    }
    .email {
        width: 100%;
        height: 5rem;
    }
    .name {
        width: 100%;
        display: flex;

        gap: 3rem;
        height: 5rem;
    }
    .wrapper-first-name {
        width: 50%;
    }
    .wrapper-last-name {
        width: 50%;
    }

    .first-name,
    .last-name,
    .address,
    .apartment,
    .city,
    .postal-code {
        width: 100%;
    }

    .error {
        color: var(--red-color);
        font-size: 1.2rem;
        margin-top: 0.8rem;
        font-weight: 600;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .name {
            width: 100%;
            flex-direction: column;
            height: unset;
        }
        .last-name {
            margin-left: 0;
        }
        input {
            margin-top: 1.9rem;
            height: 1rem;
        }
        .wrapper-first-name {
            width: 100%;
        }
        .wrapper-last-name {
            width: 100%;
        }
    }
`;

export default Wrapper;
