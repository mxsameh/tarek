<script lang="ts">
	import { onMount } from "svelte";

	const projects = [
		{
			title: 'viral photos',
			link: ''
		},
		{
			title: 'exhibitions',
			link: '/exhibitions'
		},
		{
			title: 'album covers',
			link: '/album-covers'
		},
		{
			title: 'commissioned projects',
			link: '/projects/commissioned?id=1'
		},
		{
			title: 'personal projects',
			link: '/projects/personal?id=2'
		},
		{
			title: 'live music',
			link: '/projects/live-music?id=3'
		},
		{
			title: 'portraits',
			link: '/portraits'
		}
	];

	export let navPosition = 'left';

	let isCenter = navPosition == 'center' ? true : false

	const checkScreen = () =>
	{
		let isSmallScreen = window.innerWidth < 768 ? true : false
		if(isSmallScreen) isCenter = false
		if(!isSmallScreen && navPosition == 'center') isCenter = true
	}
	onMount(() => {
		window.addEventListener('resize',checkScreen)
	})

</script>

<nav class="nav">

	<!-- nav with shoots and projects -->
	<div class="projects-wraper">
		<nav class="projects-list" class:center={isCenter}>
			{#each projects as project, i}
				<a
					href={project.link}
					class="project"
					class:inactive={i != 0} 
					class:active={i == 0}
				>
					{project.title}
				</a>
			{/each}
		</nav>
	</div>

	<!-- list of work done -->
	<div class="work" class:center={isCenter}>
		<a href="/jpeg-city" class="work-item">JPEG CITY</a>
		<a href="/Talks" class="work-item">Talks</a>
		<a href="/contact" class="work-item">About & Contact</a>
	</div>

</nav>

<style lang="scss">
	.nav{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.projects-wraper{
		height: 100%;
		display: flex;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		font-size: 20px;
		gap: 16px;
		margin: auto 0;
		width: 100%;
	}
	.project {
		text-transform: capitalize;
		font-size: inherit;
		font-weight: 600;
		width: fit-content;
	}
	.center{
		align-items: center;
		font-size: 32px;
	}
	.center.work{
		font-size: 28px;
		margin-bottom: calc( var(--menu-btn-height) + 32px );
	}
	.inactive {
		&:hover {
			text-decoration: line-through;
			scale: 1.05;
		}
	}

	.active {
		background: linear-gradient(
			135deg,
			#ff00d2,
			#fed90f,
			#00a2ff,
			#09f1b8,
			#ff00d2,
			#fed90f,
			#00a2ff,
			#09f1b8
		);
		background-size: 300% 300%;
		background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: gradient 8s ease-in-out infinite;
	}

	.work {
		display: flex;
		flex-direction: column;
		gap: 8px;
    margin-bottom: 24px;
		margin-top: auto;
		font-size: 16px;
	}
	.work-item {
		font-size: inherit;
		width: fit-content;
		&:hover {
			color: gray;
		}
	}

	@media screen and (max-Width : 767px)
	{
		.nav{
			width: 100%;
			align-items: center;
			padding: 24px 0;
			padding-top: calc(var(--header-height-sm) + 32px);
		}
		.projects-wraper{
			height: auto;
		}
		.project{
			font-size: 24px;
		}
		.work-item{
			font-size: 20px;
		}
		.projects-list,.work{
			align-items: center;
		}
		.work{
			margin-bottom: calc( var(--menu-btn-height) + 16px );
		}
	}

	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
