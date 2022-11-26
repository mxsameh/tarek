<script lang="ts">
	import albums from '$lib/stores/albums';
	import { onMount } from 'svelte';
	import chagneAlbum from '$lib/utils/albums';

	let scroll = true;

	let albumArtist: HTMLHeadingElement;
	let albumName: HTMLHeadingElement;
	let imageCover: HTMLDivElement;
	let albumImage: HTMLImageElement;


	const handleScroll = (e: any) => {
		if (!scroll) return;

		scroll = false;
    chagneAlbum(albumArtist,albumName, imageCover, $albums, e.deltaY)

		setTimeout(() => {
			scroll = true;
		}, 1000);

	};

	onMount(() => {
		window.addEventListener('wheel', handleScroll);
	});

</script>

<div class="container">
	<div class="album">
		<div class="album_text-wraper">
			<h1 class="album_artist album_text" bind:this={albumArtist}>{$albums[0].artist}</h1>
		</div>
		<div class="album_image">
			<div class="image-cover" bind:this={imageCover} />
			<img class="image" src={$albums[0].image} alt="" bind:this={albumImage} />
		</div>
		<div class="album_text-wraper">
			<h1 class="album_name album_text" bind:this={albumName}>{$albums[0].name}</h1>
		</div>
	</div>
</div>

<style lang="scss">
	.album {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100vh;
		padding: 24px;
		user-select: none;
	}
	.album_text-wraper {
		writing-mode: sideways-lr;
		overflow: hidden;
		&:last-child {
			writing-mode: sideways-rl;
		}
	}
	.album_text {
		font-size: 9vh;
		font-family: Arial, Helvetica, sans-serif;
		text-transform: uppercase;
		font-weight: bolder;
		overflow: hidden;
		font-kerning: none;
	}
	.album_name {
		color: #333;
	}

	.album_image {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1;
	}
	.image {
		width: 100%;
	}
	.image-cover {
		position: absolute;
		background-color: white;
		z-index: 1;
		width: 100%;
		height: 100%;
		transform: translate(100%);
	}

	@media screen and (max-width: 767px) {
		.album {
			flex-direction: column;
			justify-content: end;
			padding: calc( var(--header-height-sm) + 40px) 16px 24px;
		}
		.album_text-wraper {
			writing-mode: unset;
			&:first-child {
				margin-bottom: auto;
			}
			&:last-child {
				writing-mode: unset;
			}
		}
		.album_text {
			font-size: clamp(30px, 9vw, 9vw);
			white-space: nowrap;
			text-align: center;
		}

		.album_artist {
			margin-bottom: 40px;
		}
		.album_name {
			margin-top: 40px;
		}
	}
</style>
