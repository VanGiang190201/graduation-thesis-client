import * as React from 'react';
import { trendingBanner } from '../../../assets/images';
import Button from '../../../Components/Button';
import Image from '../../../Components/Image';
import Wrapper from './TrendingBanner.style';
import { Text } from '../../../Components/Text';
import * as productRequest from '../../../api/productApi';
import { IProduct } from '../../../Utils/interface';
import { useNavigate } from 'react-router-dom';

interface ITrendingBannerProps {}

const TrendingBanner: React.FunctionComponent<ITrendingBannerProps> = (props) => {
    const [products, setProducts] = React.useState<IProduct[]>([]);
    const [product, setProduct] = React.useState<IProduct>(products[0]);
    const navigate = useNavigate();

    React.useEffect(() => {
        productRequest.getProducts().then((res) => {
            setProducts(res);
            setProduct(res[0]);
        });
    }, []);

    const randomProduct = () => {
        const randomIndex = Math.floor(Math.random() * products.length);
        return products[randomIndex];
    };

    setInterval(() => {
        setProduct(randomProduct());
    }, 6 * 60 * 1000);

    const handleViewProductDetail = () => {
        navigate(`/products/${product.id}`, { state: product.id });
    };

    return (
        <Wrapper>
            <div className="left-content">
                <Image src={product?.image_product} alt="" className="image-product" />
            </div>
            <div className="right-content">
                <Text textOfLine={2} className="title">
                    Xem sản phẩm thịnh hành nhất
                </Text>
                <div className="description">
                    <Text textOfLine={4} className="title">
                        <div dangerouslySetInnerHTML={{ __html: product?.description_product ?? '' }} />
                    </Text>
                </div>
                <div className="active">
                    <Button className="add-btn" onClick={handleViewProductDetail}>
                        {' '}
                        Xem sản phẩm
                    </Button>
                    <div className="information_product">
                        <Text textOfLine={1} className="name">
                            {product?.name_product}
                        </Text>
                        <p className="price">
                            {Number(product?.price_product).toLocaleString('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            })}{' '}
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default TrendingBanner;
