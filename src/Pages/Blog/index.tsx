import styled from 'styled-components';
import { useState, useEffect } from 'react';

import * as blogRequest from '../../api/blogApi';
import LatestBlogItem from '../../Components/LatestBlogItem';
import { IBlogProps } from '../../Utils/interface';
import { List } from 'antd';
import Image from '../../Components/Image';
interface BlogProps {}

const Blog: React.FunctionComponent<BlogProps> = () => {
    const [blogs, setBlogs] = useState<IBlogProps[]>([]);
    useEffect(() => {
        blogRequest.getBlogs().then((res) => {
            setBlogs(res);
        });
    }, []);
    return (
        <Style.Wrapper>
            <Style.Banner>
                <Image
                    src="https://rcong.vn/wp-content/uploads/2021/12/banner-3x_auto_x2-scaled.jpg"
                    alt=""
                    className="image"
                />
            </Style.Banner>
            <List
                style={{ marginTop: '3rem' }}
                grid={{ gutter: 16, column: 3 }}
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 9,
                }}
                dataSource={blogs}
                renderItem={(item) => <LatestBlogItem data={item} />}
            />
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        max-width: 114rem;
        margin: 3rem auto;
        .ant-row {
            margin-left: 0 !important;
        }
    `,
    Banner: styled.div`
        height: 36rem;
        width: 100%;
        overflow: hidden;
        .image {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    `,
};
export default Blog;
