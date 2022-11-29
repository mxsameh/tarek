<script lang="ts">
	import Gallery from '$lib/components/exhibition-page/Gallery.svelte';
	import Header from '$lib/components/generics/Header.svelte';

	const imgs = [
		[
			'mp.jpg',
			'mp.jpg',
			'mp.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mm.jpg',
			'mm.jpg',
			'mm.jpg',
			'mp.jpg',
			'wegz.jpg'
		],
		[
			'mm.jpg',
			'mm.jpg',
			'mm.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mp.jpg',
			'wegz.jpg',
			'mp.jpg',
			'wegz.jpg'
		]
	];
  
  let galleryImages = imgs[0]
  const handleTabClick = (e : any) =>
  {
    let index = e.target.dataset.key;
    galleryImages = imgs[index]
  }
</script>

<div class="page">
	<Header />
	<h1 class="title">exhibitions</h1>
	<nav class="nav">
		<button data-key=0 class="nav_btn" on:click={handleTabClick}>GRADUATION // 2021</button>
		<button data-key=1 class="nav_btn" on:click={handleTabClick}>GRADUATION Press Photos</button>
	</nav>
	<main>
		<Gallery imgs={galleryImages} />
	</main>
</div>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		padding: var(--header-height-lg) 24px 0;
		font-family: Arial, Helvetica, sans-serif;
	}
	.title {
		text-align: center;
		text-transform: uppercase;
		font-size: 8vw;
		letter-spacing: 0.2vw;
		margin-top: 40px;
	}
	.nav {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		gap: 40px;
		justify-content: center;
		&_btn {
			border: 2px solid black;
			color: black;
			font-size: 24px;
			border-radius: 50px;
			padding: 8px 24px;
			cursor: pointer;
			transition: scale 0.2ms linear;
			&:active {
				scale: 0.9;
			}
		}
	}
	@media screen and (max-width: 1023px) {
		.page {
			padding: var(--header-height-sm) 16px 0;
		}
		.nav {
			gap: 24px;
		}
		.btn {
			font-size: 16px;
		}
	}
</style>
