import * as React from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

import Wrapper from './Modal.style';
import { HideIcon } from '../Icons';
import config from '../../config';
interface IModalProps {
    children: React.ReactNode;
    isOpened: boolean;
    // setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;

    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FunctionComponent<IModalProps> = (props) => {
    const { children, isOpened, setIsOpenModal } = props;

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };
    if (!isOpened) {
        return null;
    } else {
        const modalWrapper: any = document.getElementById('modal');
        return createPortal(
            <Wrapper>
                <div className="overlay-modal"></div>
                <div className="modal-wrapper">
                    <div className="close-icon" onClick={handleCloseModal}>
                        <HideIcon width="2rem" height="2rem" className="icon" />
                    </div>
                    <div className="modal-content">{children}</div>
                </div>
            </Wrapper>,
            modalWrapper,
        );
    }
};

export default Modal;
