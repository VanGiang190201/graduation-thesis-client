import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .container {
        width: 114rem;
        margin: auto;
        display: flex;
        padding: 15.3rem 0;
    }
    .form {
        width: 77rem;
    }
    .pay-detail {
        margin-left: 3rem;
        width: 37.1rem;
    }
    .list-product {
        ::-webkit-scrollbar {
            border-radius: 0;
            width: 4px;
            height: 8px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: transparent;
        }
        :hover::-webkit-scrollbar-thumb {
            border-radius: 4px;
            background-color: #ccc;
        }
        ::-webkit-scrollbar-track {
            border-radius: 0;
            background-color: rgba(0, 0, 0, 0);
        }
    }
    .pay-total {
        margin-top: 10.2rem;
        position: sticky;
        bottom: 0;
    }
    .detail-totals {
        position: sticky;
        bottom: 0;
    }
    .blank {
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2 {
            margin-bottom: 2.4rem;
        }
        .btn-view-product {
            height: 5rem;
            width: 14rem;
            outline: none;
            border: none;
            font-size: 1.6rem;
            border-radius: 0.8rem;
            cursor: pointer;
        }
        .btn-view-product:hover {
            background-color: var(--primary-background-color-hover-btn);
        }
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .container {
            max-width: 100rem;
            padding: 2rem;
        }
        .form {
            max-width: 70rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .container {
            max-width: 92rem;
            padding: 2rem 7rem;
        }
        .form {
            max-width: 56rem;
        }
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            max-width: 100%;
            flex-direction: column;
            padding: 2rem 7rem;
        }
        .form {
            max-width: 100%;
        }
        .pay-detail {
            display: flex;
            flex-direction: row;
            margin-top: 2rem;
            justify-content: space-between;
            width: 100%;
            margin-left: 0;
        }
        .list-product {
        }
        .detail-totals {
            position: sticky;
            top: 12.4rem;
        }
        .pay-total {
            margin: 0 0 0 2rem;
        }
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container {
            width: 100%;
            padding: 0 3rem;
            margin-top: 1rem;
        }
        .form {
            max-width: 100%;
        }
        .pay-detail {
            display: flex;
            flex-direction: column;
            margin-top: 2rem;
            margin-left: 0;
        }
        .list-product {
            overflow: unset;
            height: unset;
        }
        .pay-total {
            margin: 1rem 0;
        }
    }
`;

export default Wrapper;
