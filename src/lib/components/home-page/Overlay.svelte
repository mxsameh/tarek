<script lang="ts">
	import SplitType from 'split-type';
	import { onMount } from 'svelte';
	import gsap, { Bounce } from 'gsap';

	let container: HTMLDivElement;
	let rightBox: HTMLDivElement;
	let leftBox: HTMLDivElement;
	let titleWraper: HTMLDivElement;
	let title: HTMLDivElement;

  let scroll = false
	onMount(() => {
		const titleSplit = new SplitType('.title');
    gsap.from('.title .char',{
      y: '100%',
      stagger:{
        amount: .8
      },
      onComplete:()=>{
        scroll = true
      }
    })

		let height = 220;
		container.style.height = `${height}vh`;
		container.style.display = 'block';

		const viewPage = () => {
			container.remove();
			gsap.set('.page-wraper', { opacity: 1 });
		};

		let maxScroll = (window.innerHeight * (height - 100)) / 100;
		let y = window.pageYOffset;

		console.log( maxScroll );
		window.addEventListener('scroll', (e) => {
      if(!scroll) return

			let rate = window.pageYOffset / 400;
			let pos = 100 - rate * 100;

			pos = gsap.utils.clamp(0, 100, pos);

			leftBox.style.left = `-${pos}%`;
			rightBox.style.left = `${pos}%`;

			let scale = (window.pageYOffset - 400) * 0.02;
			scale = gsap.utils.clamp(1, 50, scale);
			title.style.scale = `${scale}`;


			if (window.pageYOffset >= maxScroll - 2) {
				viewPage();
			}
		});
	});
</script>

<div class="container" style:display="none" bind:this={container}>
	<!-- BOXES -->
	<div class="left" bind:this={leftBox} />
	<div class="right" bind:this={rightBox} />

	<!-- TITLE -->
	<div class="title-wraper" bind:this={titleWraper}>
		<h1 class="title" bind:this={title}>ahmed tarek</h1>
	</div>
</div>

<style lang="scss">
	%full {
		width: 100vw;
		height: 100vh;
	}
	.container {
		@extend %full;
		overflow: hidden;
		position: absolute;
		top: 0;
		left: 1;
    z-index: 2
	}
	.left,
	.right {
		@extend %full;
		background-color: black;
		opacity: 0.9;
		position: fixed;
		top: 0;
		transition: 0.2s cubic-bezier(0.19, 1, 0.22, 1);
	}
	.left {
		left: -100%;
	}
	.right {
		left: 100%;
	}
	.title-wraper {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.title {
		font-size: clamp(40px, 8vw, 120px);
		text-transform: uppercase;
		font-family: 'Bungee';
		color: gray;
		white-space: nowrap;
		overflow: hidden;
	}
</style>
