<template>
  <div id="js">
 	<contentMenu></contentMenu>
    <javaScriptContent></javaScriptContent>
    <contentFooter></contentFooter>
  </div>
</template>

<script>
import contentMenu from '../components/contentMenu.vue';
import javaScriptContent from '../components/javaScriptContent.vue';
import contentFooter from '../components/contentFooter.vue';


export default {
  name: 'javaScript',
  components: {
	contentMenu,
	javaScriptContent,  
	contentFooter
  }
}
</script>

<style lang="scss">

</style>
	