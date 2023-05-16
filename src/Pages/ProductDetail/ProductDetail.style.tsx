import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    .container {
        width: 100%;
    }
    .bottom-content {
        width: 90rem;
        margin: 8rem auto 1rem;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .bottom-content {
            max-width: 78rem;
            margin: auto;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .bottom-content {
            max-width: 100rem;
            margin: auto;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            padding: 0 7rem;
        }
        .bottom-content {
            max-width: 100%;
            margin: 2rem auto;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container {
            padding: 0 3rem;
        }
    }
`;

export const TopContentWrapper = styled.div`
    width: 114rem;
    margin: auto;
    .top-content {
        display: flex;
        box-shadow: 0px 0px 25px 10px #f6f4fd;
        border-radius: 0.2rem;
        background-color: #fff;
        margin-top: 12.1rem;
        padding: 1.3rem;
    }

    .images-wrapper {
        display: flex;
    }

    .left-images {
        scroll-snap-type: y mandatory;
        width: 15.1rem;
        max-height: 50rem;
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-x: hidden;
        overflow-y: auto;
    }
    //scrollbar CSS
    .left-images::-webkit-scrollbar {
        border-radius: 0;
        width: 4px;
        height: 8px;
        display: none;
    }

    .left-images::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: transparent;
    }
    .left-images:hover::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: #ccc;
    }

    .left-images::-webkit-scrollbar-track {
        border-radius: 0;
        background-color: rgba(0, 0, 0, 0);
    }
    .child-image {
        width: 100%;
        border-radius: 0.3rem;
        height: 32%;
        flex-shrink: 0;
        overflow: hidden;
        margin-bottom: 1.1rem;
        scroll-snap-align: center;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: 0.2s linear;
        border-radius: 0.3rem;
        &:hover {
            transform: scale(0.95);
        }
        &:active {
            border: 1px solid var(--primary-background-color-btn);
        }
    }
    .isActive {
        border: 1px solid var(--primary-background-color-btn);
    }
    .right-images {
        height: 100%;
        width: 37.5rem;
        overflow: hidden;
        margin-left: 2.1rem;
        border-radius: 0.3rem;
        transition: 0.3s linear;
    }
    .ant-image {
        height: 100%;
    }
    .bg-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .information-wrapper {
        margin-left: 4.4rem;
        padding: 5rem 2rem 3rem 0;
    }
    .name-product {
        font-size: 3.6rem;
        font-weight: 600;
        line-height: 4.2rem;
        color: #0d134e;
    }

    .rate-product {
        display: flex;
        margin-top: 1.38rem;
    }

    .star {
        color: yellow;
    }

    .price-product {
        display: flex;
        margin-top: 1.5rem;
    }

    .sale-price {
        font-size: 1.6rem;
        line-height: 2.9rem;
        text-transform: capitalize;
        font-weight: 600;
        color: #151875;
    }

    .normal-price {
        font-size: 1.6rem;
        line-height: 2.9rem;
        text-transform: capitalize;
        font-weight: 600;
        text-decoration-line: line-through;
        color: #fb2e86;
        margin-left: 1.8rem;
    }
    .list-color {
        display: flex;
        margin-top: 2rem;
        p {
            font-size: 1.6rem;
            line-height: 1.9rem;
            color: #0d134e;
            font-weight: 600;
            margin-right: 2rem;
            margin-top: 0.4rem;
        }
        .container-radio {
            display: flex;
        }
        input {
            margin-right: 1.2rem;
            width: 2rem;
            display: none;
        }
        label {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
            border-radius: 0.4rem;
            cursor: pointer;
        }
        .label-yellow {
            background-color: yellow;
        }
        .label-red {
            background-color: red;
        }
        .label-black {
            background-color: black;
        }
        .label-green {
            background-color: green;
        }
    }
    .checked {
        border: 2px solid blue;
        padding: 0.8rem;
    }
    .description-product {
        margin-top: 1.2rem;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2.9rem;
        color: #a9acc6;
    }
    .active {
        display: flex;
        margin: 1.2rem 0 0 3rem;
        align-items: center;
    }
    .add-cart-btn {
        width: 16rem;
        height: 4rem;
        font-weight: 600;
        border: none;
        color: #151875;
        font-size: 1.4rem;
        line-height: 2rem;
        border-radius: 0.4rem;
        cursor: pointer;
        background-color: transparent;
    }
    .add-cart-btn:hover {
        background-color: var(--primary-background-color-btn);
        color: #fff;
    }
    .add-cart-btn:active {
        background-color: var(--primary-background-color-hover-btn);
    }
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
    .heart-icon {
        margin-left: 2rem;
        color: #535399;
        cursor: pointer;
        transition: 0.1s linear;
    }

    .heart-icon:hover {
        transform: scale(1.2);
        color: var(--primary-background-color-hover-btn);
    }

    .heart-icon:active {
        transform: scale(1.4);
        opacity: 0;
    }

    .isLight {
        color: var(--primary-background-color-btn);
    }

    .quantity-wrapper {
        margin-top: 2rem;
        display: flex;
    }
    .quantity {
        display: flex;
        align-items: center;
        span {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            text-align: center;
            background-color: #f0eff2;
            height: 2rem;
            font-size: 1.2rem;
            color: #000;
        }
    }
    .quantity-btn {
        width: 2rem;
        height: 2rem;
        background-color: #e7e7ef;
        font-size: 1.8rem;
        color: #000;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0;
        cursor: pointer;
    }
    .disable-btn {
        color: #bebfc2;
    }
    .title {
        font-size: 1.6rem;
        line-height: 2.9rem;
        font-weight: 600;
        margin-right: 2.8rem;
        color: #151875;
    }

    .size {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        .container-size {
            display: flex;
        }
        input {
            margin-right: 1.2rem;
            width: 2rem;
            display: none;
        }
        label {
            width: 3rem;
            height: 2rem;
            margin-right: 1rem;
            border-radius: 0.4rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            background-color: #ccc;
        }
    }

    .share {
        display: flex;
        align-items: center;
        p {
            font-size: 1.6rem;
            line-height: 2.9rem;
            font-weight: 600;
            margin-top: 1rem;
            color: #151875;
        }
        .social-logo {
            margin-left: 1.6rem;
            display: flex;
            align-items: center;
            margin-top: 0.6rem;
        }
        .icon {
            margin-right: 1.48rem;
            cursor: pointer;
        }
        .facebook-icon,
        .twitter-icon {
            color: #151875;
        }
        .instagram-icon {
            color: #fb2e86;
        }
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        max-width: 89rem;
        margin: auto;
        .top-content {
            width: 100%;
        }
        .left-images {
            width: 15.1rem;
            height: 100%;
        }
        .child-image {
            height: 32%;
            width: 100%;
            overflow: hidden;
            border-radius: 0.3rem;
        }
        .image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 0.3rem;
            cursor: pointer;
        }
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        max-width: 100rem;
        margin: auto;

        .left-images {
            width: 14.1rem;
        }
        .child-image {
            height: 32%;
        }
        .image {
            width: 100%;
            object-fit: cover;
            border-radius: 0.3rem;
            cursor: pointer;
        }
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        max-width: 100%;

        .top-content {
            margin-top: 6rem;
        }
        .images-wrapper {
            flex-direction: column-reverse;
        }
        .left-images {
            scroll-snap-type: x mandatory;
            flex-direction: row;
            height: 12.7rem;
            width: 100%;
            flex-wrap: no-wrap;
            overflow-y: hidden;
            overflow-x: auto;
        }

        .child-image {
            height: 100%;
            width: 30%;
            /* height: 11rem; */
            flex-shrink: 0;
            margin-right: 1rem;
        }
        .name-product {
            font-size: 2.8rem;
        }
        .description-product {
            font-size: 1.5rem;
        }
        .image {
            width: 100%;
            height: 100%;
        }

        .right-images {
            height: 100%;
            width: 34.5rem;
            margin-left: 0;
            padding: 0 0 2rem 0;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        max-width: 100%;
        .top-content {
            margin-top: 3rem;
            flex-direction: column;
        }
        .images-wrapper {
            flex-direction: column-reverse;
        }
        .left-images {
            height: 12rem;
            width: 100%;
            flex-wrap: no-wrap;
            overflow-y: hidden;
            overflow-x: auto;
        }
        .child-image {
            width: 38%;
        }
        .right-images {
            height: 80%;
            width: 100%;
            margin-left: 0;
            padding: 0 0 2rem 0;
        }
        .information-wrapper {
            margin-left: 0.4rem;
            padding: 2rem 0 1rem 0;
        }
    }
`;

export const Style = {
    DescriptionProductWrapper: styled.div`
        width: 100%;
        background-color: #f9f8fe;
        margin-top: 11.4rem;
        padding: 10.9rem 0;
        .wrapper {
            width: 114rem;
            margin: auto;
        }
        .tabs {
            display: flex;
        }
        .tab-item {
            font-size: 2.4rem;
            line-height: 2.8rem;
            font-weight: 600;
            color: #151875;
            margin-right: 8.5rem;
        }
        .panel {
            margin-top: 6.1rem;
        }
        .panel-item {
        }
        .title {
            font-size: 2.2rem;
            line-height: 2.6rem;
            font-weight: 600;
            color: #151875;
            margin-top: 3.6rem;
        }
        .description {
            font-size: 1.6rem;
            line-height: 2.9rem;
            color: #a9acc6;
            margin-top: 1.4rem;
            span {
                color: #000;
            }
        }
        .more-details {
        }

        //laptop
        @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
            .wrapper {
                width: 89rem;
                margin: auto;
            }
        }

        @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
            .wrapper {
                width: 100rem;
                margin: auto;
            }
        }
        //tablet
        @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
            margin-top: 8.4rem;
            padding: 6.9rem 0;
            .wrapper {
                max-width: 100%;
                margin: auto;
                padding: 0 2rem;
            }
        }
        @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
            margin-top: 4rem;
            padding: 3rem 0;
            .tabs {
                display: flex;
                flex-wrap: nowrap;
                overflow-y: hidden;
                overflow-x: auto;
            }
            //scrollbar CSS
            .tabs::-webkit-scrollbar {
                border-radius: 0;
                width: 4px;
                height: 8px;
            }

            .tabs::-webkit-scrollbar-thumb {
                border-radius: 4px;
                background-color: transparent;
            }
            .tabs:hover::-webkit-scrollbar-thumb {
                border-radius: 4px;
                background-color: #ccc;
            }

            .tabs::-webkit-scrollbar-track {
                border-radius: 0;
                background-color: rgba(0, 0, 0, 0);
            }
            .tab-item {
                font-size: 2.2rem;
                line-height: 2.4rem;
                font-weight: 600;
                color: #151875;
                flex-shrink: 0;
                margin-right: 8.5rem;
            }
            .panel {
                margin-top: 2rem;
            }
            .title {
                margin-top: 2rem;
            }
            .description {
                font-size: 1.5rem;
            }
        }
    `,
    WrapperContent: styled.div``,
};

export const RelatedProductsWrapper = styled.div`
    width: 114rem;
    margin: auto;
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        width: 96rem;
        margin: auto;
    }

    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        width: 100rem;
        margin: auto;
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        width: 100%;
        margin: auto;
        padding: 0 1rem;
    }
`;
