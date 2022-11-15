<script lang="ts">
  import gsap from 'gsap'
	import { onMount } from 'svelte';
	import Nav from './Nav.svelte';
	import MenuBtn from './MenuBtn.svelte';

let menuWraper : HTMLDivElement;

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

onMount(()=>{

  menuTl
  .to(menuWraper, {
    duration: 1,
    y: 0,
    ease: "expo.out",
    onReverseComplete: () =>
    {
      menuOpened = false
    }
  })

})

const closeMenu = () =>
{
  menuTl.reverse()
}

const openMenu = () =>
{
  menuOpened = true
  menuTl.play()
}

</script>

<MenuBtn on:menuBtnClicked={handleMenuBtn} />

<div class="menu" class:active={menuOpened}>
  <div class="menu-wraper" bind:this={menuWraper}>
    <Nav />
  </div>
</div>

<style lang="scss">
  .menu{
    width: 100vw;
    height: 100vh;
    display: none;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
  }
  .active{
    display: block;
  }
  .menu-wraper{
    width: 100%;
    height: 100%;
    transform: translateY(100%) ;
    background-color: white;
    padding: 0 24px;
  }
</style>