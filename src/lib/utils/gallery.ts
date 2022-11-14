import gsap from "gsap";
/**
 *  COLUMNS
 */
const getColsWidth = ( galleryWidth : number, colsNumber : number) =>
{
  let colsWidth = [];
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

const addSpacing = (i : number, img : Element, colsNumber : number) =>
{
  if(i >= colsNumber)
  {
    gsap.set(img,{paddingTop: 16})
  }
  if(i % colsNumber != colsNumber -1)
  {
    gsap.set(img,{paddingRight: 8})
  }
}

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
    left += colsWidth[index]
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
    top += imgs[n].clientHeight
  }

  return top
}

const positionImages = (imgs : NodeListOf<Element>, galleryWidth : number, colsNumber : number) =>
{
  
  let colsWidth = getColsWidth(galleryWidth, colsNumber)

  imgs.forEach((img, i) =>
  {
    addSpacing(i, img, colsNumber)
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