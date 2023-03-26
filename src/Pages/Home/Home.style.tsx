import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    .container {
        width: 100%;
    }
    .banner-wrapper {
        width: 100%;
        min-height: 62rem;
        margin-top: 12.2rem;
        background-color: #f2f0ff;
    }

    .feature-product-wrapper {
        width: 114rem;
        margin: auto;
    }
    //Latest list product

    .latest-product-wrapper {
        width: 114rem;
        margin: auto;
    }

    //features offer
    .wrapper-offer {
        width: 114rem;
        margin: auto;
    }

    //trending banner
    .wrapper-trending-banner {
        margin-top: 13rem;
        min-height: 57rem;
        width: 100%;
        background-color: #f1f0ff;
        margin-bottom: 10rem;
    }
    //trending product list

    .trending-product-wrapper {
        width: 114rem;
        margin: auto;
    }

    //Background Image
    .bg-image {
    }

    //Logo bottom image
    .logo-bottom {
        width: 90.4rem;
        margin: 7.6rem auto;
    }

    // Latest Blog
    .wrapper-blogs {
        width: 114rem;
        margin: auto;
        padding-bottom: 11.5rem;
    }

    //responsive
    //laptop
    //responsive
    //desktop
    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .feature-product-wrapper {
            width: 100rem;
            margin: auto;
        }
        //Latest list product

        .latest-product-wrapper {
            width: 100rem;
            margin: auto;
        }

        //features offer
        .wrapper-offer {
            width: 100rem;
            margin: auto;
        }
        .trending-product-wrapper {
            width: 100rem;
            margin: auto;
        }
        // Latest Blog
        .wrapper-blogs {
            width: 100rem;
            margin: auto;
            padding-bottom: 11.5rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .feature-product-wrapper {
            width: 100rem;
            margin: auto;
        }
        //Latest list product

        .latest-product-wrapper {
            width: 100rem;
            margin: auto;
        }

        //features offer
        .wrapper-offer {
            width: 100rem;
            margin: auto;
        }
        .trending-product-wrapper {
            width: 100rem;
            margin: auto;
        }
        // Latest Blog
        .wrapper-blogs {
            width: 100rem;
            margin: auto;
            padding-bottom: 11.5rem;
        }
    }
    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .banner-wrapper {
            margin-top: 12.8rem;
            background-color: #f2f0ff;
            min-height: 52rem;
        }
        .feature-product-wrapper {
            max-width: 100%;
            margin: auto;
            padding: 0 7rem;
        }
        //Latest list product

        .latest-product-wrapper {
            width: 100%;
            margin: auto;
            padding: 0 7rem;
        }
        //trending banner
        .wrapper-trending-banner {
            min-height: 54rem;
        }

        //features offer
        .wrapper-offer {
            width: 100%;
            margin: auto;
            padding: 0 7rem;
        }
        .trending-product-wrapper {
            width: 100%;
            margin: auto;
            padding: 0 7rem;
        }
        //Logo bottom image
        .logo-bottom {
            max-width: 100%;
            margin: 5.6rem auto;
            /* overflow: hidden; */

            .image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        // Latest Blog
        .wrapper-blogs {
            width: 100%;
            margin: auto;
            padding: 0 7rem;
            margin-bottom: 11.5rem;
        }
        .logo-bottom {
            width: 100%;
            margin: 7.6rem auto;
            padding: 0 7rem;
        }
    }

    //mobile
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .banner-wrapper {
            margin-top: 6.4rem;
            background-color: #f2f0ff;
            min-height: 20rem;
        }
        .feature-product-wrapper {
            max-width: 100%;
            margin: 1rem auto 0;
            padding: 0 3rem;
        }
        .latest-product-wrapper {
            width: 100%;
            margin: auto;
            padding: 0 3rem;
        }
        .wrapper-trending-banner {
            min-height: 46rem;
            margin: 4rem 0 4rem 0;
        }
        //Get latest area
        .get-latest {
            margin-top: 3.8rem;
            max-width: 100%;
            padding: 1rem 3rem;
            .title {
                font-size: 2.5rem;
                line-height: 100%;
                text-align: center;
                letter-spacing: 0.01em;
                color: #151875;
                font-weight: 600;
            }
        }
        .trending-product-wrapper {
            max-width: 100%;
            padding: 0 3rem;
        }

        .logo-bottom {
            max-width: 100%;
            padding: 0 3rem;
            margin: 2rem auto;
        }
        .wrapper-offer {
            width: 100%;
            margin: auto;
            padding: 0 3rem;
        }
        .wrapper-blogs {
            max-width: 100%;
            margin: auto;
            padding: 0 3rem 1.2rem;
        }
        .get-latest {
            margin-bottom: 2rem;
        }
        .shop-now-btn {
            width: 12.3rem;
            font-size: 1.4rem;
        }
    }
`;
export default Wrapper;
