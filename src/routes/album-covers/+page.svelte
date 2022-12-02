<script lang="ts">
	import { goto } from "$app/navigation";
	import Albums from "$lib/components/albums-page/AlbumCover.svelte";
	import Menu from "$lib/components/exhibition-page/Menu.svelte";
	import Header from "$lib/components/generics/Header.svelte";
	import { onMount } from "svelte";

	let smScreen = true
	let page : HTMLDivElement

	const checkSize = () =>
	{
		if(window.innerWidth > 767) smScreen = false
		else smScreen = true
	}

	onMount(() => {
		checkSize()
		window.addEventListener('resize',checkSize)
		page.style.opacity = '1'
	})
</script>

<div class="page" style:opacity='0' bind:this={page}>

	<Header isCentered={true}/>

	<Albums/>

	<Menu/>

</div>


<style lang="scss">
	.page{
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
	}

	@media screen and (max-width : 767px)
	{
		.page{
			padding-top: var(--header-height-sm);
		}
	}

</style>