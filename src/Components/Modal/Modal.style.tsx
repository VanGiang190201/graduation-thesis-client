import styled from 'styled-components';
import { backGroundImageLogin } from '../../assets/images';

const Wrapper = styled.div`
    .overlay-modal {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 102;
        background-color: rgba(0, 0, 0, 1);
    }
    .modal-wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 103;
        min-width: 50rem;
        height: 46rem;
        background: #fff;
        border-radius: 1rem;
        padding: 2rem 1rem;
        box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    }
    .close-icon {
        position: absolute;
        right: 4rem;
        cursor: pointer;
    }
    .modal-content {
        width: 100%;
        text-align: center;
        margin-top: 3rem;
    }
`;

export default Wrapper;
