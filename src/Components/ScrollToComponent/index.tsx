import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { isMobile, isTablet, isDesktop } from 'react-device-detect';

interface IScrollToComponentProps {
    children: React.ReactNode;
}

const SCROLL_TOP_DESKTOP = 321;
const SCROLL_TOP_MOBILE = 200;
const ScrollToComponent: React.FunctionComponent<IScrollToComponentProps> = (props) => {
    const { children } = props;
    const childrenRef = React.useRef<HTMLDivElement>(null);
    const pathname = useLocation().pathname;
    React.useEffect(() => {
        if (isDesktop) {
            window.scrollTo({ top: 321 });
        } else if (isTablet) {
            window.scrollTo({ top: 245 });
        } else if (isMobile) {
            window.scrollTo({ top: 150 });
        }
    }, [pathname]);
    return <div ref={childrenRef}>{children}</div>;
};

export default ScrollToComponent;
