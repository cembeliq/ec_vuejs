import axios from "axios";

export default axios.create({
    baseURL: "http://172.17.0.3:8082/api",
    headers: {
        "Content-type": "application/json"
    }
});