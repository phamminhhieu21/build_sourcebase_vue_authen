<template>
  <header>
    <div class="header-content">
        <router-link :to="{ name : 'homepage-route' }" exact>Home Page</router-link>
        <router-link :to="{ name : 'transaction-route' }" exact>Transactions</router-link>
        <router-link to="/profile" exact>Profile</router-link>
    </div>
     
  </header>
</template>

<script>
export default {
  name : "Header"
}

</script>
<style scoped lang="css">
  header{
    
  }
  header>.header-content{

  }
</style>


