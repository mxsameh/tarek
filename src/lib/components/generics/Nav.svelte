<script lang="ts">

	const projects = [
		{
			title: 'viral photos',
			link: ''
		},
		{
			title: 'exhibitions',
			link: ''
		},
		{
			title: 'album covers',
			link: '/album-covers'
		},
		{
			title: 'commissioned projects',
			link: ''
		},
		{
			title: 'personal projects',
			link: ''
		},
		{
			title: 'live music',
			link: ''
		},
		{
			title: 'portraits',
			link: ''
		}
	];

</script>

<nav class="nav">

	<!-- nav with shoots and projects -->
	<div class="projects-wraper">
		<nav class="projects-list">
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
	<div class="work">
		<a href="/jpeg-city" class="work-item">JPEG CITY</a>
		<a href="/Talks" class="work-item">Talks</a>
		<a href="/contact" class="work-item">About & Contact</a>
	</div>

</nav>

<style lang="scss">
	.nav{
		display: flex;
		flex-direction: column;
    font-family: 'Roboto';
		height: 100%;
	}
	.projects-wraper{
		height: 100%;
		display: flex;
	}

	.projects-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin: auto 0;
	}
	.project {
		text-transform: capitalize;
		font-size: 20px;
		font-weight: 500;
		width: fit-content;
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
	}
	.work-item {
		font-size: 16px;
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
			padding-top: calc(var(--header-height) + 24px);
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
			// margin-top: 0;
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
