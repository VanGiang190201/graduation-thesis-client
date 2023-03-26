import * as React from 'react';

interface IMenuProps {
    children: React.ReactNode;
    className?: string;
}

const Menu: React.FunctionComponent<IMenuProps> = (props) => {
    const { children, className } = props;
    return <nav className={className}>{children}</nav>;
};

export default Menu;
