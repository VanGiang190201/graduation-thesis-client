import styled from 'styled-components';

const SearchWrapper = styled.div`
    width: 31.7rem;
    height: 4rem;
    display: flex;
    overflow: hidden;

    .search-input {
        width: 100%;
        height: 100%;
        outline: none;
        border: 2px solid #e7e6ef;
        border-bottom-left-radius: 8rem;
        border-top-left-radius: 8rem;
        border-right: none;
        font-size: 1.6rem;
        font-family: 'Roboto Slab', sans-serif;
        padding: 0px 1.2rem 0 1.2rem;
    }
    .search-input:focus {
        border-color: var(--primary-background-color-btn);
    }
    .search-btn {
        outline: none;
        width: 5rem;
        height: 100%;
        background-color: var(--primary-background-color-btn);
        border: none;
        padding: 0.2rem 0 0 0;
        flex-shrink: 0;
        border-top-right-radius: 8rem;
        border-bottom-right-radius: 8rem;
    }
    .search-btn:hover {
        cursor: pointer;
        background-color: var(--primary-background-color-hover-btn);
    }
    .search-btn:active {
        .search-icon {
            color: #555;
        }
    }
    .search-icon {
        background-color: linear-gradient(121.53deg, #f3f9ff 0%, #f1f0ff 100%);
    }
    .popper {
        width: 200px;
        height: 60px;
        border: 1px solid var(--primary-background-color-btn);
    }
    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        width: unset;
        .search-input {
            width: unset;
        }
    }
`;
export default SearchWrapper;
