<script>
  
</script>

<header class="header">
  <a href="/" class="logo">ahmed<br/>tarek</a>
</header>

<style lang="scss">
  .header{
    padding: 24px 0 0 24px;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    mix-blend-mode: luminosity;
  }
	.logo {
		text-transform: uppercase;
		font-size: 40px;
    line-height: 34px;
    font-weight: 900;
    text-align: center;
    color: #333;
	}

  @media screen and (max-width : 767px)
  {
    .header{
      padding: 0;
      padding-top: 16px;
      left: 50%;
      transform: translateX(-50%);
    }
    .logo{
      text-align: center;
      display: block;
      width: fit-content;
      margin: 0 auto;
    }
  }
</style>