import * as React from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../reudux/hook';
import { IGetNotification } from '../../Utils/interface';
import Image from '../Image';
import { Text } from '../Text';
import * as notificationRequest from '../../api/notificationApi';
import { useAppDisPatch } from '../../reudux/hook';
import { isReadingNotification } from '../../reudux/feature/notificationSlide';
interface INotificationProps {
    data: IGetNotification;
}

const Wrapper = styled.div`
    margin-top: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    cursor: pointer;
    border-radius: 0.4rem;
    .notification-item {
        background-color: #e6e6e6;
        min-height: 7rem;
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        gap: 1rem;
        &:hover {
            background-color: #ccc;
        }
        &:active {
            background-color: #e6e6e6;
        }
    }
    .isRead {
        background-color: #ffffff;
        border-bottom: 1px solid #e6e6e6;
    }
    .left-content {
        width: 5rem;
        height: 5rem;
        overflow: hidden;
        border-radius: 50%;
        flex-shrink: 0;
    }
    .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .center-content {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
    .title {
        font-family: 'Lato';
        font-size: 1.5rem;
        font-weight: 600;
    }
    .body {
        font-size: 1.4rem;
        font-family: 'Lato';
        color: #666;
    }

    .right-content {
        position: relative;
    }
    //more wrapper
    .more-popup {
        width: 8rem;
        height: 6rem;
        background-color: #000;
        position: absolute;
    }
    .more-icon {
        color: #000;
    }
`;
const Notification: React.FunctionComponent<INotificationProps> = (props) => {
    const { data } = props;
    const currentUser: any = useAppSelector((state) => state.persistedReducer.auth.dataUser);
    const notificationList = useAppSelector((state) => state.persistedReducer.notification.listNotification);
    const dispatch = useAppDisPatch();
    const handleReadNotification = () => {
        const otherNotificationList = notificationList.filter(
            (notification) => notification.notification_id !== data.notification_id,
        );
        const notificationWasRead = {
            notification_id: data.notification_id,
            title: data.title,
            body: data.body,
            image: data.image,
            isReading: true,
        };
        if (data.isReading == false) {
            notificationRequest.getListNotificationByUserId(currentUser.id).then((res) => {
                dispatch(
                    isReadingNotification({
                        id: res[0].id,
                        user_id: currentUser.id,
                        notification: [...otherNotificationList, notificationWasRead],
                    }),
                );
            });
        }
    };
    return (
        <Wrapper>
            <div
                className={`notification-item ${data.isReading === true ? 'isRead' : ''}`}
                onClick={handleReadNotification}
            >
                <div className="left-content">
                    <Image src={data.image} alt={data.title} className="image" />
                </div>
                <div className="center-content">
                    <Text textOfLine={1} className="title">
                        {data.title}
                    </Text>
                    <Text textOfLine={2} className="body">
                        {data.body}
                    </Text>
                </div>
            </div>
        </Wrapper>
    );
};

export default Notification;
