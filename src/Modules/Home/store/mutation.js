import { INCREASE } from "./constants";
import i18n from "../../../I18n/index";

const mutations = {
   
    CHANGE_LANG(state, payload) {
        console.log(payload);
        console.log(i18n);
        i18n.global.locale = payload;
        state.lang = payload;
    }
}

export default mutations;
