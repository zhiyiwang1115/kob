<template>
  <NavBar/>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

export default{
  components:{
    NavBar
  }
}


// import $ from 'jquery';
// import {ref} from 'vue';
// export default{
//   name: "App",
//   setup: ()=>{
//     let bot_name = ref("");
//     let bot_rating = ref("");

//     $.ajax(
//       {
//         url: "http://127.0.0.1:3000/pk/getbotinfo/",
//         type: "get",
//         success: resp => {
//           bot_name.value=resp.name;
//           bot_rating.value=resp.rating
//         }
//       }
//     )

//     return {
//       bot_name, bot_rating
//     }
//   }

// }
</script>


<style>
body{
  background-image: url("./assets/background.png");
  background-size: cover;
}
</style>
