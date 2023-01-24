import axios from "axios";

const ApiDelivery = axios.create({
    baseURL: 'http://192.168.0.2:3000/api',
    headers: {
        'Content-type': 'application/json'
    }
});

const ApiDeliveryWithImage = axios.create({
    baseURL: 'http://192.168.0.2:3000/api',
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }
});


export { ApiDelivery, ApiDeliveryWithImage }