import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TopContent from './TopContent';
import { RelatedProductsWrapper, Wrapper } from './ProductDetail.style';
import DescriptionProduct from './DescriptionProduct';
import ListProduct from '../../Components/ListProduct';
import TrendingProductItem from '../../Components/TrendingProductItem';
import * as productRequest from '../../api/productApi';
import Image from '../../Components/Image';
import { logoImage } from '../../assets/images';
import { IProduct } from '../../Utils/interface';
import Loading from '../../Components/Loading';
import ScrollToComponent from '../../Components/ScrollToComponent';

const ProductDetail: React.FunctionComponent<IProduct> = (props) => {
    const location = useLocation();
    const [detailProduct, setDetailProduct] = useState<IProduct>({
        id: 0,
        name_product: '',
        type: '',
        sale: 1,
        image_product: '',
        price_product: 1,
        rate: 1,
        description_product: '',
    });
    const [relatedProduct, setRelatedProduct] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    console.log(detailProduct);

    useEffect(() => {
        const idProduct = location.state;
        productRequest.getProductById(idProduct).then((res) => {
            setIsLoading(false);
            setDetailProduct(res[0]);
        });
    }, [location.state]);

    useEffect(() => {
        productRequest.getProducts().then((res) => {
            const relatedProduct = res.filter((item: IProduct) => item.type === 'Trending Products');
            setRelatedProduct(relatedProduct);
        });
    }, []);

    return isLoading ? (
        <Loading />
    ) : (
        <ScrollToComponent>
            <Wrapper>
                <div className="container">
                    <TopContent data={detailProduct} />

                    <DescriptionProduct />
                    {/* Reusing trending product item from home page */}
                    <RelatedProductsWrapper>
                        <ListProduct title="Related Products" related={true}>
                            {relatedProduct.map((item, index) => (
                                <TrendingProductItem data={item} key={index} related={true} />
                            ))}
                        </ListProduct>
                    </RelatedProductsWrapper>
                    <div className="bottom-content">
                        <Image src={logoImage} alt="" className="image" />
                    </div>
                </div>
            </Wrapper>
        </ScrollToComponent>
    );
};

export default ProductDetail;
