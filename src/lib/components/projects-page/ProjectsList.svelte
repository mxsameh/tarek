<script lang="ts">
	import lerp from '$lib/utils/lerp';
	import getProjectsListsNumber from '$lib/utils/projects';
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Project from './Project.svelte';

	export let projects: any;

	/*-----------------------------------
	/*  VARIABLES
	/*----------------------------------*/
	let projectsEls: NodeListOf<Element>;
	let projectsList: HTMLUListElement;

	let projectsListsNumber: number;
	let projectHeight: number;
	let projectsWraperHeight: number;
	let lastProjectY: number;

	let scrollY: number = 0;
	let y: number = 0;

	/*-----------------------------------
	/*  FUNCTIONS
	/*----------------------------------*/
	const calculateDimensions = () => {
		projectsEls = document.querySelectorAll('.project');
		projectHeight = projectsEls[0].clientHeight;
		projectsWraperHeight = projectHeight * projectsEls.length;
		projectsListsNumber = getProjectsListsNumber(projectsWraperHeight);
		projectsWraperHeight = projectsListsNumber * projectsEls.length * projectHeight;
		lastProjectY = projectsWraperHeight - projectHeight;
	};

	const addExtraProjects = () => {
		if (projectsListsNumber <= 1) return;

		for(let i = 0 ; i < projectsListsNumber ; i++)
		{
			for (let i = 1; i < projectsEls.length; i++) {
				const project = projectsEls[i].cloneNode(true);
				projectsList.append(project);
			}
		}
	};

	const positionProjects = (scroll: number) => {
		gsap.set(projectsEls, {
			y: (i) => {
				let pos = i * projectHeight + scroll;
				let y = gsap.utils.wrap(-projectHeight, lastProjectY, pos);
				return y;
			}
		});
	};

	const scrollProjects = () => {
		// SCROLL
		y = lerp(y, scrollY, 0.06);
		positionProjects(y);

		// ANIMATION
		let velocity = Math.round(scrollY - y);
		let rate = velocity / 2000;
		rate = gsap.utils.clamp(-1, 1, rate);

		gsap.set(projectsEls, {
			scale: 1 - rate * 0.4,
			ease: 'power.out'
		});

		requestAnimationFrame(scrollProjects);
	};

	const handleScroll = (e: any) => {
		scrollY -= e.deltaY;
	};

	const handleResize = (e: any) => {
		if(!projectsList) return
		projectsEls = document.querySelectorAll('.project');
		calculateDimensions();
		addExtraProjects();
		positionProjects(0);
	};

	onMount(() => {
		calculateDimensions();
		addExtraProjects();
		calculateDimensions();

		positionProjects(0)
		scrollProjects();

		window.addEventListener('wheel', handleScroll);
		window.addEventListener('resize', handleResize);
	});
</script>

<ul class="projects-list" bind:this={projectsList}>
	{#each projects as project}
		<Project {project} />
	{/each}
</ul>

<style lang="scss">
	.projects-list {
		height: 100%;
		position: relative;
		overflow: hidden;
	}
</style>
