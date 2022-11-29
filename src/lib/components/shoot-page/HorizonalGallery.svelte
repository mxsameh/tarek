<script lang="ts">
	import { onMount } from "svelte";


  export let images : any;
  let galleryHeight : number;
  let galleryWraper : HTMLDivElement;

  onMount(()=>{
    galleryWraper.style.display = 'flex'
  })
  
</script>

<div class="gallery" bind:clientHeight={galleryHeight}>
  <div class="gallery_wraper" style:display='none' bind:this={galleryWraper}>
    {#each images as img}
    <img src={img} style:height={`${galleryHeight}px`} alt="">
    {/each}
  </div>
</div>

<style lang='css'>
  .gallery{
    height: 100%;
    overflow: hidden;
    padding: 0 16p;
  }
  .gallery_wraper{
    display: flex;
    gap: 16px;
    overflow: scroll;
  }

  
</style>