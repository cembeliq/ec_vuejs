import axios from "axios";
console.log(process.env.API_URL);
export default axios.create({
    baseURL: "https://cembeliq.com:4433/api",
    headers: {
        "Content-type": "application/json"
    }
});
