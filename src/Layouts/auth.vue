<template>
  <div>
    layout auth
    <NavigationBrand/>
    <slot />
  </div>
  
</template>

<script>
import NavigationBrand from '../components/navigation_brand.vue';
export default {
  components : {
    NavigationBrand,
  }
}
</script>
