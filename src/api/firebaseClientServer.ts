import axios from "axios"
const firebaseClient = axios.create({
    baseURL: "https://fcm.googleapis.com/fcm",
    headers: {
        Authorization: "key=AAAAqBSRkd4:APA91bGN2RDBSYQbqj9DQvYOGgwHDZzdwueemSkzOkUl7TpBUosFWjqDkl37FWkuBmCHX-PkbMIsOVDii7J1nQ7DL7P8vQZL5umx1NzJ5mI-jApgZT0rYlHUzEQWn2Wo1qkdjkv41nNA",
        sender: "721899590110"
    }
})

export default firebaseClient;

