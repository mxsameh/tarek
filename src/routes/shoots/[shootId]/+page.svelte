<script lang="ts">
	import Header from '$lib/components/generics/Header.svelte';
	import Gallery from '$lib/components/home-page/Gallery.svelte';
	import HorizonalGallery from '$lib/components/exhibition-page/HorizontalGallery.svelte';
	import Sidebar from '$lib/components/shoot-page/Sidebar.svelte';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import gsap from 'gsap';

	let Page: HTMLDivElement;
	let pageWidth: number;

	const shootsLength = 26

	export let data : PageData;
	$: shoot = data.shoot
	$: shootId = data.id
	$: images = shoot.imgs
	$: dimens = shoot.dimens


	let smScreen = false;

	const handleResize = () => {
		let width = pageWidth;
		if (width < 768) smScreen = true;
		else smScreen = false;
	};

	onMount(() => {
		handleResize();
		Page.style.opacity = '1';
		window.addEventListener('resize', handleResize);
	});

	const handleNav = (e: any) => {
		const nav = e.detail.nav;
		let newId = nav == 'next' ? shootId+1 : shootId-1;
		newId = gsap.utils.wrap(0,shootsLength,newId)
		goto(`/shoots/${newId}`);
	};
</script>

<Header />

<div class="page-content" style:opacity="0" bind:clientWidth={pageWidth} bind:this={Page}>
	<Sidebar shootName={shoot.name} on:nav={handleNav} />
	<main class="main">
		{#if smScreen}
			<HorizonalGallery images={shoot.imgs} />
		{:else}
			<Gallery imgs={images} {dimens} />
		{/if}
	</main>
</div>

<style lang="scss">
	.page-content {
		width: 100%;
		display: flex;
		min-height: 100vh;
	}
	.main {
		flex-basis: 70%;
		padding: 24px 0;
		padding-right: 16px;
	}

	@media screen and (max-width: 767px) {
		.page-content {
			flex-direction: column;
			padding-top: var(--header-height-sm);
			height: 100vh;
			overflow: hidden;
		}
		.main {
			flex-basis: 100%;
			padding: 0 0 16px;
		}
	}
</style>
