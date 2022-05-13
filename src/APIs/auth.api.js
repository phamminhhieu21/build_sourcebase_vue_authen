import AxiosClient from './api';

async function getPlayer() {
    const res = await AxiosClient.get('/player/info');
    return res.data;
}

async function getProfile({ userId }) {
    const res = await AxiosClient.get(`user/get?userId=${userId}`)
    return res.data;
}
async function postLogin(email, password) {
    const res = await AxiosClient.post('/auth/login', { email, password });
    return res.data;
}

export {
    getPlayer,
    getProfile,
    postLogin
}
