<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Form -->
      <!-- <form @submit.prevent="onSubmit"  class="flex flex-col space-y-6">
        <div class="row ">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input 
              type="email" class="px-4 py-3 border border-grey-100 mt-1 rounded-lg" placeholder="example@gmail.com"
              id="email"
              v-model="email"
            >
          </label>
        </div >
        <div class="row ">
          <label for="password" class="flex flex-col">
          <span class="font-semibold">Password</span>
          <input 
            type="password" class="px-4 py-3 border border-grey-100 mt-1 rounded-lg" placeholder="password"
            id="password"
            v-model="password"
          >
          </label>
        </div >
        <div class="row">
          
          <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-pink text-white font-bold">Đăng nhập</button>
         
          <button v-else  disabled type="submit" class="py-3 text-center w-full bg-gray-800 text-white font-bold cursor-not-allowed ">Loading...</button>
        </div>
        <div class="text-left text-red mt-4" v-if="error">
          <span> {{ error }}</span>
        </div> 
      </form> -->
      
      <div class="row text-center">
        <h3>{{ t('login_page.title') }}</h3>
        <p>{{ t('login_page.text')}}</p>
      </div>
      <Form @submit="onSubmit" :validation-schema="schema" class="flex flex-col space-y-6" >

        <label for="email" class="flex flex-col" >
          <span class="font-semibold">Email</span>
          <Field id="email" name="email" type="email"  class="px-4 py-3 border border-grey-100 mt-1 rounded-lg"/>
          <ErrorMessage name="email" />
        </label>

        <label for="password" class="flex flex-col">
          <span class="font-semibold">Password</span>
          <Field id="password" name="password" type="password" class="px-4 py-3 border border-grey-100 mt-1 rounded-lg"/>
          <ErrorMessage name="password" />
        </label>

        <button>Submit</button>
      </Form>
      <!-- Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn chưa có tài khoản</span>
        <span class="ml-1 ">
          <router-link :to="{ name : 'Register' , params : {} }" class="text-pink font-bold">Đăng ký</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useSignIn } from '../../../composables/useSignIn';
import { Form, Field, ErrorMessage , useForm } from 'vee-validate';
import * as Yup from "yup";
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'

export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(){

    const { signIn , error , isPending } = useSignIn();
    const { resetForm } = useForm();
    const { t } = useI18n();
    const router  = useRouter();
  
    async function onSubmit(values) {
      console.log(values);
      await signIn(values.email , values.password);
      if(!error.value)  router.push({ name : 'Home' , params : {}}); resetForm();
    } 

    const schema = Yup.object().shape({
      email : Yup.string().email().required().label("Email Address"),
      password : Yup.string()
        .min(5)
        .required()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Past must be minimum eight characters, at least one letter, one number and one special character"
        )
        .label("Your Password"),
    });

    return{
      onSubmit  , error , isPending  , schema , t
    }
  }
}
</script>
