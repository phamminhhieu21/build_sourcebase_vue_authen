import { getPlayer, getProfile, postLogin } from "../../../APIs/auth.api";
import { INCREASE, LOADING, LOAD_PROFILE, LOGIN } from "./constants";
import { getLocalStorage, STORAGE} from '../../../Utils/storage';
import router from '@/router';

export async function loginAction({ commit }, { email, password }) {
    try {
        commit(LOADING);
        const data = await postLogin(email, password);
        commit(LOGIN, {profile: data.user, token: data.token});
        console.log(router);
        console.log(this.$router);
        router.replace(router.currentRoute._value.query.from || '/');
    } catch (error) {
        console.log(error);
    }
}

export async function loadProfileAction({ commit }, { to, from, next}) {
    try {
        commit(LOADING);
        const getMetaData = getLocalStorage(STORAGE.META_DATA);
        const metaData = JSON.parse(getMetaData)
        //console.log(metaData);
        if (!metaData) {
            throw new Error('Dont has token')
        }
        const data = await getProfile({userId: metaData?.userID})
        commit(LOAD_PROFILE, {profile: data});
        //console.log(router);
        //router.replace(to.path && to.path != '/auth' ? to.path : '/');
        next();
    } catch (error) {
        console.log(error);
        router.replace(router.replace('/auth'))
    }
}
