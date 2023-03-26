export interface IProduct {
    id: number;
    name_product: string;
    type: string;
    sale: number;
    image_product: string;
    other_image?: string[];
    price_product: number;
    rate: number;
    description_product: string;
}

export interface IUser {
    id?: string;
    name?: string;
    username?: string;
    displayName?: string;
    accessToken?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
    website?: string;
    company?: string;
}

export interface IGetCart {
    product_id: number;
    number: number;
    color: string;
    size: string;
    sub_total: number;
}

export interface IInformationBuy {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    apartment: string;
    city: string;
    postalCode: string;
}

export interface ISliderProps {
    id: string;
    image_carousel: string;
    title_carousel: string;
    description_carousel: string;
}

export interface IBlogProps {
    id: string;
    title_blog: string;
    author_blog: string;
    time_release: string;
    image_blog: string;
    description_blog: string;
}
export interface IBodyLogin {
    email?: string;
    password?: string;
    onNavigate: () => void;
}

export interface IBodyRegister {
    name: string;
    email: string;
    password: string;
    displayName: string;
    id: string;
}

export interface IIconProps {
    width: string;
    height: string;
    className?: string;
    fill?: string;
}

export interface ILocation {
    hash: string;
    pathname: string;
    search: string;
    state: string;
}

export interface IFormInput {
    email: string;
    lastName: string;
    firstName: string;
    address: string;
    apartment: string;
    city: string;
    postalCode: string;
}
export interface IGetNotification {
    image: string;
    title: string;
    body: string;
    isReading: boolean;
    notification_id?: string;
}

export interface IGetAdDetail {
    id: number;
    heading: string;
    title: string;
    description: string;
    image_first: string;
    image_second: string;
    is_used: boolean;
}

export interface IGetPortfolios {
    id: number;
    name_portfolios: string;
    description_portfolios: string;
}

export interface IGetImage {
    id: number;
    image_product: string;
    product_id: number;
}
