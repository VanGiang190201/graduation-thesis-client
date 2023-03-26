import * as React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

interface ITextProps {
    textOfLine?: number;
    className?: string;
    children: React.ReactNode;
}

export const Text: React.FunctionComponent<ITextProps> = (props) => {
    const { children, className, textOfLine } = props;

    return (
        <Tippy content={children} delay={[800, 0]}>
            <p
                style={{
                    WebkitBoxOrient: 'vertical',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: textOfLine,
                }}
                className={className}
            >
                {children}
            </p>
        </Tippy>
    );
};
