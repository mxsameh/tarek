<script lang='ts'>
	import Gallery from "$lib/components/home-page/Gallery.svelte";
	import portraits from "$lib/stores/portraits";

	let images = $portraits.imgs
	let dimens = $portraits.dimens
  
</script>

<Gallery imgs={images} {dimens} />

<style lang='scss'>
  
</style>