<script lang="ts">
  import gsap from "gsap";
	import { createEventDispatcher, onMount } from "svelte";

  const dispatach = createEventDispatcher()

  let menuOpened = false; 

  const handleMenuBtn = () =>
  {
    if(menuOpened)
    {
      menuBtnTl.reverse()
    }
    else
    {
      menuBtnTl.play()
    }

    dispatach('menuBtnClicked',{menuOpened})
    menuOpened = !menuOpened
  }

  const menuBtnTl = gsap.timeline({paused: true})
  onMount( () =>
  {
    menuBtnTl
    .to('.menu_line:first-child',
    {
      duration: .2,
      ease: "power4.out",
      y : 12,
    },0)
    .to('.menu_line:last-child',
    {
      duration: .2,
      ease: "power4.out",
      y: -12
    },0)
    .set('.menu_line:nth-child(2)',
    {
      opacity : 0
    })
    .to('.menu_line:first-child',{
      duration : .5,
      ease: "back.out(3)",
      rotate: 40
    },.5)
    .to('.menu_line:last-child',{
      duration : .5,
      ease: "back.out(3)",
      rotate: -40
    },.5)

  })

  
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu_btn" on:click={handleMenuBtn}>
  <div class="menu_icon">
    <span class="menu_line"></span>
    <span class="menu_line"></span>
    <span class="menu_line"></span>
  </div>
</div>

<style lang="scss">

  .menu_btn{
    width: 80px;
    aspect-ratio: 1/1;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active{
      transform: scale(.9);
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