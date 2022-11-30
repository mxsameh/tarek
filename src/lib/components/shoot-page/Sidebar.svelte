<script lang="ts">
	import MenuBtn from "$lib/components/generics/MenuBtn.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
  import gsap from 'gsap';
	import { onMount } from "svelte";

  let menu : HTMLDivElement;
  export let shootName : string;
  let menuOpened = false;
  const togleMenu = () =>
  {
    if(menuOpened)
    {
      closeMenu()
    }
    else{
      openMenu()
    }
    menuOpened = !menuOpened
  }
  const openMenu = () =>
  {
    menuTl.play()
    
  }
  const closeMenu = () =>
  {
    menuTl.reverse()
  }
  const menuTl = gsap.timeline({paused : true})
  onMount(() => 
  {
    menuTl
    .to(menu,{
      top : 0,
      ease : 'ease.in-out',
      duration : 1
    })
  })

</script>

<aside class="sidebar">
  <h1 class="shoot_name">{shootName}</h1>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="menu-btn" on:click={togleMenu}>
    <MenuBtn />
  </div>
  <div class="menu" bind:this={menu}>
    <Nav/>
  </div>
</aside>

<style lang="scss">
  .sidebar{
    flex-basis: 40%;
    height: 100vh;
    display: grid;
    place-items: center;
    position: sticky;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .shoot_name{
    text-align: center;
    font-weight: bolder;
    font-size: clamp(40px,2.5vw,3vw)
  }
  .menu-btn{
    position: fixed;
    bottom: 24px;
    z-index: 10;
  }
  .menu{
    height: 100vh;
    width: 100%; 
    background-color: white;
    position: absolute;
    padding-left: 24px;
    padding-bottom: calc(80px + 24px);
    top: 100vh;
    z-index: 3;
  }

  @media screen and (max-width: 767px){
    .sidebar{
      height: auto;
      position: static;
      padding: 40px 0;
      flex-shrink: 0;
      flex-basis: auto;
    }
    .shoot_name{
      font-size:clamp(30px,7vw,7vw);
    }
    .menu{
      padding-bottom: 0;
    }
    
  }
  
</style>