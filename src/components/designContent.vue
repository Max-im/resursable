<template>
  <main class="main">
    <div class="design">
      <blockHeader :val="headerText"></blockHeader>
      <contentEl :db="dbPost"></contentEl>
    </div>
  </main> 
</template>




<script>
import db from '../assets/db/design.js';
import blockHeader from './blockHeader.vue';
import contentEl from './content.vue';

export default {
  name: 'design',
  data () {
    return {
      dbPost: db,
      headerText: 'Design'


    }
  },
  components: {
    blockHeader,
    contentEl
  },
  computed: {

  },
  methods:{
    
  }
  

}
</script>



<style lang="scss">

$accent: #0793B7;

.design{
  background: url('../assets/bg/design.jpg') no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  &:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,.5);
  }
}



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
