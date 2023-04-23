import styled from 'styled-components';

export const DefaultLayoutWrapper = styled.div`
    width: 100%;
`;
export const HeaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 4.4rem;
    z-index: 101;
    top: 0;
    left: 0;
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
    }
    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        display: none;
    }
`;
export const NavBarWrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 4.4rem;
    z-index: 100;
    left: 0;
    height: 7.8rem;
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
    }
    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        height: 6.4rem;
        top: 0;
    }
`;

export const HeadingBarWrapper = styled.div`
    width: 100%;
    height: 14rem;
    margin-top: 13rem;
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        margin-top: 6.3rem;
        height: 14rem;
    }
`;
export const ContentWrapper = styled.div``;
export const FooterWrapper = styled.div`
    width: 100%;
`;
