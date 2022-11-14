let tabletBp = 768
let desktopBp = 1024

const getBreakpoint = () =>
{
  let windowWidth = window.innerWidth
  let breakpoint;

  if(windowWidth >= desktopBp)
  {
    breakpoint = 'desktop'
  }else if(windowWidth >= tabletBp)
  {
    breakpoint = 'tablet'
  }else{
    breakpoint = 'mobile'
  }

}

export default getBreakpoint