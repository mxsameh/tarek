<script lang="ts">
	import Header from "$lib/components/generics/Header.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
  import Overlay from "$lib/components/home-page/Overlay.svelte";
	import Sidebar from "$lib/components/home-page/Sidebar.svelte";
	import { onMount } from "svelte";

  let pageWraper : HTMLDivElement;

  onMount(()=>{
    pageWraper.style.opacity = `1`
  })
  
</script>

<!-- <Overlay/> -->

<div class="page-wraper" style:opacity='0' bind:this={pageWraper}>
  <Header />

  <main class="content">
    <!-- SIDEBAR -->
    <Sidebar />

    <!-- GALLERY -->
    <Gallery />
  </main>

</div>

<style lang="scss">

.content{
  padding: 0 24px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 40px;
}
  
</style>