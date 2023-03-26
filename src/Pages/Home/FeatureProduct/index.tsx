import styled from 'styled-components';
import { Tabs } from 'antd';
import { Text } from '../../../Components/Text';
import FeatureProductList from './FeatureProductList';
import { IGetPortfolios } from '../../../Utils/interface';
interface FeatureProductProps {
    data: IGetPortfolios[];
}

const FeatureProduct: React.FunctionComponent<FeatureProductProps> = (props) => {
    const { data } = props;
    return (
        <Style.Wrapper>
            <Style.Header>
                <Text className="title" textOfLine={1}>
                    FEATURED PRODUCTS
                </Text>
                <Text className="description" textOfLine={2}>
                    Wanna shine with the most outstanding outfits? Let’s see our featured products and choose the best
                    choice for you
                </Text>
            </Style.Header>
            <Style.WrapperContent>
                <Tabs
                    defaultActiveKey="1"
                    centered
                    items={data?.map((item: IGetPortfolios, index: number) => {
                        return {
                            label: item.name_portfolios,
                            key: item.name_portfolios,
                            children: <FeatureProductList id={item.id} />,
                        };
                    })}
                />
            </Style.WrapperContent>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        width: 114rem;
        margin: 6rem auto 4rem;
    `,
    Header: styled.div`
        max-width: 50rem;
        margin: auto;
        text-align: center;
        .title {
            font-size: 3.2rem;
            font-weight: 700;
            line-height: 4rem;
            color: #2b2f32;
        }
        .description {
            font-weight: 300;
            font-size: 1.6rem;
            line-height: 140%;
            color: #55585a;
            margin-top: 1rem;
        }
    `,
    WrapperContent: styled.div`
        margin-top: 5.2rem;
        .ant-tabs-tab-btn {
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            line-height: 140%;
        }
    `,
};
export default FeatureProduct;
