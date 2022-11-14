<script lang="ts">
	import positionImages from "$lib/utils/gallery";
	import { onMount } from "svelte";

 	const imgs = [
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663887733-CZ1PN3UOAQWTCQHOJ2SM/9.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664394222-2MTKQI0DU19AE5UXHRN2/24.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664204978-RTGJ7WZHJ2R0FL5UAP23/1.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663886625-HA8K65J44JYKH5XFHFS8/TAREK321.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664328366-HCNOK0SLGCA61HPC3J06/A.TAREK001.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664202934-SH2URC6U04ILU0NHLN99/2.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663870557-D164CSQYB5QQ4PADRFMJ/TAREK104.JPG',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663837311-2MXTUK4K3U750HFDT9R4/AHMED-003.JPG',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664358381-QM0SKDYD9881JWQJDQP0/A.TAREK002-2.jpg'
	]; 

  let galleryWidth : number;

  onMount(() =>
  {
    const $gallery = document.querySelector('.gallery') as HTMLDivElement
    const $imgs = document.querySelectorAll('.gallery_img')

    positionImages($imgs, galleryWidth)

    window.addEventListener('resize',(e)=>{
      positionImages($imgs, galleryWidth)
    })

  })


</script>

<div class="gallery" bind:clientWidth={galleryWidth}>
  <div class="gallery_wraper">

    {#each imgs as img, i}
    <img data-key={i} class="gallery_img" src={img} alt={`${i}.jpg`}>
    {/each}

  </div>
</div>

<style>
  .gallery{
    width: 100%;
    height: 100%;
    scrollbar-width: none;
    padding: 24px 0;
    overflow: scroll;
  }
  .gallery_wraper{
    width: 100%;
    position: relative;
  }
  .gallery_img{
    position: absolute;
    background-color: beige;
  }

  
</style>