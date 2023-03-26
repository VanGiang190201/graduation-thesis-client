import styled from 'styled-components';
import { bgImage } from '../../../assets/images';

const BackgroundImage = styled.div`
    background-image: url(${bgImage});
    background-size: cover;
    width: 100%;
    margin-top: 7rem;
    height: 40rem;
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        height: 24rem;
        margin-top: 4rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        height: 16rem;
        margin-top: 2rem;
    }
`;
export default BackgroundImage;
