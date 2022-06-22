<template>
  <div id="prepare">
 	<contentMenu></contentMenu>
    <prepareContent></prepareContent>
    <contentFooter></contentFooter>
  </div>
</template>

<script>
import contentMenu from '../components/contentMenu.vue';
import prepareContent from '../components/prepareContent.vue';
import contentFooter from '../components/contentFooter.vue';

export default {
  name: 'Prepare',
  components: {
	contentMenu,
	prepareContent,
	contentFooter
  }
}
</script>

<style lang="scss">

</style>
	