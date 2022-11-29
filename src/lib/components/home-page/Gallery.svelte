<script lang="ts">
	import positionImages, { scrollImages } from '$lib/utils/gallery';
	import { onDestroy, onMount } from 'svelte';

	export let imgs : any;

	let gallery: HTMLDivElement;

	onMount(() => {
		const $imgs = document.querySelectorAll('.gallery_img') as NodeListOf<HTMLImageElement>;

		positionImages($imgs, gallery);

		// RESIZE EVENT LISTENER
		window.addEventListener('resize', () => {
			if(gallery) positionImages($imgs, gallery);
		});

		// SCROLL EVENT LISTENER
		window.addEventListener('scroll', () => {
			scrollImages($imgs);
		});
	});

	let active = false


</script>

<div class="gallery" bind:this={gallery}>
	<div class="gallery_wraper">
		{#each imgs as img, i}
			<img data-key={i} class="gallery_img" src={img} alt={`${i}.jpg`} />
		{/each}
	</div>
</div>

<style>
	.gallery {
		width: 100%;
		position: relative;
	}
	.gallery_wraper {
		width: 100%;
		position: fixed;
	}
	.gallery_img {
		position: absolute;
		background-color: hotpink;
	}
</style>
