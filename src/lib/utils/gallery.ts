import gsap from "gsap";
/**
 *  COLUMNS
 */
let colsNumber;
let colGap = 8;
let rowGap = 16

const setColsNumber = (windowWidth : number) =>
{
  if(windowWidth > 1240)
  {
    colsNumber = 4
  }else if (windowWidth > 1024 )
  {
    colsNumber = 3
  }else if (windowWidth > 768)
  {
    colsNumber = 2
  }else
  {
    colsNumber = 1 
  }

  return colsNumber
}

const getColsWidth = ( galleryWidth : number, colsNumber : number) =>
{
  let colsWidth = [];
  galleryWidth = galleryWidth - (colGap * colsNumber -1)
  let colWidth = Math.floor( galleryWidth / colsNumber )

  if( galleryWidth % colsNumber !=0 )
  {
    for (let i = 1; i < colsNumber; i++) {
      colsWidth.push(colWidth)
    }
    let lastColWidth = galleryWidth - colWidth * (colsNumber - 1)
    colsWidth.push(lastColWidth)
  }
  else
  {
    for (let i = 0; i < colsNumber; i++) {
      colsWidth.push(colWidth)
    }
  }

  return colsWidth
}  

/**
 *  IMAGES
 */

const getImageWidth = ( i : number, colsWidth : number[], colsNumber : number) =>
{
    const colIndex = i % colsNumber;
    const width = colsWidth[colIndex] 

    return width
}

const getImageLeft = ( i : number, colsWidth : number[], colsNumber : number ) =>
{
  let left = 0;
  let index = i % colsNumber

  while( index != 0)
  {
    index--
    left += colsWidth[index] + colGap
  }

  return left
}

const getImageTop = ( i : number, imgs : NodeListOf <Element>, colsNumber : number) =>
{
  let top = 0;
  let n = i;

  while( n - colsNumber >= 0 )
  {
    n -= colsNumber

    if(imgs[n].clientHeight)
    {
      top += imgs[n].clientHeight + rowGap
    }
  }

  return top
}

const positionImages = (imgs : NodeListOf<Element>, galleryWidth : number) =>
{
  let windowWidth = window.innerWidth
  let colsNumber = setColsNumber(windowWidth) 
  let colsWidth = getColsWidth(galleryWidth, colsNumber)

  imgs.forEach((img, i) =>
  {
    let width = getImageWidth(i, colsWidth, colsNumber);
    let left = getImageLeft(i, colsWidth, colsNumber);
    let top = getImageTop(i, imgs, colsNumber);

    gsap.set(img,
      {
        width,
        left,
        top
      })
  })
}

export default positionImages