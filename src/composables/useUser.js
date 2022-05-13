import {ref} from 'vue';
import {  projectAuth } from '../configs/firebase';

//* ban đầu kiểm tra xem đã có data của User chưa , có thì gán data vào , k có -> null
const user = ref(projectAuth.currentUser);

//* kiểm tra data thay đổi trong state của Auth xem có data của user k , có thì -> user
projectAuth.onAuthStateChanged(function(_user){
  if(_user) user.value = _user;
});
function getUser(){
  return {user};
}
export function useUser(){
  return{ 
    getUser
  }
}
