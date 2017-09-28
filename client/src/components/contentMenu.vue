<template>
  <div class="contentMenu">
    <div class="container">
       <ul class="contentMenu__list">
        <li v-for="item in list" >
          <router-link 
            class="contentMenu__item"
            :to="'/'+item">
            {{item}}
          </router-link>
        </li>
      </ul>  
    </div>
  </div>
</template>




<script>

export default {
  name: 'contentMenu',
  data () {
    return {
      list: ['Prepare', 'Design', 'HTML+CSS', 'JavaScript'],
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

.contentMenu{
  background: #333;
  &__list{
    display: flex;
  }
  &__item{
    display: block;
    padding: 10px 30px;
    color: #fff;
    &:hover{
      color: $accent;
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
.contentMenu{
  &__item{
    padding: 10px 20px;
  }
}


}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
.contentMenu{
  &__item{
    padding: 10px;
    font-size: 13px;
  }
}
  

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
