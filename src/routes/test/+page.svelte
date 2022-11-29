<script>
	import Gallery from "$lib/components/test/gallery.svelte";


</script>

<!-- <Gallery/> -->

<div class="container">
	<img class="img" src="/mp.jpg" alt="">
</div>


<style lang="scss">
.container{
	height: 70vh;
	width: 500px;
	border: 3px solid red;
}
.img{
	// width: 100%;
	height: 100%;
}
.img-portrait{
	width: 100%;
	max-height: 100%;
}
.img-landscape{
	height: 100%;
}
</style>