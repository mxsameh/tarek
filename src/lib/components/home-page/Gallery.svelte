<script lang="ts">
	import { browser } from '$app/environment';
	import positionImages, { getColsNumber, scrollImage } from '$lib/utils/gallery';
	import { onDestroy, onMount } from 'svelte';

	export let imgs : any;

	let gallery: HTMLDivElement;
	let colsNumber: number;

	onMount(() => {
		const $imgs = document.querySelectorAll('.gallery_img');
		colsNumber = getColsNumber(gallery.clientWidth);

		positionImages($imgs, gallery);

		// RESIZE EVENT LISTENER
		window.addEventListener('resize', () => {
			if(gallery) positionImages($imgs, gallery);
		});

		// SCROLL EVENT LISTENER
		window.addEventListener('scroll', (e) => {
			scrollImage($imgs);
		});
	});

	// onDestroy(()=>{
	// 	console.log( 'destroyed' );
	// 	if(browser)
	// 	{
	// 		// window.rom
	// 	}
	// })

</script>

<div class="gallery" bind:this={gallery}>
	<div class="gallery_wraper">
		{#each imgs as img, i}
			<img data-key={i} data-col={i % colsNumber} class="gallery_img" src={img} alt={`${i}.jpg`} />
		{/each}
	</div>
</div>

<style>
	.gallery {
		width: 100%;
	}
	.gallery_wraper {
		width: 100%;
		position: fixed;
	}
	.gallery_img {
		position: absolute;
		background-color: beige;
	}
</style>
