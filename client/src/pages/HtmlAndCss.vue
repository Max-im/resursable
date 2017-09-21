<template>
  <div id="htmlAndCss">
  	<div class="container_flex">
  		<navPanel></navPanel>
  		<htmlAndCssContent></htmlAndCssContent>
  	</div>
  </div>
</template>

<script>
import navPanel from '../components/navPanel.vue';
import htmlAndCssContent from '../components/htmlAndCssContent.vue';

export default {
  name: 'htmlAndCss',
  components: {
	navPanel,
	htmlAndCssContent  
  }
}
</script>

<style lang="scss">

</style>
	