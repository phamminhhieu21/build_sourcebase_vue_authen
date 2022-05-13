<script>
import {useRoute} from 'vue-router';
import { PUBLIC_LAYOUT } from './constants';
import {computed, onUpdated, onMounted } from 'vue'
import store from './Stores';




export default {
  name: 'App',
  components: {
  
  },
  setup() {
    const route = useRoute();
    const onClick = (lang) =>{
      store.dispatch('moduleHome/changeLanguageAction', lang)
    }

    const lang = computed(() => store.getters['moduleHome/getLang'])
    console.log(lang);

    onUpdated(() => console.log(lang));
    
    return { onClick , layout : computed(() => (route.meta.layout || PUBLIC_LAYOUT) + "-layout") };
  }
  
};

</script>

<template>
  <component :is="layout">
    <div>
      <router-link :to="{ name : 'Home' , params :{} }">Trang chủ</router-link>
      <router-link :to="{ name : 'Login' , params :{} }">Đăng nhập</router-link>
      <router-link :to="{ name : 'Register' , params : {} }" >Đăng ký</router-link>
    </div> 
    <div>
      <h4>Language:</h4>
      <div>
        <button @click="onClick('vi')" :class="lang === 'vi'? 'light' : '' " >Viet Nam</button>
        <button @click="onClick('en')" :class="lang === 'en'? 'light' : '' " >English</button>
      </div>
    </div>
    <router-view />
  </component>
</template>


