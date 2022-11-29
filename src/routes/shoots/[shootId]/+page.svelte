<script lang="ts">
	import { page } from "$app/stores";
	import Header from "$lib/components/generics/Header.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
	import HorizonalGallery from "$lib/components/shoot-page/HorizonalGallery.svelte";
	import Sidebar from "$lib/components/shoot-page/Sidebar.svelte";
	import shoots from "$lib/stores/shoots";
	import { onMount } from "svelte";

  let shootId = $page.params.shootId as string
  let id = parseInt(shootId) - 1
  let shoot = $shoots[id]
  const images = shoot.imgs
  const dimens = shoot.dimens
  let Page : HTMLDivElement;
  let pageWidth : number;
  let smScreen = false;

  const handleResize = () =>
  {
    let width = pageWidth
    if(width < 768 ) smScreen = true
    else smScreen = false
  }

  onMount(() =>
  {
    handleResize()
    Page.style.opacity = '1'
    window.addEventListener('resize',handleResize)
  })

</script>

<Header/>

<div class="page-content" style:opacity='0' bind:clientWidth={pageWidth} bind:this={Page}>
  <Sidebar shootName={shoot.name}/>
  <main class="main">
    {#if smScreen }
    <HorizonalGallery {images}/>
    {:else}
    <Gallery imgs={images} {dimens} />
    {/if}
  </main>
</div>

<style lang="scss">
  .page-content{
    width: 100%;
    display: flex;
    min-height: 100vh;
  }
  .main{
    flex-basis: 70%;
    padding: 24px 0;
  }

  @media screen and (max-width: 767px){
    .page-content{
      flex-direction: column;
      padding-top: var(--header-height-sm);
      height: 100vh;
      overflow: hidden;
    }
    .main{
      flex-basis: 100%;
      padding: 0 0 16px;
    }

  }
  
</style>