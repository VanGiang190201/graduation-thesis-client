import * as React from 'react';
import styled from 'styled-components';
import * as productRequest from '../../api/productApi';
import Loading from '../../Components/Loading';
import { IProduct } from '../../Utils/interface';
import ResultItem from '../SearchResult/ResultItem';

interface IListProductProps {}

const Wrapper = styled.div`
    width: 100%;
    .container {
        max-width: 114rem;
        margin: 8rem auto;
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakTablet}) {
        .container {
            max-width: 100%;
            padding: 0 7rem;
        }
    }
    @media (max-width: ${(p) => p.theme.breakPoints.breakMobile}) {
        .container {
            max-width: 100%;
            padding: 0 3rem;
        }
    }
`;
const ListProduct: React.FunctionComponent<IListProductProps> = (props) => {
    const [listProduct, setListProduct] = React.useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    React.useEffect(() => {
        productRequest.getProducts().then((res) => {
            setIsLoading(false);
            setListProduct(res);
        });
    }, []);
    return isLoading ? (
        <Loading />
    ) : (
        <Wrapper>
            <div className="container">
                {listProduct?.map((item: IProduct) => (
                    <ResultItem id={item.id} key={item.id} />
                ))}
            </div>
        </Wrapper>
    );
};

export default ListProduct;
