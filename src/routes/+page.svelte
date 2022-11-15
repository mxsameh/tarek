<script lang="ts">
	import Header from "$lib/components/generics/Header.svelte";
	import Menu from "$lib/components/generics/Menu.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
  import Overlay from "$lib/components/home-page/Overlay.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
	import getBreakpoint from "$lib/utils/breakpoint";
	import { onMount } from "svelte";

  let pageWraper : HTMLDivElement;
  let isMobileBp = false;

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
      <Gallery />
    </main>

  </div>

  {#if isMobileBp}
    <Menu />
  {/if}
</div>

<style lang="scss">

  .main{
    width: 100%;
    height: 100%;
    padding: 24px 0;
  }

  .page_content{
    padding: 0 24px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    gap: 40px;
  }
	.sidebar {
    width: fit-content;
		height: 100%;
		padding-top: var(--header-height);
		flex-shrink: 0;
		flex-grow: 0;
	}

  @media screen and (max-width: 767px)
  {
    .page_content{
      padding-top: 40px;
      display: block;
    }
  }
</style>