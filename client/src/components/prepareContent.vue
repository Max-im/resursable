<template>
  <main class="main">
    <div class="singleContent">
      <h1 class="singleContent__header">{{header}}</h1>

      
    </div>
  </main> 
</template>




<script>
import db from '../assets/db/prepare.js';

export default {
  name: 'singleConten',
  data () {
    return {
      dbPost: db,
      post: null,
      header: null

    }
  },
  computed: {

  },
  methods:{
    
  },
  created(){
    const postId = this.$route.params.id;
    this.post = this.dbPost[postId];
    this.header = postId;
    console.log(this.dbPost[postId])

  }

}
</script>



<style lang="scss">

$accent: #0793B7;





 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
  


}





/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
  

}






/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {



}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

  

}





/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {



}






/*==========  Mobile First Method  ==========*/

/* Custom, iPhone Retina */
@media only screen and (min-width : 320px) {




}

/* Extra Small Devices, Phones */
@media only screen and (min-width : 480px) {




}




/* Small Devices, Tablets */
@media only screen and (min-width : 768px) {



}




/* Medium Devices, Desktops */
@media only screen and (min-width : 992px) {



}





 /* Large Devices, Wide Screens */
@media only screen and (min-width : 1200px) {



}


</style>
