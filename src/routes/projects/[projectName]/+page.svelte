<script lang="ts">
	import Header from "$lib/components/generics/Header.svelte";
	import ProjectsList from "$lib/components/projects-page/ProjectsList.svelte";
	import { onMount } from "svelte";
	import projects from "$lib/stores/projects";
	import { page } from "$app/stores";

	let id = $page.url.searchParams.get('id') as string
	let i = parseInt(id)

	let projectsData = $projects[i-1].shoots
	
	let pageDOM : HTMLDivElement;

	onMount( () =>{
		pageDOM.style.opacity = `1`
	})



</script>

<Header />

<div class="page" bind:this={pageDOM} style:opacity='0'>

  <main class="main">
		{#if projectsData }
			<ProjectsList projects={projectsData}/>
		{/if}
  </main>

</div>



<style lang="scss">
  .page{
    width: 100%;
    height: 100%;
  }
	.main{
		padding: 0 24px;
		height: 100vh;
	}

  
</style>