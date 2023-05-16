import styled from 'styled-components';

const PopperWrapper = styled.div`
    width: 40rem;
    min-height: 14rem;
    border-radius: 8px;
    box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
    background-color: #fff;

    //Popper Notification
    .wrapper-notification {
        position: relative;
        padding: 1.6rem 1rem;
        &::before {
            content: '';
            position: absolute;
            border: 1rem solid transparent;
            border-color: transparent transparent white transparent;
            z-index: 9999;
            top: -1.6rem;
            right: 2.4rem;
        }
        .header-notification {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .heading {
            color: #222;
            font-weight: 600;
            margin-left: 1rem;
        }
        .bell-icon {
            transform: rotateZ(25deg);
            margin-right: 1rem;
            color: #555;
        }
        .content-notification {
            max-height: 54rem;
            overflow: auto;
        }
        .blank {
            width: 100%;
            text-align: center;
            margin-top: 2rem;
            font-size: 1.6rem;
            font-family: 'Roboto Slab';
            font-weight: 600;
        }
    }
`;
export default PopperWrapper;
