import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface IMenuItemProps {
    to: string;
    end?: boolean;
    children: React.ReactNode;
    className?: string;
}

const NavLinkWrapper = styled.div`
    display: inline;
    cursor: pointer;
    .active {
        color: var(--primary-background-color-btn) !important;
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        display: block;
        height: 6rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        display: block;
        height: 5rem;
    }
`;

const MenuItem: React.FunctionComponent<IMenuItemProps> = (props) => {
    const { to, end, children, className } = props;
    return (
        <NavLinkWrapper>
            {to ? (
                <NavLink to={to} end={end} className={(nav) => (nav.isActive ? `active ${className}` : `${className}`)}>
                    {children}
                </NavLink>
            ) : (
                <span className={className}>{children}</span>
            )}
        </NavLinkWrapper>
    );
};

export default MenuItem;
