import lodash from 'lodash';
import { createI18n } from 'vue-i18n';
import en from './translate_docs/en.json';
import vi from './translate_docs/vi.json';

//Vue.use(Vuei18n)
const messages = {
    vi,
    en
}

const i18n = createI18n({
    locale: 'vi',
    messages,
    fallbackLocale: 'vi'
})

export default i18n;
