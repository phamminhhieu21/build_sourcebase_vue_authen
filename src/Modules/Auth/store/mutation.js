import { INCREASE, LOGIN, LOAD_PROFILE } from "./constants"
import { STORAGE, setLocalStorage } from "../../../Utils/storage";

const mutations = {
    INCREASE(state, payload) {
        state.count = payload;
    },
    LOGIN(state, payload) {
        setLocalStorage(STORAGE.USER_TOKEN, payload.token);
        setLocalStorage(STORAGE.META_DATA, JSON.stringify({userID: payload.profile.id}));
        state.user = payload.profile;
        state.token = payload.token;
        state.authed = true
        state.loading = false
    },
    LOAD_PROFILE(state, payload) {
        state.user = payload.profile;
        state.authed = true;
        state.loading=false;
    },
    LOADING(state) {
        state.loading = true;
    }
}

export default mutations;
