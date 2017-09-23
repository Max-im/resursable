<template>
  <div id="design">
  	<div class="container_flex">
  		<navPanel></navPanel>
  	</div>
    <designContent></designContent>
  </div>
</template>

<script>
import navPanel from '../components/navPanel.vue';
import designContent from '../components/designContent.vue';

export default {
  name: 'Design',
  components: {
	navPanel,
	designContent  
  }
}
</script>

<style lang="scss">

</style>
	