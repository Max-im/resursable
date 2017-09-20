<template>
  <div id="app">
    <cHeader></cHeader>
  </div>
</template>

<script>
import cHeader from './components/cHeader.vue';

export default {
  name: 'app',
  components: {
    cHeader
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
  // background: #C299C9;
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
