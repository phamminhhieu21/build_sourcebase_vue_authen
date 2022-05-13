import { reactive , readonly } from 'vue';

//* ComputationAPI sẽ thay thế VueX như thế nào ?

//* <=> State
const state = reactive({
  count : 0,
})
//* <=> Mutation
const setCount = () =>{
  state.count = 10;
}
//* muốn sử dụng giống VueX -> import vào Main.js , và provide cho App ex: app.provide("store", store);
export default {state : readonly(state) , setCount};
