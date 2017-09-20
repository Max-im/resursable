<template>
  <div id="app">
    <div class="container_flex">
      
      <navPanel></navPanel>
    </div>
  </div>
</template>

<script>
import navPanel from './components/navPanel.vue';

export default {
  name: 'app',
  components: {
    navPanel
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

</style>
