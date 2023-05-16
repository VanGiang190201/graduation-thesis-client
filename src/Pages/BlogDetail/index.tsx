import styled from 'styled-components';
import { useState, useEffect } from 'react';

import * as blogRequest from '../../api/blogApi';
import { IBlogProps } from '../../Utils/interface';
import Image from '../../Components/Image';
import { useLocation } from 'react-router-dom';
import { CalendarIcon, PenIcon } from '../../Components/Icons';
import { Text } from '../../Components/Text';
interface BlogDetailProps {}

const BlogDetail: React.FunctionComponent<BlogDetailProps> = () => {
    const [blog, setBlog] = useState<IBlogProps>();

    const location = useLocation();

    useEffect(() => {
        blogRequest.getBlog(location.state).then((res) => {
            setBlog(res);
        });
    }, [location.state]);
    return (
        <Style.Wrapper>
            <Style.Banner>
                <Image src={blog?.image_blog} alt="" className="image" />
            </Style.Banner>
            <Style.Author>
                <div className="left-content">
                    <PenIcon width="2rem" height="2rem" className="pen-icon" />
                    <Text textOfLine={1} className="author">
                        {blog?.author_blog}
                    </Text>
                </div>
                <div className="right-content">
                    <CalendarIcon width="2rem" height="2rem" className="calendar-icon" />
                    <Text textOfLine={1} className="time">
                        {blog?.time_release}
                    </Text>
                </div>
            </Style.Author>
            <Style.Title>
                <h2>{blog?.title_blog}</h2>
            </Style.Title>
            <Style.Content>
                <div dangerouslySetInnerHTML={{ __html: blog?.description_blog ?? '' }} />
            </Style.Content>
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
    Title: styled.div`
        text-align: center;
    `,
    Content: styled.div`
        margin-top: 3rem;
    `,
    Author: styled.div`
        display: flex;
        align-items: center;
        margin-top: 2rem;
        .left-content {
            display: flex;
            max-width: 50%;
            align-items: center;
        }
        .right-content {
            display: flex;
            max-width: 50%;
            align-items: center;
        }
        .pen-icon {
            margin: -0.5rem 0.76rem 0 0;
            width: 1.4rem;
            height: 1.4rem;
            flex-shrink: 0;
        }

        .author {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.6rem;
            color: #151875;
            margin-right: 1.7rem;
        }

        .calendar-icon {
            margin: -0.5rem 0.76rem 0 0;
            width: 1.4rem;
            height: 1.4rem;
            flex-shrink: 0;
        }

        .time {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 1.6rem;
            color: #151875;
        }
    `,
};
export default BlogDetail;
