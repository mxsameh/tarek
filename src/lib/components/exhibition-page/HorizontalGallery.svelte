<script lang="ts">
	import { onMount } from "svelte";


  export let images : any;
  let galleryWraper : HTMLDivElement

  const begin = () =>
  {
    galleryWraper.scrollTo(0,0)
  }
</script>

<div class="gallery">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="gallery_wraper" bind:this={galleryWraper} on:click={begin}> 
    {#each images as img}
      <img class="gallery_img" src={img} alt="">
    {/each}
  </div>
</div>


<style lang="scss">
  .gallery{
    // min-height: clamp(500px,80vh,8vh);
    width: 100%;
    overflow: hidden;
    &_wraper{
      display: flex;
      gap: 16px;
      width: 100%;
      min-height: 100%;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scrollbar-width: none;
    }
    &_img{
      height: clamp(500px,80vh,80vh);
    }
  }

  @media screen and (max-width: 460px){
    .gallery{
      &_img{
        width: calc(100vw - 16px*2);
        height: min-content;
        &:first-child{
        width: calc(100vw - 50px);
          margin-left: 16px;
        }
      }
    }
  }
  
</style>