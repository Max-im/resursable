<template>
  <div id="htmlAndCss">
 	<contentMenu></contentMenu>
    <htmlAndCssContent></htmlAndCssContent>
    <contentFooter></contentFooter>
  </div>
</template>

<script>
import contentMenu from '../components/contentMenu.vue';
import htmlAndCssContent from '../components/htmlAndCssContent.vue';
import contentFooter from '../components/contentFooter.vue';

export default {
  name: 'htmlAndCss',
  components: {
	contentMenu,
	htmlAndCssContent,
	contentFooter  
  }
}
</script>

<style lang="scss">

</style>
	