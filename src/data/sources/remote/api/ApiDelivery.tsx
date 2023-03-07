import axios from "axios";
import { LocalStorage } from "../../local/LocalStorage";
import { User } from '../../../../domain/entities/User';

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.0.4:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
});

const ApiDeliveryWithImage = axios.create({
    baseURL: 'http://192.168.0.4:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
});

//INTERCEPTORS
ApiDelivery.interceptors.request.use(
    async (config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data);
            config.headers['Authorization'] = user?.session_token;
        }

        return config;
    }
)

ApiDeliveryWithImage.interceptors.request.use(
    async (config) => {
        const data = await LocalStorage().getItem('user');
        if (data) {
            const user: User = JSON.parse(data);
            config.headers['Authorization'] = user?.session_token;
        }

        return config;
    }
)
export { ApiDelivery, ApiDeliveryWithImage }