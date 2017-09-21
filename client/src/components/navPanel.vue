<template> 
  <aside class="aside" :class="{aside_hide: isHide}">
    <router-link to='/' class="aside__logo">code - guide</router-link>
    <nav role="nav" class="nav">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <router-link :to="'/'+item" class="nav__item">{{item}}</router-link>
        </li>
      </ul>
    </nav>
    <a href="#" 
      class="aside__toggleBtn"
      @click.prevent="toggleNav">
      ↔
    </a>

    <footer class="footer">
      <a 
        href="https://max-im.github.io/" 
        class="footer__link"
        target="_blank">
        Max Pozhidayev
      </a>
      <small class="footer__copyright">
        Copyright © {{year}}
      </small>

    </footer>
  </aside>
</template>




<script>
export default {
  name: 'navPanel',
  data () {
    return {
      pageSize: "",
      list: ['Prepare', 'Design', 'HTML+CSS', 'JavaScript'],
      year: new Date().getFullYear()

    }
  },
  computed: {
    isHide: function() {
      return this.pageSize === 'S' ? true : false; 
    }
  },
  methods:{
    toggleNav: function(e){
      const target = e.target;
      const aside = document.querySelector('.aside');
      aside.classList.toggle('aside_hide');
    },

    showNav: function(){
      const aside = document.querySelector('.aside');
      const target = document.querySelector('.aside__toggleBtn');
      if(this.pageSize !== 'S' &&
        aside &&
        aside.classList.contains('aside_hide')
      ){
        aside.classList.remove('aside_hide'); 
        target.innerHTML = '<';
      }
    },

    resizeWidow: function(){
      const pageWidth = window.innerWidth;
      if( pageWidth > 992 ) {
        this.pageSize = "L";
      }
      else if ( pageWidth > 768 ) {
        this.pageSize = "M";
      }
      else{
        this.pageSize = "S";
      }
      this.showNav();
    }
  },
  created: function() {
    this.resizeWidow();
    window.addEventListener('resize', this.resizeWidow);
  }

}
</script>



<style lang="scss">

$accent: #0793B7;

.aside{
  position: fixed;
  height: 100%;
  width: 250px;
  top: 0;
  left: 0;
  padding: 0 0 0 20px;
  box-sizing: border-box;
  background: $accent;
  transition: transform .5s;
  border-right: 3px solid darken($accent, 30%);
  z-index: 1;
  &_hide{
    transform: translateX(-100%);
    transition: transform .5s;

  }
  &__logo{
    text-transform: uppercase;
    line-height: 200px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 20px;
  }
  &__toggleBtn{
    position: absolute;
    top: 40px;
    right: -25px;
    display: block;
    background: $accent;
    color: #fff;
    padding: 15px 5px;
    border-right: 2px solid darken($accent, 20%);
    border-top: 2px solid darken($accent, 20%);
    border-bottom: 2px solid darken($accent, 20%);
    border-radius: 0 5px 5px 0;
    &:hover{
      background: linear-gradient(270deg, lighten($accent, 5%), $accent);
    }
  }
}

.nav{
  display: flex;
  flex-direction: row;
  &__item{
    display: block;
    position: relative;
    z-index: 1;
    color: #fff;
    padding: 10px 100px 10px 20px;
    margin: 10px 0;
    transition: all .6s;
    letter-spacing: 1px;
    &:after{
      content: '';
      transition: all .3s;
      z-index: -1;
      display: block;
      height: 100%;
      width: 0px;
      position: absolute;
      right: -25px;
      top: 0;
      background: #fff;
    }
    &:hover{
      color: $accent;
      &:after{
        width: calc( 100% + 15px );
      }
    }
  }
}

.footer{
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: calc( 100% - 40px );
  color: darken($accent, 30%);
  padding: 20px 10px 30px 30px;
  &__link{
    color: darken($accent, 30%);
    text-decoration: underline;
    margin: 0 0 15px 0;
    display: block;
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
.aside{
  &__logo{
    line-height: 100px;
    padding: 0 0 0 20px;
    letter-spacing: 1px;
    font-size: 14px;
  }
}


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
