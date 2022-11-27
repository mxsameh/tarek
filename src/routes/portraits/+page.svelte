<script lang='ts'>
	import Gallery from "$lib/components/home-page/Gallery.svelte";
	import portraits from "$lib/stores/portraits";
  
</script>

<Gallery imgs={$portraits}/>

<style lang='scss'>
  
</style>