<template> 
  <header class="cHeader">
    <div class="container_flex">
      
      <navPanel></navPanel>
      
    <router-link to="/">
      <h1 class="header__mainHeader"></h1>
    </router-link> 


    </div>
  </header>
</template>




<script>
import navPanel from './cHeader_navPanel.vue';

export default {
  name: 'cHeader',
  data () {
    return {
      mainHeader: "Maxtogram"

    }
  },
  components: {
    navPanel
  },
  methods:{

  },

}
</script>



<style lang="scss">






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
