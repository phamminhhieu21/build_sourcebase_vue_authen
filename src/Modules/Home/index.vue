<template>
  <h1>home page</h1>
  <div v-if="user">
    <h3>{{ t('home_page.title') }}</h3>
    <p>{{ t('home_page.text') }}</p>
    <h1>Thông tin user</h1>
    <h2>{{ user.uid }}</h2>
    <h2>{{ user.displayName }}</h2>
    <h2>{{ user.email }}</h2>
    
  </div>
  
</template>
<script>
import { computed , ref , reactive , watch , watchEffect, onUpdated} from "vue";
import { useUser } from '../../composables/useUser';
import { useStore, mapState, mapGetters, mapActions } from 'vuex';
import { useI18n } from 'vue-i18n';

export default{
  name : "HomePage",
  props : {
   
  },
  
  setup(){

    //* {} nằm trong props
    //* emit là attribute trong context : {}
    const store = useStore();

    const { getUser } = useUser();
    const {user} = getUser();

    onUpdated(() => console.log(t));
    const { t } = useI18n();

  
    onUpdated(() => console.log(useI18n()));

    





    // const searchText = ref("");
    // const name = ref("Hec Win");
    // const cars = reactive(["Bmw", "Merc", "Ferrari"]);

    //* computed : tính toán lại data => render data ra UI
    //* mỗi khi searchText thay đổi thì Computed sẽ tính toán lại data => data;
    //* Computed hơi giống Watch , nhưng nó theo dõi chung , thèn nào thay đổi thì nó sẽ thực hiện
    // const carsFilted = computed(() =>
  
    //   cars.map( car => {
    //     car = car.toLowerCase();
    //     console.log(car); 
    //     return car;
    //   })
    //   .filter((car) => car.includes(searchText.value.toLowerCase()))
    // );

    //* Watch : theo dõi sự thay đổi giống UseEffect có Dep
    //* thực thi đoạn code bên trong mỗi khi tham số (Depenencies) thay đổi
    // watch( searchText , (prevValue , nextValue) =>{

    //   console.log(prevValue , nextValue);
    // })

    //* theo dõi sự thay đổi bên trong nội tại nó và tính toán lại thôi k có return ra 
    //* watchEffect khác Computed là nó k return ra data mà chỉ tính toán lại thôi
    // watchEffect(() => {
    //   if(searchText.value){
    //     console.log("run agains")
    //   }
    // })
    return{
      user , t 
    };
  },
}


</script>

<style>

</style>
