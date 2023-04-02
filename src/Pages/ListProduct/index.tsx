import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import * as productRequest from '../../api/productApi';
import * as categoryRequest from '../../api/categoryAPI';
import Loading from '../../Components/Loading';
import { IGetCategory, IProduct } from '../../Utils/interface';
import CategoryFilter from './CategoryFilter';
import ItemRender from './ItemRender';

interface IListProductProps {}

const ListProduct: React.FunctionComponent<IListProductProps> = (props) => {
    const [listProduct, setListProduct] = React.useState<IProduct[]>([]);
    const [listCategory, setListCategory] = React.useState<IGetCategory[]>([
        {
            id: 1,
            category_id: 1,
            name_categories: '',
            description_categories: '',
        },
    ]);
    const [currentCategory, setCurrentCateGory] = React.useState<number>(listCategory[0].id);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const location = useLocation();

    React.useEffect(() => {
        setIsLoading(false);
        categoryRequest.getListCategoryByPortfolios(location.state).then((res) => setListCategory(res));
    }, [location.state]);

    React.useEffect(() => {
        productRequest.getProductsOfCategory(currentCategory).then((res) => setListProduct(res));
    }, [currentCategory]);

    console.log('Product', listProduct);
    return isLoading ? (
        <Loading />
    ) : (
        <Style.Wrapper>
            <div className="container">
                <Style.Filter>
                    <CategoryFilter listCategory={listCategory} setCurrentCategory={setCurrentCateGory} />
                </Style.Filter>
                <Style.List>
                    <ItemRender listProduct={listProduct} />
                </Style.List>
            </div>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        width: 100%;
        .container {
            max-width: 114rem;
            margin: 8rem auto;
            display: flex;
            gap: 24px;
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
    `,
    Filter: styled.div`
        flex: 1;
    `,
    List: styled.div`
        flex: 5;
    `,
};
export default ListProduct;
