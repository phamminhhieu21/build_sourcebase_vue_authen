import {ref} from 'vue';
import { projectAuth } from '../configs/firebase';



const error = ref("");

//* status request
const isPending = ref(false);

async function signIn( email , password) {

  //* đây là 1 composable dùng ở nhiều nơi , nên dữ liệu sẽ bị gán lại nhiều lần
  //* để chắc chắn thì ta nên reset lại data initial

  //* khi bắt đầu status request -> true
  isPending.value = true;
  error.value = null;
  try{
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    console.log(res);
    return res;
  }catch(e){
    console.log(error);
    error.value = e.message;
    
  }finally{
    //* reset
    //*try or catch : đúng hay sai thì cũng kết thúc request nên change lại status pending
    isPending.value = false;
  }
  
}
export function useSignIn(){
  return{
    signIn,
    error,
    isPending
  };
}
