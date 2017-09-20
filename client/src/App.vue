<template>
  <div id="app">
    <div class="container_flex">
      <navPanel></navPanel>
      <main class="main">
        <homePageMain></homePageMain>
        
      </main>
    </div>
  </div>
</template>

<script>
import navPanel from './components/navPanel.vue';
import homePageMain from './components/homePageMain.vue';

export default {
  name: 'app',
  components: {
    navPanel,
    homePageMain
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

a{
  outline: none;
  text-decoration: none;
}

body{
  font-family: 'roboto', 'sans serif', ubuntu, arial;
  background: #0793B7;
}

.container{
  display: block;
  width: 100%;
  max-width: 1280px;
  min-width: 320px;
  margin: 0 auto;
  &_flex{
    @extend .container;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

ul{
  list-style: none;
}

.main{
  background: #fff;
  min-height: 100vh;
  width: 100%;
}

</style>
