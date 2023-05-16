import * as React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import * as productRequest from '../../api/productApi';
import * as categoryRequest from '../../api/categoryApi';
import Loading from '../../Components/Loading';
import { IGetCategory, IProduct } from '../../Utils/interface';
import CategoryFilter from './CategoryFilter';
import ItemRender from './ItemRender';
import Image from '../../Components/Image';

interface IListProductProps {}

const ListProduct: React.FunctionComponent<IListProductProps> = (props) => {
    const [listProduct, setListProduct] = React.useState<IProduct[]>([]);
    const [listCategory, setListCategory] = React.useState<IGetCategory[]>([
        {
            id: 1,
            category_id: 1,
            name_categories: '',
            description_categories: '',
            image: '',
        },
    ]);
    const [currentCategory, setCurrentCateGory] = React.useState<number>(listCategory[0]?.id);
    const [categoryItem, setCateGoryItem] = React.useState<IGetCategory>();
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const location = useLocation();

    React.useEffect(() => {
        setIsLoading(false);
        categoryRequest.getListCategoryByPortfolios(location.state).then((res) => setListCategory(res));
    }, [location.state]);

    React.useEffect(() => {
        productRequest.getProductsOfCategory(currentCategory).then((res) => setListProduct(res));
        categoryRequest.getCategoryItem(currentCategory).then((res) => setCateGoryItem(res));
    }, [currentCategory]);

    console.log('category', categoryItem);
    return isLoading ? (
        <Loading />
    ) : (
        <Style.Wrapper>
            <div className="container">
                {categoryItem?.image && (
                    <Style.Banner>
                        <Image src={categoryItem.image} alt={categoryItem.name_categories} className="banner" />
                    </Style.Banner>
                )}
                <Style.Content>
                    <Style.Filter>
                        <CategoryFilter listCategory={listCategory} setCurrentCategory={setCurrentCateGory} />
                    </Style.Filter>
                    <Style.List>
                        <ItemRender listProduct={listProduct} />
                    </Style.List>
                </Style.Content>
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
            flex-direction: column;
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
    Banner: styled.div`
        height: 24rem;
        overflow: hidden;
        .banner {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    `,
    Content: styled.div`
        display: flex;
        gap: 24px;
    `,
};
export default ListProduct;
