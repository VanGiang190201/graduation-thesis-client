import * as React from 'react';
import styled from 'styled-components';
import { SpinnerIcon } from '../Icons';
interface ILoadingProps {}

const Wrapper = styled.div`
    height: 45rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .spinner-icon {
        animation: spinner 2s linear infinite;
    }
    @keyframes spinner {
        0% {
            transform: rotateZ(0deg);
        }
        100% {
            transform: rotateZ(360deg);
        }
    }
`;

const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    return (
        <Wrapper>
            <SpinnerIcon width="3rem" height="3rem" className="spinner-icon" />
        </Wrapper>
    );
};

export default Loading;
