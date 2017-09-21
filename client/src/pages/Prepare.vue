<template>
  <div id="prepare">
  	<div class="container_flex">
  		<navPanel></navPanel>
  		<prepareContent></prepareContent>
  	</div>
  </div>
</template>

<script>
import navPanel from '../components/navPanel.vue';
import prepareContent from '../components/prepareContent.vue';

export default {
  name: 'Prepare',
  components: {
	navPanel,
	prepareContent  
  }
}
</script>

<style lang="scss">

</style>
	