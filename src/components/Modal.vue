<template>
  <div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="onCloseModal"> &times;</span>
      <h2>{{ title }}</h2>
      <p>{{ content}}</p>
    </div>
  </div>
</template>
  
<script>
  export default {
    name : "MyModal",
    props : {
      title : String,
      content : String,
      
    },
    data(){
      return{
        
      }
    },
    methods : {
      onCloseModal(){
        //* gửi sự kiện cho thèn cha lắng nghe , đóng Modal
        this.$emit("cancel");
      }
    }
  }
</script>

<style scoped lang="css">
   /* The Modal (background) */
  .modal {
    /* display: none; */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }

  /* The Close Button */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
</style>