import * as actions from './action';
import * as getters from './getter';
import mutations from './mutation';


const state = {
    lang: 'vi',
}

const moduleHome = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
    
}


export default moduleHome;
