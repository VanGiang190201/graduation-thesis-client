import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';
import { IGetCategory } from '../../Utils/interface';
import { useLocation } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
interface CategoryFilterProps {
    listCategory: IGetCategory[];
    setCurrentCategory: any;
}

const CategoryFilter: React.FunctionComponent<CategoryFilterProps> = (props) => {
    const { listCategory, setCurrentCategory } = props;
    const location = useLocation();
    const [theme, setTheme] = useState<MenuTheme>('light');
    const [current, setCurrent] = useState(listCategory[0].id.toString());
    useEffect(() => {
        setCurrent(listCategory[0].id.toString());
        setCurrentCategory(listCategory[0].id);
    }, [location.state, listCategory]);

    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: any = listCategory?.map((category: IGetCategory) => {
        return getItem(category.name_categories, category.id);
    });
    const changeTheme = (value: boolean) => {
        setTheme(value ? 'dark' : 'light');
    };

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
        setCurrentCategory(Number(e.key));
    };
    return (
        <Style.Wrapper>
            <Style.Header>
                <h3 style={{ textTransform: 'uppercase', color: '#2B2F32', fontSize: '1.6rem' }}>Category Product</h3>
                <Switch
                    checked={theme === 'dark'}
                    onChange={changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                    style={{ marginBottom: '20px' }}
                />
            </Style.Header>
            <Menu
                theme={theme}
                onClick={onClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={items}
            />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div``,
    Header: styled.div`
        display: flex;
        justify-content: space-between;
        padding: 0 0.8rem;
    `,
};

export default CategoryFilter;
