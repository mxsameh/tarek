<script lang="ts">
  import gsap from 'gsap'
	import { onMount } from 'svelte';

let menu : HTMLDivElement;
let menuWraper : HTMLDivElement;

let menuOpened = false

const handleMenuBtn = () =>
{
  if(!menuOpened)
  {
    openMenu()
  }else
  {
    closeMenu()
  }
}
const menuTl = gsap.timeline({paused: true})
const mennBtnTl = gsap.timeline({paused: true})

onMount(()=>{

  menuTl
  .to('.menu-wraper',{
    duration: 1,
    y: 0,
    ease: "expo.out",
    onReverseComplete: () =>
    {
      menuOpened = false
    }
  })

  mennBtnTl
  .to('.menu_line:first-child',
  {
    duration: .5,
    ease: "power4.out",
    y : 12,
  },0)
  .to('.menu_line:last-child',
  {
    duration: .5,
    ease: "power4.out",
    y: -12
  },0)
  .set('.menu_line:nth-child(2)',
  {
    opacity : 0
  })
  .to('.menu_line:first-child',{
    duration : 1,
    ease: "back.out(3)",
    rotate: 40
  },1)
  .to('.menu_line:last-child',{
    duration : 1,
    ease: "back.out(3)",
    rotate: -40
  },1)

})

const closeMenu = () =>
{
  menuTl.reverse()
  mennBtnTl.reverse()
}

const openMenu = () =>
{
  menuOpened = true
  menuTl.play()
  mennBtnTl.play()
}

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu_btn" on:click={handleMenuBtn}>
  <div class="menu_icon">
    <span class="menu_line"></span>
    <span class="menu_line"></span>
    <span class="menu_line"></span>
  </div>
</div>

<div class="menu" class:active={menuOpened} bind:this={menu}>
  <div class="menu-wraper" bind:this={menuWraper}></div>
</div>

<style lang="scss">
  .menu{
    width: 100vw;
    height: 100vh;
    display: none;
    overflow: hidden;
    position: relative;
  }
  .active{
    display: block;
  }
  .menu-wraper{
    width: 100%;
    height: 100%;
    background-color: #333;
    transform: translateY(100%) ;
  }
  .menu_btn{
    z-index: 10;
    position: fixed;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    aspect-ratio: 1/1;
    background-color: indianred;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active{
      transform: translateX(-50%) scale(.9);
      // scale: .9;
    }
  } 
  .menu_icon{
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
  }

  .menu_line{
    display: inline-block;
    width: 40px;
    height:4px;
    background-color: white;
    border-radius: 4px;
  }
  .menu_line:nth-child(2){
    width: 20px;
  }
</style>