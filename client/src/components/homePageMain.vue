<template> 
  <div class="homePageMain">
    <h1 class="homePageMain__header">code -
      <span class="homePageMain__spanWrap">
        <span class="homePageMain__span">guide</span>
      </span>
    </h1>
  </div>
</template>




<script>
export default {
  name: 'homePageMain',
  data () {
    return {
      header: 'code-guide'

    }
  },
  computed: {

  },
  methods:{
    
  }
 

}
</script>



<style lang="scss">

.homePageMain{
  display: flex;
  height: 100%;
  &__header{
    margin: auto;
    text-transform: uppercase;
    color: #333;
    font-size: 80px;
    text-shadow: 3px 3px 2px rgba(0,0,0,.4);
    letter-spacing: 5px;
  }
  &__spanWrap{
    background: url('../assets/bgColorful.jpg');
    background-size: cover;
  }
  &__span{
      color: #000;
      background: #fff;
      mix-blend-mode: lighten;
  }
}

 /* Large Devices, Wide Screens */
@media only screen and (max-width : 1200px) {
.homePageMain{
  &__header{
    font-size: 60px;
    text-shadow: 3px 3px 2px rgba(0,0,0,.4);
    letter-spacing: 5px;
  }
}


}





/* Medium Devices, Desktops */
@media only screen and (max-width : 992px) {
.homePageMain{
  &__header{
    font-size: 40px;
    text-shadow: 2px 2px 1px rgba(0,0,0,.4);
    letter-spacing: 3px;
  }
}

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
