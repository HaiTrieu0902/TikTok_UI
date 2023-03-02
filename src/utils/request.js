import axios from 'axios';

const requets = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, otion = {}) => {
    const response = await requets.get(path, otion);
    return response.data;
};

export default requets;
