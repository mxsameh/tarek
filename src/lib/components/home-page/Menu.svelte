<script lang="ts">
	import MenuBtn from "$lib/components/generics/MenuBtn.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
  import gsap from 'gsap'
	import { onMount } from 'svelte';

  let menu : HTMLDivElement
  let menuOpened : boolean;

  const handleMenuBtn = (event : any) =>
  {
    menuOpened = event.detail.menuOpened
    if(!menuOpened)
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
    menuOpened = true
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
        menuOpened = false
      }
    })

  })

</script>

  <div class="menu-btn">
    <MenuBtn on:menuBtnClicked={handleMenuBtn}/>
  </div>
  <div class="menu" bind:this={menu} class:active={menuOpened}>
    <Nav/>
  </div>


<style>
  
  .menu-btn{
    z-index: 10;
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
  }
  .menu{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: white;
    display: none;
    transform: translateY(100vh);
  }
  .active{
    display: block;
  }
</style>