<script lang="ts">
	import albums from '$lib/stores/albums';
	import { onMount } from 'svelte';
	import {chagneAlbum, changeIndex, getScrollDirection} from '$lib/utils/albums';
	import AlbumImage from './AlbumImage.svelte';

	let scroll = true;
	let direction = 1;

	let albumArtist: HTMLHeadingElement;
	let albumName: HTMLHeadingElement;
	let albumImage: HTMLImageElement;

	let currentAlbumIndex = 0;
	let paused = true

	const handleScroll = (e: any) => {
		if (!scroll) return;
		scroll = false;
		paused = false
		direction = getScrollDirection(e.deltaY)

		currentAlbumIndex = changeIndex(e.deltaY)
		chagneAlbum($albums);

		setTimeout(() => {
			scroll = true;
		}, 1000);
	};

	// let touchStart = {x: 0, y: 0};
	// let touchEnd = {x: 0, y: 0};
	let touchStart = 0
	let touchEnd = 0
	let distance = 0;
	
	const clacDistance = (point1 : any, point2 : any) =>
	{
		let d = Math.sqrt( Math.pow(point1.x - point2.x,2) + Math.pow(point1.y - point2.y,2) )
		return d
	}

	const handleTouchStart = (e : any) =>
	{
		distance = 0
		// touchStart = {x : e.touches[0].clientX, y: e.touches[0].clientY}
		touchStart = e.touches[0].clientX
	}
	const handleTouchEnd = (e : any) =>
	{
		touchEnd = e.changedTouches[0].clientX
		distance = touchStart - touchEnd
		let absDistance = Math.abs(distance)
		if( absDistance > 100 )
		{
			handleScroll({deltaY : distance})
		}
		// touchEnd = {x : e.changedTouches[0].clientX, y: e.changedTouches[0].clientY}
		// distance = clacDistance(touchStart, touchEnd)
	}


	onMount(() => {
		window.addEventListener('wheel', handleScroll);
		window.addEventListener('touchstart',handleTouchStart)
		window.addEventListener('touchend',handleTouchEnd)
	});
</script>

	<div class="album">

		<div class="album_text-wraper">
			<h1 class="album_artist album_text" bind:this={albumArtist}>{$albums[0].artist}</h1>
		</div>

		<AlbumImage albums={$albums}  {currentAlbumIndex} {paused} {direction}/>

		<div class="album_text-wraper">
			<h1 class="album_name album_text" bind:this={albumName}>{$albums[0].name}</h1>
		</div>

	</div>

<style lang="scss">
	.album {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 100%;
		user-select: none;
	}
	.album_text-wraper {
		writing-mode: sideways-lr;
		overflow: hidden;
		flex-shrink: 0;
		flex-grow: 0;
		&:last-child {
			writing-mode: sideways-rl;
		}
	}
	.album_text {
		font-size: 9vh;
		text-transform: uppercase;
		font-weight: bolder;
		overflow: hidden;
		font-kerning: none;
	}
	.album_name {
		color: #333;
	}


	@media screen and (max-width: 767px) {
		.album {
			padding-top: 24px;
			padding-bottom: calc(80px + 24px);
			flex-direction: column;
			justify-content: end;
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
