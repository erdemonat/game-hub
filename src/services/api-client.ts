import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f7fd68258bc44dd2a3504a8c1d6d8426'
    }
})