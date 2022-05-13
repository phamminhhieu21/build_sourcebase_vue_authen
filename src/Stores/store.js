import { createStore } from 'vuex';

const store = createStore({
  state () {
    return {
      count: 0,
      transaction: null,
      transactions : [],
      error : null,
    }
  },
  getters : {
    transactionsFiltered (state) {
      return state.transactions.filter(transaction => transaction % 2 === 0);
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setTransaction (state , transactionPayload ) {
        state.transaction = transactionPayload;
    },
    setTransactions(state , transactionsPayload) {
        state.transactions = transactionsPayload ;
    },
    setErrors(state , errorsPayload) {
        state.error = errorsPayload ;
    }
  },
  actions :{
    //* có 2 param : 1 của store , 2 của mình sử dụng
     async fetchTransaction( { commit } , { id }){

      const res = await fetch("http://localhost:3000/transactions/" + id)
      
      //* res.json() là 1 promise -> dùng await
      const data = await res.json();

      commit("setTransaction" , data);
    },
    async fetchAllTransactions({ commit}){
      try{
        const res = await fetch("http://localhost:3000/transactions");
        if(!res.ok) throw new Error("Something went wrong");
          const data = await res.json();
        commit("setTransactions", data);
      }catch(err){
        commit("setErrors" , err.message);
        console.log(err);
      }
      
    }
  }
})

export default store;

