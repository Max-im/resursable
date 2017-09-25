<template>
  <div class="content">
    <div class="container_flex content__container">
      <ul 
        v-for="(sublist, header, index) in db" 
        :key="index"
        class="content__list">
        <h3 class="content__header">{{header}}</h3>
        <span class="content__index">{{index + 1}}</span>
        <li class="content__sublist" v-for="item in sublist">
          <img
            class="content__img" 
            :src="'./src/assets/icons/'+item.thumbnail" 
            :alt="item.name">
          <a 
            :href="item.link" 
            target="_blank"
            class="content__link">
            {{item.name}}
          </a>
        </li>
      </ul>
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
  props:['db'],
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
$top: #ee682f;

.content{
  &__container{
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__list{
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    position: relative;
    margin: 20px 50px;
    width: 20%;
    z-index: 10;
    min-width: 280px;
    background: #f5f0ec;
    padding: 0 0 10px 0;
    text-align: center;
    min-height: 370px;
    overflow: hidden;
    opacity: .7;
    transition: all .3s;
    &:hover{
      opacity: 1;
    }
  }
  &__link{
    color: #8d8070;
    display: block;
    text-align: left;
    position: relative;
    text-indent: 50px;
    padding: 10px 0;
    border-bottom: 2px solid #fff;
  }
  &__sublist{
    position: relative;  
    z-index: 3;
    &:hover{
      background: $accent;
      transition: all .3s;
      .content__link{
        color: #fff;
      }
    }
  }
  &__img{
    position: absolute;
    z-index: 1;
    left: 10px;
    top: calc(50% - 10px);
    overflow: hidden;

    width: 20px;
    height: 20px;
  }
  &__header{
    background: $top;
    padding: 25px 0 10px 0;
    position: relative;
    border-bottom: 1px solid #fff;
    font-variant: small-caps;
    color: #fff;
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background: darken($top, 15%);
    }
  }
  &__index{
    position: absolute;
    color: rgba(255,255,255,.5);
    font-size: 250px;
    width: 100%;
    left: 0;
    text-align: center;
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
