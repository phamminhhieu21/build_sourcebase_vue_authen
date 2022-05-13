
import * as actions from './action';
import * as getters from './getter';
import mutations from './mutation';


const state = {
    user: null,
    authed: false,
    token: '',
    loading: false,
}

const moduleAuth = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
    
}


export default moduleAuth;
