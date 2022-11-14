<script>
  
</script>

<header class="header">
  <a href="/" class="logo">ahmed<br/>tarek</a>
</header>

<style lang="scss">
  .header{
    width: 100%;
    padding: 24px 24px 0;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    mix-blend-mode: luminosity;
  }
	.logo {
		text-transform: uppercase;
		font-size: 40px;
    line-height: 38px;
    font-family: 'Bungee','serif';
    text-align: center;
    color: #333;
	}

  @media screen and (max-width : 767px)
  {
    .header{
      padding-top: 16px;
    }
    .logo{
      text-align: center;
      display: block;
      width: fit-content;
      margin: 0 auto;
    }
  }
</style>