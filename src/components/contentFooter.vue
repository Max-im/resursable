<template>
  <footer class="contentFooter">
    <div class="container_flex contentFooter__container">
      <div class="contentFooter__logoWrap">
        <router-link to="/" 
          class="contentFooter__logo">
          resursable
        </router-link>
      </div>


      <p class="contentFooter__big">+38(050) 77-23-169</p>
      <p class="contentFooter__big">pogidaevmo@gmail.com</p>

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
      <a 
        href="https://max-im.github.io/" 
        class="contentFooter__resume">
        Max Pozhidayev
      </a>
      <div class="contentFooter__social">
        <ul >
          <li 
            class="contentFooter__socialList"
            v-for="item in social">
            <a 
              class="contentFooter__socialLink"
              :href="item.link">
              <img 
                class="contentFooter__socialImg"
                :src="'./src/assets/icons/'+item.img" 
                :alt="item.name">
            </a>
          </li>
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
       social: [
        {
          name: 'fb',
          img: 'facebook.svg',
          link: 'https://www.facebook.com/max.pozhidaev.7'
        },
        {
          name: 'vk',
          img: 'vk.svg',
          link: 'https://vk.com/id8889814'
        },
        {
          name: 'linkedIn',
          img: 'linkedin.svg',
          link: 'https://www.linkedin.com/in/maxim-pozhidaev-16726811a/'
        },
        {
          name: 'gitHub',
          img: 'github.svg',
          link: 'https://github.com/Max-im'
        }
       ]
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
    padding: 0 15px;
    box-sizing: border-box;
  }
  &__bottomContainer{
    justify-content: space-between;
    padding: 30px 15px 20px 15px;
    color: #fff;
    box-sizing: border-box;
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
  }
  &__nav{
    padding: 5px 0;
    &:after{
      display: none;
    }
  }
  &__big{
    font-size: 20px;
    color: $accent;
    align-self: center;
  }
  &__resume{
    color: #777;
    text-decoration: underline;
  }
  
  &__socialList{
    display: inline-block;
    margin: 0 5px;
  }
  &__socialLink{
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    opacity: .5;
    &:hover{
      opacity: 1;
    }
  }
  &__socialImg{
    width: 100%;
    height: 100%;
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

.contentFooter{
  padding: 30px 0 20px 0;
  &__container{
    justify-content: space-between;
    padding: 0 15px;
    flex-wrap: wrap;
    &>*{
      width: 50%;
    }
  }
  &__bottomContainer{
    justify-content: space-between;
    padding: 30px 15px 20px 15px;
    color: #fff;
    box-sizing: border-box;
  }
  &__logoWrap{
    order: 4;
  }
  &__logo{
    font-size: 25px;
    align-self: center;
  }
  &__nav{
    padding: 5px 0;
    &:after{
      display: none;
    }
  }
  &__big{
    font-size: 20px;
    color: $accent;
    align-self: center;
    padding: 0 0 30px 0;
  }
  &__socialList{
    margin: 0 5px;
  }
  &__socialLink{
    width: 25px;
    height: 25px;
  }
}



}


/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {
.contentFooter{
  padding: 30px 0 20px 0;
  &__container{
    padding: 0 15px;
    flex-wrap: wrap;
    &>*{
      width: 100%;
    }
  }
  &__bottomContainer{
    justify-content: space-between;
    padding: 30px 15px 20px 15px;
    color: #fff;
    box-sizing: border-box;
  }
  &__logoWrap{
    order: 0;
    padding: 0 0 20px;
  }
  &__logo{
    font-size: 20px;
  }
  &__nav{
    padding: 5px 0;
    &:after{
      display: none;
    }
  }
  &__big{
    font-size: 15px;
    color: $accent;
    align-self: center;
    padding: 0 0 20px 0;
  }
  &__socialList{
    margin: 0 5px;
  }
  &__socialLink{
    width: 25px;
    height: 25px;
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
