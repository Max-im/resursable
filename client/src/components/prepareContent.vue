<template>
  <main class="main">
    <div class="prepare">
      <blockHeader :val="headerText"></blockHeader>
      <contentEl :db="dbPost"></contentEl>
    </div>
  </main> 
</template>




<script>
import db from '../assets/db/prepare.js';
import blockHeader from './blockHeader.vue';
import contentEl from './content.vue';

export default {
  name: 'prepare',
  data () {
    return {
      dbPost: db,
      headerText: 'Prepare'


    }
  },
  components: {
    blockHeader,
    contentEl
  },
  computed: {

  },
  methods:{
    
  },
  created(){
    console.log(this.dbPost.Prepare);
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
