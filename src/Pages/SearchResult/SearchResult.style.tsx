import styled from 'styled-components';

const Wrapper = styled.div`
    width: 114rem;
    margin: auto;
    .list-result {
        margin-top: 10.2rem;
    }
    .no-result-wrapper {
        width: 100%;
        height: 61rem;
    }
    .no-result {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .logo-bottom {
        width: 90.4rem;
        margin: 7.6rem auto;
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        max-width: 100rem;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        max-width: 89rem;
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        max-width: 100%;
        padding: 0 7rem;
        .list-result {
            margin-top: 6.2rem;
        }
        .logo-bottom {
            max-width: 70rem;
            margin: 7.6rem auto;
        }
        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        max-width: 100%;
        .list-result {
            margin-top: 2rem;
        }
        .no-result-wrapper {
            padding: 2rem;
        }
        .logo-bottom {
            max-width: 100%;
            margin: 1rem auto;
        }
    }
`;
export default Wrapper;
