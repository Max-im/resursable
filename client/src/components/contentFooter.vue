<template>
  <footer class="contentFooter">
    <div class="container_flex contentFooter__container">
      <div class="contentFooter__logoWrap">
        <router-link to="/" 
          class="contentFooter__logo">
          code-guide
        </router-link>
      </div>


      <div class="contentFooter__phone">
        <h4>phone</h4>
        <p>+38(050) 77-23-169</p>
      </div>
      <div class="contentFooter__mail">
        <h4>mail</h4>
        <p>pogidaevmo@gmail.com</p>
      </div>

      <nav role="nav" class="nav">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <router-link 
              :to="'/'+item" 
              class="nav__item contentFooter__nav">
              {{item}}
            </router-link>
          </li>
        </ul>
      </nav>

    </div>
    
    <div class="container_flex contentFooter__bottomContainer">
      <div class="contentFooter__social">
        <ul>
          <li></li>
        </ul>
      </div>
      
    </div>
  </footer>
</template>




<script>

export default {
  name: 'footer',
  data () {
    return {
       list: ['Prepare', 'Design', 'HTML+CSS', 'JavaScript'],
    }
  },
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
$blackColor: #212121;


.contentFooter{
  background: $blackColor;
  padding: 30px 0 20px 0;
  &__container{
    justify-content: space-between;
    color: #fff;
    border-bottom: 1px solid #333;
  }
  &__bottomContainer{
    justify-content: space-between;
    padding: 10px 0 20px 0;
    color: #fff;
  }
  &__logoWrap{
    display: flex;
  }
  &__logo{
    color: #fff;
    font-size: 25px;
    text-transform: uppercase;
    align-self: center;
    position: relative;
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: url('../assets/bgColorful.jpg');
      background-size: cover;
    }
  }
  &__nav{
    padding: 5px 0;
    &:after{
      display: none;
    }
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
