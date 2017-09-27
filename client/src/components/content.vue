<template>
  <div class="content">
    <div class="container_flex content__container">
      <div class="content__wrapper content__wrapper_height" v-for="(sublist, header, index) in db">
        <ul 
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
        <a 
          href="#" 
          @click.prevent="showList" 
          class="content__showList">
          show
        </a>
      </div>
    </div>
  </div>
</template>




<script>
import $ from 'jquery';


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
    showList: function(e){
      const target = e.target.closest('.content__wrapper');
      const text = e.target.innerHTML.trim(); 
      const liLength = $(target).find('.content__sublist').length;
      
      if(liLength < 9) return;
      if(target.classList.contains('content__wrapper_height')){
        $(target).animate({
          height: '100%'
        })
      }
      else{
       $(target).animate({
          height: '417px'
        }) 
      }
      target.classList.toggle('content__wrapper_height');
      if(text === 'show') {
        e.target.innerHTML = 'hide';
      }
      else{
        e.target.innerHTML = 'show';
      }
    }
  },
  mounted(){
    $('.content__wrapper').each(function(item){
      const liLength = $(this).find('.content__sublist').length;
      if(liLength > 8) return;
      $(this).find('.content__showList').css({color: '#555'})
    })
  }

}
</script>



<style lang="scss">

$accent: #0793B7;
$top: #ee682f;

.content{
  &__container{
    flex-wrap: wrap;
    justify-content: start;
  }
  &__wrapper{
    height: 417px;
    overflow: hidden;
    margin: 0 0 30px 0;
    width: calc( 100% / 4 );
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
  }
  &__showList{
    height: 30px;
    width: calc( 100% - 40px);
    background: #333;
    position: absolute; 
    bottom: 0;
    left: 20px;
    z-index: 50;
    border-radius: 0 0 10px 10px;
    text-align: center;
    color: #fff;
    line-height: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
  &__list{
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border-radius: 10px 10px;
    position: relative;
    width: 100%;
    height: calc( 100% - 30px);
    box-sizing: border-box;
    z-index: 10;
    min-height: 415px;
    min-width: 280px;
    background: #f5f0ec;
    padding: 0 0 30px 0;
    text-align: center;
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
    box-sizing: border-box;
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
    color: rgba(0,0,0,.2);
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
