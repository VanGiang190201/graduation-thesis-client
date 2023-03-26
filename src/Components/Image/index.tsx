import * as React from 'react';
import styled from 'styled-components';

interface IImageProps {
    alt: string;
    src?: string;
    className?: string;
    width?: string;
    height?: string;
}

const ImageWrapper = styled.img`
    overflow: hidden;
`;

const Image: React.FC<IImageProps> = (props) => {
    const { alt, src, className, width, height } = props;
    return <ImageWrapper src={src} alt={alt} width={width} height={height} className={className} />;
};

export default Image;
