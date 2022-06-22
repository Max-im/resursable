<template>
  <div id="design">
 	<contentMenu></contentMenu>
  <designContent></designContent>
	<contentFooter></contentFooter>
  </div>
</template>

<script>
import contentMenu from '../components/contentMenu.vue';
import designContent from '../components/designContent.vue';
import contentFooter from '../components/contentFooter.vue';

export default {
  name: 'Design',
  components: {
	contentMenu,
	designContent,
	contentFooter  
  }
}
</script>

<style lang="scss">

</style>
	