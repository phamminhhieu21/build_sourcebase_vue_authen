
import { defineAsyncComponent} from 'vue';

//* ý nghĩa của file là import các component khi nào cần mới gọi ta
export function registerGlobalComponent(app) {
  app.component('auth-layout', defineAsyncComponent(() => import("@/Layouts/auth")));

  app.component('default-layout', defineAsyncComponent(() => import("@/Layouts/default")));

  app.component('home-layout', defineAsyncComponent(() => import("@/Layouts/home")))
}
