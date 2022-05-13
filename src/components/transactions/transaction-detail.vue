<template>
  <h4>transaction id:{{ $route.params.id}}</h4>
  <div v-if="transaction">
    <h1>Name: {{transaction.name}}</h1>
    <h1>Price : {{transaction.price}}</h1>
  </div>
  <!-- <div>{{error.message}}</div> -->
  <div v-else>
    loading transaction with id {{ $route.params.id}}...
  </div>  
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';
import  {useRoute} from 'vue-router';
export default {
  
  name : "TransactionDetail",
 
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("fetchTransaction" , {id : route.params.id});
    //const transaction = computed( () => store.state.transaction);
    
    
    return {transaction : computed(() => store.state.transaction) };
  }
}

</script>
