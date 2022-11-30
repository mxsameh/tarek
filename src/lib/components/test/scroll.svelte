<script lang="ts">
	import { onMount } from "svelte";
  import gsap from 'gsap'
	import SplitType from "split-type";

  let container : HTMLElement;

  onMount(()=>{

    const text = new SplitType('.title',{types:'chars'})

    const $left = document.querySelector('.left') as HTMLElement;
    const $right = document.querySelector('.right') as HTMLElement;

    gsap.from('.title .char',{
      y: `100%`,
      stagger:{
        amount: 1
      }
    })


    const $titleWraper = document.querySelector('.title-wraper') as HTMLElement;
    const $title = document.querySelector('.title') as HTMLElement;

    window.addEventListener('scroll',(e)=>{

      let scroll = window.pageYOffset / 815;
      let pos = 100 - scroll * 100
      $left.style.left = `${-pos}%`
      $right.style.left = `${pos}%`

      if(window.pageYOffset == 815)
      {
        gsap.to('.title',{
          duration: 1,
          scale: 8,
          onComplete: ()=>{
            container.remove()
          }
        })
      }
      // let scale = 4 - scroll * 3
      // let pos = 50 - scroll * 50
      // let opacity = 1 - scroll * .2
      // $titleWraper.style.top = `${pos}%`
      // console.log( opacity );
      // $title.style.scale = `${scale}`
      // container.style.opacity = `${opacity}`
      // if(window.pageYOffset == 815){
      //   console.log( 'dispear' );
      //   container.remove()
      // }

    })




  })
  
</script>

<div class="container" bind:this={container}>
  <div class="left"></div>
  <div class="right"></div>

  <div class="title-wraper">
    <h1 class="title">mohamed</h1>
  </div>

</div>

<!-- <div class="box"></div> -->


<style lang="scss">

  %full{
    width: 100vw;
    height: 100vh;
  }
  .container{
    width: 100vw;
    height: 200vh;
    // background-color: black;
    position: absolute;
    top: 0;
    left:0
  }
  .container{
    @extend %full;
    overflow: hidden;
    position: absolute;
    top: 0;
    left:1;
  }
  .left, .right{
    @extend %full;
    background-color: black;
    opacity: .9;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    mix-blend-mode: difference;
  }
  .left{
    left: -100%;
  }
  .right{
    left: 100%;
  }
  .title-wraper{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,0);
  }
  .title{
    font-size: 6vw;
    text-transform: uppercase;
    padding-top: 24px;
    overflow: hidden;
    color: rgb(71, 71, 71);
  }
  .box{
    width: 100vw;
    height: 100vh;
    background: green;
  }
  
</style>