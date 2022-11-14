let tabletBp = 768
let desktopBp = 1024

const getBreakpoint = () : string =>
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

  return breakpoint
}

export default getBreakpoint