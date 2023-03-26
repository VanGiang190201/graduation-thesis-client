import * as React from 'react';

import PopperWrapper from './Popper.style';
interface IPopperProps {
    children: React.ReactNode;
    className?: string;
}

const Popper: React.FunctionComponent<IPopperProps> = (props) => {
    const { children, className } = props;
    return <PopperWrapper className={className}>{children}</PopperWrapper>;
};

export default Popper;
