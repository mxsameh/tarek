<script lang="ts">
	import Gallery from '$lib/components/exhibition-page/HorizontalGallery.svelte';
	import Header from '$lib/components/generics/Header.svelte';
	import exhibitions from '$lib/stores/exhibitions';

	const graduationImages = $exhibitions.graduationImages
	const graduationPressImages = $exhibitions.graduationPressImages
  
  let galleryImages = graduationImages

  const handleTabClick = (e : any) =>
  {
    let name = e.target.dataset.name;
    galleryImages = name === 'graduation' ? graduationImages : graduationPressImages
  }
</script>

<div class="page">
	<Header />
	<h1 class="title">exhibitions</h1>
	<nav class="nav">
		<button data-name='graduation' class="nav_btn" on:click={handleTabClick}>GRADUATION // 2021</button>
		<button data-name='graduation press' class="nav_btn" on:click={handleTabClick}>GRADUATION Press Photos</button>
	</nav>
	<main class="main">
		<Gallery images={galleryImages} />
	</main>
</div>

<style lang="scss">
	.page {
		width: 100%;
		min-height: 100vh;
		padding-top: var(--header-height-lg)
	}
	.title {
		text-align: center;
		text-transform: uppercase;
		font-size: 8vw;
		letter-spacing: 0.2vw;
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
	.main{
		margin: 32px 0 16px;
	}

	@media screen and (max-width: 767px) {
		.page {
			padding-top: var(--header-height-sm);
		}
		.title{
			margin-top: 40px;
		}
		.nav {
			gap: 24px;
			&_btn {
				font-size: 18px;
			}
		}
	}
</style>
