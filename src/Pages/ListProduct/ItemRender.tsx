import styled from 'styled-components';
import React from 'react';
import { List } from 'antd';
import { IProduct } from '../../Utils/interface';
import FeatureProductItem from '../../Components/FeatureProductItem';
interface ItemRenderProps {
    listProduct: IProduct[];
}

const ItemRender: React.FunctionComponent<ItemRenderProps> = (props) => {
    const { listProduct } = props;

    return (
        <Style.Wrapper>
            <List
                grid={{ gutter: 16, column: 3 }}
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 9,
                }}
                dataSource={listProduct}
                renderItem={(item) => <FeatureProductItem data={item} />}
            />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div``,
};
export default ItemRender;
