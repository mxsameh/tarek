<script lang='ts'>
	import MenuBtn from "$lib/components/generics/MenuBtn.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
	import Gallery from "$lib/components/home-page/Gallery.svelte";
	import portraits from "$lib/stores/portraits";

	let images = $portraits.imgs
	let dimens = $portraits.dimens
	let isMenuOpened = false

	const handleClick = () =>
	{

		isMenuOpened = !isMenuOpened
	}
  
</script>

<Gallery imgs={images} {dimens} />

<div class="menu_btn">
	<MenuBtn on:menuBtnClicked={handleClick} />
</div>
<div class="nav_menu" class:active={isMenuOpened}>
	<Nav/>
</div>

<style lang='scss'>
.menu_btn{
	position: fixed;
	bottom: 24px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
}  
.active{
	background-color: white;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
}
</style>