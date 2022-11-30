<script lang="ts">
	import positionImages, { scrollImages } from '$lib/utils/gallery';
	import { onDestroy, onMount } from 'svelte';

	export let imgs : any;
	export let dimens : any = [];

	let gallery: HTMLDivElement;
	let galleryWraper: HTMLDivElement;

	// let dimenArr : string[] = []

	// const dimen = (img : HTMLImageElement) =>{
	// 	 let dim = `${img.naturalWidth}x${img.naturalHeight}`
	// 	 dimenArr.push(dim)
	// }
	// let imgss : any;

	// const copy = () =>
	// {
	// 	imgss.forEach(dimen)
	// 	// if(galleryWraper.childElementCount != dimenArr.length){
	// 	// 	alert('not fully loaded yet')
	// 	// 	return
	// 	// }

	// 	let string =  JSON.stringify(dimenArr)
	// 	navigator.clipboard.writeText(string)
	// 	console.log( dimenArr );
	// 	alert('copied!!')
	// }

	onMount(() => {
		const $imgs = document.querySelectorAll('.gallery_img') as NodeListOf<HTMLImageElement>;
		// imgss = $imgs
		
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
	<div class="gallery_wraper" bind:this={galleryWraper}>
		{#each imgs as img, i}
			<img  data-key={i} data-dimen={dimens[i]} class="gallery_img" src={img} alt={`${i}.jpg`} />
		{/each}
	</div>
</div>

<style lang="scss">
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
	}
</style>
