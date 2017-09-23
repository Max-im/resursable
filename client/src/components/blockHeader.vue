<template>
  <div class="blockHeader__wrap">
    <div class="container">
      
    <h2 class="blockHeader">{{val}}</h2>
    <span class="blockHeader__back">{{val}}</span>
    </div>
  </div>
</template>




<script>

export default {
  name: 'blockHeader',
  data () {
    return {

    }
  },
  props:['val'],
  computed: {

  },
  methods:{
    
  },
  created(){

  }

}
</script>



<style lang="scss">

$accent: #0793B7;

.blockHeader{
  text-align: center;
  color: #fff;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 10px;
  padding: 15px 0;
  text-shadow: 1px 1px 1px darken($accent, 30%);
  &__wrap{
    background: $accent;
    margin: 0 0 50px 0;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 5px;
      background: darken($accent, 30%);
    }
  }
  &__back{
    color: rgba(255,255,255,.2);
    position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    margin: auto;
    display: block;
    font-size: 70px;
    letter-spacing: 50px;
    text-transform: uppercase;
    font-weight: bold;
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
