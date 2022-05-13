import { createStore, Store } from 'vuex';
import moduleAuth from '../Modules/Auth/store/index';
import moduleHome from '../Modules/Home/store/index';

const store = createStore({
    modules: {
        moduleAuth,
        moduleHome
    }
})

export default store;
