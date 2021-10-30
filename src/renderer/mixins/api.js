import axios from "axios";
export default axios.create({
    baseURL: `http://cdn.safarexpress.uz/api/`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "123",
    },
});
