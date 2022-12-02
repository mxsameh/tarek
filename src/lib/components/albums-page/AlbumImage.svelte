<script lang="ts">
	import { browser } from "$app/environment";
  import gsap from "gsap";

  export let albums : any;
  export let currentAlbumIndex = 0;
  export let paused : boolean = true;
  export let direction : number

  let imageCover : HTMLDivElement

  let albumIndex = currentAlbumIndex
 $:{
  if(browser)
  {
    const imageTL = gsap.timeline({paused : paused});
    imageTL
      .fromTo(
        imageCover,
        {
          x: `${direction * -100}%`
        },
        {
          x: 0,
          y: 0,
          onComplete : () => {albumIndex = currentAlbumIndex}
        }
      )
      .to(imageCover, {
        x: `${direction * -100}%`,
        delay: 0.1
      });
  }
 } 
  
</script>


<div class="album_image">
  <div class="image-cover" bind:this={imageCover}/>
    {#each albums as  album, i}
    {#if i == albumIndex }
    <img class="image active" data-key={i} src={album.image} alt="">	
    {:else}
    <img class="image" data-key={i} src={album.image} alt="">	
    {/if}
    {/each}
</div>

<style lang="scss">
  
	.album_image {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1;
		width: 40vw;
		max-width: 600px;
	}
	.image {
		width: 100%;
		object-fit: cover;
		position: absolute;
		z-index: -2;
	}
	.active{
		z-index: -1;
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
		.album_image{
			width: 90vw
		}
  }
</style>