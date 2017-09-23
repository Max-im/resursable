<template>
  <div id="js">
  	<div class="container_flex">
  		<navPanel></navPanel>
  	</div>
    <javaScriptContent></javaScriptContent>
  </div>
</template>

<script>
import navPanel from '../components/navPanel.vue';
import javaScriptContent from '../components/javaScriptContent.vue';

export default {
  name: 'javaScript',
  components: {
	navPanel,
	javaScriptContent  
  }
}
</script>

<style lang="scss">

</style>
	