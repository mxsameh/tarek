<script lang="ts">
	import Gallery from "../home-page/Gallery.svelte";
  const port = 3333
  const url = `http://localhost:${port}/?img=`
  let imgs=[`${url}mm`,`${url}mp`,`${url}wegz`]
</script>

<main class="main">
  <Gallery imgs={imgs} />
</main>

<style lang="scss">
  .main{
    width : 100vw;
    // height : 100vh;
    padding: 24px;
  }
  
</style>