import styled from 'styled-components';

const NavbarWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    .inner {
        max-width: 1140px;
        margin: auto;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .login-item {
        display: none;
    }
    .logo {
    }
    .logo-menu {
        display: none;
    }
    .app-logo {
        font-size: 3.4rem;
        line-height: 4rem;
        color: #0d0e43;
        font-weight: 600;
        cursor: pointer;
    }
    .menu {
        overflow-x: hidden;
        overflow-y: auto;
    }
    .top-menu {
        display: none;
    }
    .hide-btn {
        display: none;
    }
    .menu-item {
        margin-right: 3.5rem;
        font-size: 1.6rem;
        line-height: 2rem;
        font-family: 'lato';
        font-style: normal;
        font-weight: 600;
        text-decoration: none;
        color: #0d0e43;
    }
    .menu-item:hover {
        color: var(--primary-background-color-btn);
    }
    .home-icon,
    .page-icon,
    .blog-icon,
    .cart-icon,
    .about-icon,
    .list-icon {
        display: none;
    }
    .wish-list-item {
        display: none;
    }
    .cart-menu {
        display: none;
    }
    .like-list {
        display: none;
        margin-right: 0.7rem;
        text-decoration: none;
        position: relative;
    }
    .quantity-cart {
        position: absolute;
        background-color: #fff;
        width: 2rem;
        height: 2rem;
        right: -1.4rem;
        border-radius: 2rem;
        top: -1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        p {
            color: var(--primary-background-color-btn);
            font-size: 1.4rem;
            font-weight: 700;
            margin-top: 0.2rem;
            /* margin-left: 0.1rem; */
        }
    }

    .cart {
        display: none;
    }
    .user-interface {
        display: none;
    }
    .search {
    }

    .bar-option {
        display: none;
    }
    .overlay {
        display: none;
    }

    .logout-btn {
        display: none;
        width: 100%;
        height: 4rem;
        margin-top: 1.2rem;
        border: none;
        background-color: #fff;
        color: #383838;
        font-size: 1.7rem;
        font-weight: 700;
        margin-left: 0.4rem;
    }
    .logout-btn:hover {
        color: var(--primary-background-color-btn);
    }
    //responsive
    //desktop

    @media (max-width: ${(p) => p.theme.breakPoints.breakSmallDesktop}) {
        .inner {
            max-width: 100rem;
            margin: auto;
        }
    }
    //laptop
    @media (max-width: ${(p) => p.theme.breakPoints.breakLaptop}) {
        .inner {
            max-width: 89rem;
            margin: auto;
        }
    }

    //tablet
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .inner {
            max-width: 100%;
            padding: 0 7rem;
            flex-direction: row-reverse;
        }

        .inner > a {
            display: none;
        }

        .top-menu {
            display: flex;
            align-items: center;
            border-bottom: 1px solid #ccc;
            padding-bottom: 2rem;
            flex-direction: column-reverse;
        }

        .logo {
            display: none;
        }
        .logo-menu {
            display: block;
        }
        .menu {
            /* display: none; */
            height: 100%;
            background-color: #fff;
            position: fixed;
            z-index: 999;
            padding: 1rem 2rem;
            left: -30rem;
            top: 4.4rem;
            width: 28rem;
            transition: 0.2s linear;
        }
        .menu.show-menu {
            transform: translateX(30rem);
            box-shadow: 0 0 10px #fff;
        }
        .hide-btn {
            display: block;
            cursor: pointer;
            flex: 1;
        }
        .hide-btn:hover {
            color: var(--primary-background-color-btn);
        }
        .list-menu {
            margin: 3rem 0 0 4rem;
        }
        .menu-item {
            height: 4rem;
            display: flex;
            justify-content: space-between;
            margin: 0;
        }
        .home-icon,
        .page-icon,
        .blog-icon,
        .cart-icon,
        .about-icon,
        .list-icon {
            display: block;
            color: #909090;
        }
        .bar-option {
            display: block;
            cursor: pointer;
        }
        .overlay {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            opacity: 0.3;
            z-index: 998;
        }
    }

    //mobile

    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        border-bottom: 1px solid #ccc;
        .inner {
            max-width: 100%;
            padding: 0 3rem;
        }

        .cart {
            display: block;
        }
        .inner > a {
            display: block;
        }
        .menu {
            height: 100%;
            background-color: #fff;
            position: fixed;
            z-index: 999;
            padding: 1rem 2rem;
            right: -30rem;
            top: 0;
            width: 24rem;
            transition: 0.2s linear;
        }
        .menu.show-menu {
            transform: translateX(30rem);
            box-shadow: 0 0 10px #fff;
        }
        .search {
        }
        .user-interface {
            display: block;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .avatar {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            overflow: hidden;
            border-right: 1px solid #ccc;
            .user-image-login {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .user-name {
            border-right: 1px solid #ccc;
            padding: 0.2rem 1rem 0.2rem 0;
            margin-right: 1rem;
            color: var(--primary-background-color-btn);
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: 0.3s linear;
        }
        .bar-option {
            display: block;
            cursor: pointer;
        }
        .hide-btn {
            display: block;
            cursor: pointer;
        }
        .list-menu {
            margin: 2rem 0 0 2rem;
        }
        .menu-item {
            height: 3rem;
            display: flex;
            justify-content: space-between;
            margin: 0;
        }
        .wish-list-item {
            display: block;
            height: 6rem;
            display: flex;
            justify-content: space-between;
            margin: 0;
            font-size: 1.6rem;
            line-height: 2rem;
            font-family: 'lato';
            font-style: normal;
            font-weight: 600;
            text-decoration: none;
            color: #0d0e43;
        }
        .home-icon,
        .page-icon,
        .blog-icon,
        .cart-icon,
        .about-icon,
        .list-icon,
        .wish-list-icon {
            display: block;
            color: #909090;
        }

        .like-list {
            display: flex;
        }
        .cart-menu {
            display: block;
            border: 1px solid #909090;
            margin: 1rem 0 0 2rem;
            height: 4rem;
            border-radius: 0.4rem;
            text-decoration: none;
            div {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &:hover {
                background-color: #ccc;
            }
        }
        .cart {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.1rem;
            color: #909090;
            margin-right: 0.4rem;
        }
        .quantity {
            font-size: 1.8rem;
            font-weight: 600;
            line-height: 2.1rem;
            color: #909090;
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            opacity: 0.3;
            z-index: 998;
        }
        .list-menu {
            border-bottom: 1px solid #ccc;
        }
        .login-item {
            display: block;
            border: 1px solid #909090;
            margin: 1rem 0 0;
            height: 4rem;
            border-radius: 0.4rem;
            text-decoration: none;
            width: 100%;
            color: #868686;
            div {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &:hover {
                background-color: #ccc;
            }
        }
        .login-title {
            font-size: 1.8rem;
            font-weight: 600;
        }
        .logout-btn {
            display: flex;
            align-items: center;
            justify-content: center;

            .logout-icon {
                margin: 0 0.4rem 0.4rem 0;
            }
        }
    }
`;

export default NavbarWrapper;
