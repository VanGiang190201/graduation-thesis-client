
import config from "../config"
import Home from "../Pages/Home"
import ProductDetail from "../Pages/ProductDetail"
import SearchResult from "../Pages/SearchResult"
import OrderCompleted from "../Pages/OrderCompleted"
import Payment from "../Pages/Payment"
import Cart from "../Pages/Cart"
import AboutUs from "../Pages/AboutUs"
import NotFound from "../Pages/NotFound"
import Login from "../Pages/Login"
import ListProduct from "../Pages/ListProduct"
import Register from "../Pages/Register"
import WishList from "../Pages/WishList"

export const publicRoutes = [
    {
        path: config.home,
        component: Home,
    },
    {
        path: config.searchResult,
        component: SearchResult,
    },
    {
        path: config.productDetail,
        component: ProductDetail
    },

    {
        path: config.aboutUs,
        component: AboutUs
    },
    {
        path: config.notFound,
        component: NotFound
    },
    {
        path: config.listProduct,
        component: ListProduct
    }
]

export const privateRoutes = [
    {
        path: config.home,
        component: Home,
    },
    {
        path: config.searchResult,
        component: SearchResult,
    },
    {
        path: config.productDetail,
        component: ProductDetail
    },

    {
        path: config.aboutUs,
        component: AboutUs
    },
    {
        path: config.notFound,
        component: NotFound
    },
    {
        path: config.listProduct,
        component: ListProduct
    },
    {
        path: config.cart,
        component: Cart
    },
    {
        path: config.payment,
        component: Payment
    },
    {
        path: config.orderCompleted,
        component: OrderCompleted
    }, {
        path: config.wishList,
        component: WishList
    }
]

export const BlockRoute = [
    {
        path: config.login,
        component: Login,
    },
    {
        path: config.register,
        component: Register,
    }
]


