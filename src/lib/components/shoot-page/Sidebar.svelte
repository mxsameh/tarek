<script lang="ts">
	import MenuBtn from "$lib/components/generics/MenuBtn.svelte";
	import Nav from "$lib/components/generics/Nav.svelte";
  import gsap from 'gsap';
	import { createEventDispatcher, onMount } from "svelte";

  const dispatach = createEventDispatcher()
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

  const handleNavBtn = (e : any) =>
  {
    let target = e.target
    while(target.tagName != "BUTTON")
    {
      target = target.parentElement
    }
    const nav = target.dataset.nav
    dispatach('nav',{nav})
  }


</script>

<aside class="sidebar">
  <div class="sidebar-content">
    <h1 class="shoot_name">{shootName}</h1>
    <div class="btns">
      <button class="prev" data-nav="prev" on:click={handleNavBtn}>
        <svg class="arrow" width="66" height="30" viewBox="0 0 66 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.585783 13.5858C-0.195266 14.3668 -0.195265 15.6332 0.585783 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82842 15L16.1421 3.6863C16.9232 2.90525 16.9232 1.63892 16.1421 0.857869C15.3611 0.0768202 14.0948 0.0768203 13.3137 0.857869L0.585783 13.5858ZM66 13L2 13L2 17L66 17L66 13Z"/>
        </svg>
      </button>
      <button class="next" data-nav="next" on:click={handleNavBtn}>
        <svg class="arrow" width="66" height="30" viewBox="0 0 66 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M65.4142 16.4142C66.1953 15.6332 66.1953 14.3668 65.4142 13.5858L52.6863 0.857864C51.9052 0.0768158 50.6389 0.0768158 49.8579 0.857864C49.0768 1.63891 49.0768 2.90524 49.8579 3.68629L61.1716 15L49.8579 26.3137C49.0768 27.0948 49.0768 28.3611 49.8579 29.1421C50.6389 29.9232 51.9052 29.9232 52.6863 29.1421L65.4142 16.4142ZM0 17H64V13H0V17Z"/>
        </svg>
      </button>
    </div>
  </div>
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
  .btns{
    margin-top: 24px;
    display: flex;
    gap: 40px;
    justify-content: center;
  }
  .next, .prev{
    cursor: pointer;
    &:hover .arrow{
      fill: rgb(255, 0, 157);
    }
  }
  .arrow{
    fill: #333;
    width: 40px;
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