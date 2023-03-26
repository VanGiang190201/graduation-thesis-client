import * as React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, PenIcon } from '../Icons';
import Image from '../Image';
import { Text } from '../Text';

import Wrapper from './LatestBlogItem.style';
interface ILatestBlogItemProps {
    data: {
        id: string;
        title_blog: string;
        author_blog: string;
        time_release: string;
        image_blog: string;
        description_blog: string;
    };
}

const LatestBlogItem: React.FunctionComponent<ILatestBlogItemProps> = (props) => {
    const { data } = props;
    return (
        <Wrapper>
            <div className="top-blog">
                <Image src={data?.image_blog} alt={data?.title_blog} className="image" />
            </div>
            <div className="bottom-blog">
                <div className="information-blog">
                    <div className="left-content">
                        <PenIcon width="2rem" height="2rem" className="pen-icon" />
                        <Text textOfLine={1} className="author">
                            {data?.author_blog}
                        </Text>
                    </div>
                    <div className="right-content">
                        <CalendarIcon width="2rem" height="2rem" className="calendar-icon" />
                        <Text textOfLine={1} className="time">
                            {data.time_release}
                        </Text>
                    </div>
                </div>
                <div className="content-blog">
                    <Text textOfLine={2} className="title-blog">
                        {data.title_blog}
                    </Text>
                    <Text className="description-blog" textOfLine={3}>
                        {data?.description_blog}
                    </Text>
                </div>

                <Link to="" className="read-more">
                    Read More
                </Link>
            </div>
        </Wrapper>
    );
};

export default LatestBlogItem;
