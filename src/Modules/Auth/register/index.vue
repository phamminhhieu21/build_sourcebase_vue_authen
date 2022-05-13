<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Form -->
      <!-- <form @submit.prevent="onSubmit"  class="flex flex-col space-y-6">
        <div  class="row ">
          <label for="full_name" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input 
              type="text" class="px-4 py-3 border border-grey-100 mt-1 rounded-lg" placeholder="Ex: Nguyen Van A"
              id="full_name"
              v-model="full_name"
            >
          </label>
        </div>
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
         
          <button v-if="!isPending" type="submit" class="py-3 text-center w-full bg-pink text-white font-bold">Đăng ký</button>
         
          <button v-else  disabled type="submit" class="py-3 text-center w-full bg-gray-800 text-white font-bold cursor-not-allowed ">Loading...</button>
        </div>
        <div class="text-left text-red mt-4" v-if="error">
          <span> {{ error }}</span>
        </div> 
      </form> -->
      <!-- Direction -->
      <Form @submit="onSubmit" :validation-schema="schema">

        <label for="full_name">Full Name</label>
        <Field id="full_name" name="full_name" type="text" placeholder="enter your name"/>
        <ErrorMessage name="full_name" />

        <label for="email">Your Email</label>
        <Field id="email" name="email" type="email" placeholder="Enter your email"/>
        <ErrorMessage name="email" />

        <label for="password">Password</label>
        <Field id="password" name="password" type="password" placeholder="Enter your password" />
        <ErrorMessage name="password" />

        <label for="confirmedPassword">Confirm Password</label>
        <Field id="confirmedPassword" name="confirmedPassword" type="password" placeholder="Confirm your password" />
        <ErrorMessage name="confirmedPassword" />

        <button>Submit</button>
      </Form>
      <div class="w-full text-center mt-6">
        <span class="font-semibold">Bạn đã có tài khoản</span>
        <span class="ml-1 ">
          <router-link :to="{ name : 'Login' , params : {} }" class="text-pink font-bold">Đăng nhập</router-link>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useSignUp } from '../../../composables/useSignUp';
import { useRouter } from 'vue-router';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from "yup";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup(){
    const { signUp , error , isPending } = useSignUp();
    const router  = useRouter();
  
    async function onSubmit(values) {
      console.log(values);
      await signUp(values.email , values.password , values.full_name);
      if(!error.value)  router.push({ name : 'Home' , params : {}});
    } 

    const schema = Yup.object().shape({
      full_name : Yup.string().required().label("Full Name"),
      email : Yup.string().email().required().label("Email Address"),
      password : Yup.string()
        .required()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Past must be minimum eight characters, at least one letter, one number and one special character"
        )
        .label("Your Password"),
      confirmedPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "password not match")
        .label("Confirm Password"),
    });
    return{
      onSubmit , error , isPending  , schema
    }
  }
}
</script>
