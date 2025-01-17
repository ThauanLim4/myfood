import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/api/mysql", headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    }
});