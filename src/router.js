import { createRouter , createWebHistory } from 'vue-router';
import HomePage from './Modules/Home/index.vue';
import Profile from './components/profile/index.vue';
import ProfileDetail from './components/profile/profile-detail.vue';
import Transactions from './components/transactions/index.vue';
import TransactionDetail from './components/transactions/transaction-detail.vue';
import PageNotFound from './Modules/PageNotFound.vue';
const routes = [
  { 
    path : "/",
    name : "Home",
    meta : {
      layout : "home"
    },
    component : () => import("./Modules/Home/index.vue"),
  },
  { 
    path : "/register",
    name : "Register",
    //* layout chỉ được dùng trong 1 các Object của vue-route
    //* thường truyền trong meta
    meta : {
      layout : "auth",
    },
    component : () => import("./Modules/Auth/register/index.vue"),
  },
  {
    path : "/login",
    name : "Login",
    meta : {
      layout : "auth",
    },
    component : () => import("./Modules/Auth/login/index.vue"),
  },
  {
    path : "/profile/:id",
    component : ProfileDetail
  },
  { 
    path : "/transaction",
    name : "transaction-route",
    component : Transactions
  },
  //* truong hop viet tac ts = transaction => redirect ve path cua no
  {
    
    path : "/ts",
    redirect : "/transaction"
  },
  { 
    path : "/transaction/:id",
    name : "transaction-details-route",
    component : TransactionDetail
  },
  //* truong hop go link k hop le vs path da khai bao ->  redirect ve 404
  {
    path : `/:pathMatch(.*)*`,
    component : PageNotFound
  }


]
//* instance routes
//* VueRouter : k can khai bao vi trich xuat ra truoc do roi
const router = createRouter({
  //* Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
