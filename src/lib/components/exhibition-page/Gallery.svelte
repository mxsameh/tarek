<script lang="ts">
	import { onMount } from "svelte";


  export let imgs : any;
  let galleryWraper : HTMLDivElement

  const begin = () =>
  {
    galleryWraper.scrollTo(0,0)
  }
  onMount( () => 
  {
    // galleryWraper.addEventListener('scroll', (e) =>{
    //   console.log( e.target!.scrollLeft );
    // })
  })
</script>

<div class="gallery">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="gallery_wraper" bind:this={galleryWraper} on:click={begin}> 
    {#each imgs as img}
      <img class="gallery_img" src={img} alt="">
    {/each}
  </div>
</div>


<style lang="scss">
  .gallery{
    // min-height: clamp(500px,80vh,8vh);
    width: 100%;
    overflow: hidden;
    margin: 24px 0;
    &_wraper{
      display: flex;
      gap: 16px;
      width: 100%;
      min-height: 100%;
      overflow-x: scroll;
      scroll-behavior: smooth;
    }
    &_img{
      height: clamp(500px,80vh,80vh);
    }
  }

  @media screen and (max-width: 460px){
    .gallery{
      margin: 40px 0 24px;
      &_img{
        width: calc(100vw - 16*2px);
        height: min-content;
      }
    }
  }
  
</style>