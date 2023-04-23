import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { IBlogProps } from '../../../Utils/interface';
import * as blogRequest from '../../../api/blogApi';
import LatestBlogItem from '../../../Components/LatestBlogItem';
import { Text } from '../../../Components/Text';
interface ListBlogProps {}

const ListBlog: React.FunctionComponent<ListBlogProps> = () => {
    const [blogs, setBlogs] = useState<IBlogProps[]>([]);
    useEffect(() => {
        blogRequest.getBlogs().then((res) => {
            setBlogs(res);
        });
    }, []);

    console.log(blogs);

    const settings = {
        dots: false,
        infinite: blogs?.length < 3 ? false : true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipeToSlide: true,
        styles: {
            backgroundColor: 'transparent',
        },
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    arrows: true,
                    dots: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    dots: false,
                },
            },
        ],
    };
    return (
        <Style.Wrapper>
            <Text textOfLine={1} className="title">
                Latest Blog
            </Text>
            <Slider {...settings}>
                {blogs?.map((item: IBlogProps, index: number) => {
                    return <LatestBlogItem data={item} key={index} />;
                })}
            </Slider>
        </Style.Wrapper>
    );
};

const Style = {
    Wrapper: styled.div`
        .title {
            text-align: center;
            font-size: 4rem;
            line-height: 5rem;
            color: #2b2f32;
            font-weight: 600;
            margin-bottom: 2rem;
        }
    `,
};
export default ListBlog;
