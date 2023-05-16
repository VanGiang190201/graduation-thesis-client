import config from '../config';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';
import SearchResult from '../Pages/SearchResult';
import OrderCompleted from '../Pages/OrderCompleted';
import Payment from '../Pages/Payment';
import Cart from '../Pages/Cart';
import AboutUs from '../Pages/AboutUs';
import NotFound from '../Pages/NotFound';
import Login from '../Pages/Login';
import ListProduct from '../Pages/ListProduct';
import Register from '../Pages/Register';
import WishList from '../Pages/WishList';
import Blog from '../Pages/Blog';
import BookView from '../Pages/BookView';
import Order from '../Pages/Order';
import ForgotPassword from '../Pages/ForgotPassword';
import Profile from '../Pages/Profile';
import BlogDetail from '../Pages/BlogDetail';

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
        component: ProductDetail,
    },

    {
        path: config.aboutUs,
        component: AboutUs,
    },
    {
        path: config.notFound,
        component: NotFound,
    },
    {
        path: config.listProduct,
        component: ListProduct,
    },
    {
        path: config.blog,
        component: Blog,
    },
    {
        path: config.bookView,
        component: BookView,
    },
    {
        path: config.order,
        component: Order,
    },
    {
        path: config.profile,
        component: Profile,
    },
    {
        path: config.detailBlog,
        component: BlogDetail,
    },
];

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
        component: ProductDetail,
    },

    {
        path: config.aboutUs,
        component: AboutUs,
    },
    {
        path: config.blog,
        component: Blog,
    },
    {
        path: config.notFound,
        component: NotFound,
    },
    {
        path: config.listProduct,
        component: ListProduct,
    },
    {
        path: config.cart,
        component: Cart,
    },
    {
        path: config.payment,
        component: Payment,
    },
    {
        path: config.orderCompleted,
        component: OrderCompleted,
    },
    {
        path: config.wishList,
        component: WishList,
    },
    {
        path: config.bookView,
        component: BookView,
    },
    {
        path: config.order,
        component: Order,
    },
    {
        path: config.profile,
        component: Profile,
    },
    {
        path: config.detailBlog,
        component: BlogDetail,
    },
];

export const BlockRoute = [
    {
        path: config.login,
        component: Login,
    },
    {
        path: config.register,
        component: Register,
    },
    {
        path: config.forgot,
        component: ForgotPassword,
    },
];
