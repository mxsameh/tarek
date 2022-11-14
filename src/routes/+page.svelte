<script lang="ts">
	import Header from "$lib/components/generics/Header.svelte";
	import Menu from "$lib/components/generics/Menu.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
  import Overlay from "$lib/components/home-page/Overlay.svelte";
	import Sidebar from "$lib/components/home-page/Sidebar.svelte";
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

<div class="page-wraper" style:opacity='0' bind:this={pageWraper}>
  <Header />
  <main class="content">
    <!-- SIDEBAR -->
    {#if !isMobileBp }
      <Sidebar />
    {/if}
    <!-- GALLERY -->
    <Gallery />
  </main>

  {#if isMobileBp}
    <Menu />
  {/if}
</div>

<style lang="scss">

.content{
  padding: 0 24px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 40px;
}

@media screen and (max-width: 767px)
{
  .content{
    padding-top: 40px;
    display: block;
  }
}
</style>