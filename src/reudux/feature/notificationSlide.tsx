import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as notificationRequest from '../../api/notificationApi';

const initialState = {
    listNotification: [
        {
            notification_id: '',
            image: '',
            title: '',
            body: '',
            isReading: false,
        },
    ],
    tokenNotification: '',
};

export const loadNotification = createAsyncThunk('notifications/load-notification', async (id: string, thunkAPI) => {
    try {
        if (id !== undefined) {
            const notificationList = await notificationRequest.getListNotificationByUserId(id);
            return notificationList.length > 0 ? notificationList[0].notification : notificationList;
        }
        return [{}];
    } catch (error) {
        thunkAPI.rejectWithValue(error);
    }
});

export const addNewNotification = createAsyncThunk(
    'notifications/add-new-notification',
    async (data: object, thunkAPI) => {
        try {
            const { id, ...newNotificationList }: any = data;
            const notificationList = await notificationRequest.addNewNotification(newNotificationList, id);
            return notificationList.notification;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    },
);
export const isReadingNotification = createAsyncThunk(
    'notifications/reading-notification',
    async (data: object, thunkAPI) => {
        try {
            const { id, ...newNotificationList }: any = data;
            const notificationList = await notificationRequest.isReadingNotification(newNotificationList, id);
            return notificationList.notification;
        } catch (error) {
            thunkAPI.rejectWithValue(error);
        }
    },
);
export const notificationSlide = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setTokenNotification: (state, action) => {
            state.tokenNotification = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadNotification.fulfilled, (state, action) => {
            state.listNotification = action.payload;
        });
        builder.addCase(addNewNotification.fulfilled, (state, action) => {
            state.listNotification = action.payload;
        });
        builder.addCase(isReadingNotification.fulfilled, (state, action) => {
            state.listNotification = action.payload;
        });
    },
});

export default notificationSlide.reducer;
