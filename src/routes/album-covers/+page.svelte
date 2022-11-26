<script lang="ts">
	import { goto } from "$app/navigation";
	import Albums from "$lib/components/albums-page/AlbumCover.svelte";
	import Header from "$lib/components/generics/Header.svelte";
	import { onMount } from "svelte";

	let smScreen = true
	let page : HTMLDivElement

	const checkSize = () =>
	{
		if(window.innerWidth > 767) smScreen = false
		else smScreen = true
	}

	const close = () =>
	{
		goto('/')
	}

	onMount(() => {
		checkSize()
		window.addEventListener('resize',checkSize)
		page.style.opacity = '1'
	})
</script>

<div class="page" style:opacity='0' bind:this={page}>

	{#if smScreen }
		<Header/>
	{/if}

	<Albums/>

	{#if !smScreen }
	<button class="close-btn" on:click={close}>close</button>
	{/if}

</div>


<style lang="scss">
	.page{
		height: 100vh;
		width: 100%;
		overflow: hidden;
		position: relative;
	}
	.close-btn{
		font-size: 30px;
		text-transform: uppercase;
		position: absolute;
		z-index: 5;
		top: 32px;
		left: 50%;
		transform: translateX(-50%);
		cursor: pointer;
	}

</style>