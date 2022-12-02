<script lang="ts">
	import MenuBtn from "$lib/components/generics/MenuBtn.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
  import gsap from 'gsap'
	import { onMount } from "svelte";

  let menu : HTMLDivElement;
  let isMenuOpened : boolean;

  const handleClick = (event : any) =>
  {
    isMenuOpened = event.detail.menuOpened
    if(!isMenuOpened)
    {
      openMenu()
    }else
    {
      closeMenu()
    }
  }
  const menuTl = gsap.timeline({paused: true})

  const closeMenu = () => {
    menuTl.reverse()
  }

  const openMenu = () =>
  {
    isMenuOpened = true
    menuTl.play()
  }

  onMount(()=>{

    menuTl
    .to(menu, {
      duration: 1,
      y: 0,
      ease: "expo.out",
      onReverseComplete: () =>
      {
        isMenuOpened = false
      }
    })

  })

  
</script>

<div class="menu_btn">
	<MenuBtn on:menuBtnClicked={handleClick} />
</div>
<div class="nav_menu" class:active={true} bind:this={menu}>
	<Nav navPosition={'center'}/>
</div>

<style lang="scss">
.menu_btn{
	position: fixed;
	bottom: 24px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 10;
}  
.nav_menu{
  display: none;
}
.active{
	background-color: white;
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
  transform: translateY(100vh);
  display: block;
}
  
</style>