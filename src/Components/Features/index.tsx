import * as React from 'react';
import { Text } from '../Text';
import { Wrapper } from './Features.style';
interface IFeaturesProps {
    children: React.ReactNode;
    title?: string;
}

const Features: React.FunctionComponent<IFeaturesProps> = (props) => {
    const { children, title } = props;
    return (
        <Wrapper>
            <Text className="title-features">{title}</Text>
            <div className="list-feature">{children}</div>
        </Wrapper>
    );
};

export default Features;
