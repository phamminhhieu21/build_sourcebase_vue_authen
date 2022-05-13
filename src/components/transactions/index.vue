<template>
  <h1>Transactions</h1>
  <div v-if="transactions.length">
    <div v-for="transaction in transactions" :key="transaction.id">
      <router-link :to="{ name : 'transaction-details-route' , params : {id : transaction.id}}">{{ transaction.name }}</router-link>
    </div>
  </div>
  <div v-else-if="error">{{error}}</div>
  <div v-else>loading transaction...</div>
</template>

<script>
import {computed} from 'vue';
import { useStore } from "vuex";

export default {
  name : "TransactionDetail",
  setup(){
    const store = useStore();
    store.dispatch("fetchAllTransactions");
    const transactions = computed( () => store.state.transactions);
    const error = computed( () => store.state.error);
    return {transactions ,error}
  }
}

</script>
