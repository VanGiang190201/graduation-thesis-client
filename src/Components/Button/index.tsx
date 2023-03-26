import React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    primary?: boolean;
    color?: string;
}

const ButtonWrapper = styled.button`
    color: #fff;
    background-color: var(--primary-background-color-btn);
    border-radius: 0.2rem;
    font-family: 'Oxygen', sans-serif;
`;

const Button: React.FC<IButtonProps> = (props) => {
    const { children, className, onClick, primary } = props;
    return (
        <ButtonWrapper className={primary ? `primary ${className}` : className} onClick={onClick}>
            {children}
        </ButtonWrapper>
    );
};

export default Button;
