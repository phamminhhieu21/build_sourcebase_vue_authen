import { CHANGE_LANG } from "./constants";

export function changeLanguageAction({ commit }, payload) {
    try {
        console.log('change languagee')
        return commit(CHANGE_LANG, payload)
    } catch (error) {
        console.log(error)
    }
}
