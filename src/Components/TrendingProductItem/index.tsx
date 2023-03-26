import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { StarIcon } from '../Icons';
import Image from '../Image';
import { IProduct } from '../../Utils/interface';
import Wrapper from './TrendingProductItem.style';
import { Text } from '../Text';
interface ITrendingProductItemProps {
    data: IProduct;
    related?: boolean;
}

const TrendingProductItem: React.FunctionComponent<ITrendingProductItemProps> = (props) => {
    const { data, related } = props;
    const navigate = useNavigate();
    const handleViewDetail = () => {
        navigate(`/product-detail/${data.id}`, { state: data.id });
    };

    const showRateStar = () => {
        let listStar = [];
        for (let i = 0; i < data?.rate; i++) {
            listStar.push(i);
        }
        return listStar;
    };

    const showUnRateStar = () => {
        let listUnRate = [];
        for (let i = 0; i < 5 - showRateStar().length; i++) {
            listUnRate.push(i);
        }
        return listUnRate;
    };
    return (
        <Wrapper>
            <div onClick={handleViewDetail}>
                <div className="image-wrapper">
                    <Image src={data.image_product} alt="" className="image" />
                </div>
                {related ? (
                    <div className="information">
                        <div className="detail">
                            <Text textOfLine={2} className="name-product-related">
                                {data.name_product}
                            </Text>
                            {showRateStar().map((star: number) => (
                                <StarIcon width="1.4rem" height="1.4rem" className="star-light" key={star} />
                            ))}

                            {showUnRateStar().map((star: number) => (
                                <StarIcon width="1.4rem" height="1.4rem" className="star" key={star} />
                            ))}
                        </div>
                        <p className="price-product-related">{`$ ${data.price_product.toFixed(2)}`}</p>
                    </div>
                ) : (
                    <div className="information">
                        <Text textOfLine={2} className="name-product">
                            {data.name_product}
                        </Text>
                        <div className="price">
                            <p className="sale-price">{`$ ${(
                                data.price_product -
                                (data.price_product * data.sale) / 100
                            ).toFixed(2)}`}</p>
                            <p className="normal-price">{`$ ${data.price_product.toFixed(2)}`}</p>
                        </div>
                    </div>
                )}
            </div>
        </Wrapper>
    );
};

export default TrendingProductItem;
