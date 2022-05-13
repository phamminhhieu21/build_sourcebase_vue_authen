import {ref} from 'vue';
import { projectAuth } from '../configs/firebase';



const error = ref("");

//* status request
const isPending = ref(false);

async function signUp( email , password , full_name) {

  //* đây là 1 composable dùng ở nhiều nơi , nên dữ liệu sẽ bị gán lại nhiều lần
  //* để chắc chắn thì ta nên reset lại data initial

  error.value = null;
  //* khi bắt đầu status request -> true
  isPending.value = true;
  try{
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);
    if(!res) throw new Error("Could not create a new User!")
    await  res.user.updateProfile({ displayName : full_name});
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
export function useSignUp(){
  return{
    signUp,
    error,
    isPending
  }
}
