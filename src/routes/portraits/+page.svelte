<script lang='ts'>
	import Menu from "$lib/components/exhibition-page/Menu.svelte";
	import Header from "$lib/components/generics/Header.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
	import portraits from "$lib/stores/portraits";

	let images = $portraits.imgs
	let dimens = $portraits.dimens
  
</script>

<Header/>
<Gallery imgs={images} {dimens} />
<Menu/>



<style lang='scss'>
</style>