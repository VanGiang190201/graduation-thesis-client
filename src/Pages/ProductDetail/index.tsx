import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import TopContent from './TopContent';
import { Wrapper } from './ProductDetail.style';
import DescriptionProduct from './DescriptionProduct';
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
        sale: 0,
        image_product: '',
        price_product: 0,
        rate: 0,
        description_product: '',
        category_id: 0,
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    console.log(detailProduct);

    useEffect(() => {
        const idProduct = location.state;
        productRequest.getProductById(idProduct).then((res) => {
            setIsLoading(false);
            setDetailProduct(res[0]);
        });
    }, [location.state]);

    return isLoading ? (
        <Loading />
    ) : (
        <ScrollToComponent>
            <Wrapper>
                <div className="container">
                    <TopContent data={detailProduct} />

                    <DescriptionProduct data={detailProduct} />
                    {/* Reusing trending product item from home page */}
                    <div className="bottom-content">
                        <Image src={logoImage} alt="" className="image" />
                    </div>
                </div>
            </Wrapper>
        </ScrollToComponent>
    );
};

export default ProductDetail;
