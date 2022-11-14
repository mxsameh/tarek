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

<!-- flex container -->
<div class="sidebar">

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

	<!-- footer with links to work and info -->
	<footer class="footer">
		<!-- list of work done -->
		<div class="work">
			<a href="/jpeg-city" class="work-item">JPEG CITY</a>
			<a href="/Talks" class="work-item">Talks</a>
			<a href="/contact" class="work-item">About & Contact</a>
		</div>
		<!-- socail links -->
		<div class="social" />
	</footer>

</div>

<style lang="scss">
	.sidebar {
    width: fit-content;
		height: 100%;
		padding-top: var(--header-height);
		display: flex;
		flex-direction: column;
		flex-shrink: 0;
		flex-grow: 0;
    font-family: 'Roboto';
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

  .footer{
    margin-bottom: 24px;
		margin-top: auto;
  }

	.work {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.work-item {
		font-size: 16px;
		width: fit-content;
		&:hover {
			color: gray;
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
