<script lang="ts">
	import Header from "$lib/components/generics/Header.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
  import Overlay from "$lib/components/home-page/Overlay.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
	import getBreakpoint from "$lib/utils/breakpoint";
	import { onMount } from "svelte";
	import viralPhotos from "$lib/stores/viral-photos";
	import Menu from "$lib/components/home-page/Menu.svelte";

  let pageWraper : HTMLDivElement;
  let isMobileBp = false;

  let images = $viralPhotos.imgs
  let dimens = $viralPhotos.dimens


  onMount(()=>{
    let breakpoint = getBreakpoint();
    if(breakpoint == 'mobile') isMobileBp = true

    window.addEventListener('resize',()=>{
      let breakpoint = getBreakpoint();
      if(breakpoint == 'mobile') isMobileBp = true
      else isMobileBp = false
    })
    pageWraper.style.opacity = `1`

  })
  
</script>

<!-- <Overlay/> -->

<div class="page" style:opacity='0' bind:this={pageWraper}>

  <Header />

  <div class="page_content">
    <!-- SIDEBAR -->
    {#if !isMobileBp }
    <aside class="sidebar">
      <Nav />
    </aside>
    {/if}

    <!-- GALLERY -->
    <main class="main">
      <Gallery imgs={images} {dimens} />
    </main>

  </div>

  {#if isMobileBp}
  <Menu />
  {/if}
</div>

<style lang="scss">
  .page_content{
    padding: 0 24px;
    display: flex;
    gap: 40px;
  }
  .main{
    width: 100%;
    padding: 24px 0;
  }

	.sidebar {
		height: 100vh;
		padding-top: var(--header-height);
		flex-shrink: 0;
		flex-grow: 0;
    position: sticky;
    top: 0;
	}

  @media screen and (max-width: 767px)
  {
    .page_content{
      padding: 24px 16px 24px;
      display: block;
    }
    .main{
      padding: 0;
    }
  }
</style>