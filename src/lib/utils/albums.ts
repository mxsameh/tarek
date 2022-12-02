import gsap from "gsap";

let albumIndex = 0;
let direction = 1;

// GET THE SCROLL DIRECTION
// positive ---> next // down
// negative ---> prev // up
const getScrollDirection = ( y : number ) =>
{
	let direction = y > 0 ? 1 : -1;
  return direction;
}

// CHANGE INDEX
const changeIndex = (y : number) =>
{
  direction = y > 0 ? 1 : -1;
  let index = direction > 0 ? albumIndex + 1 : albumIndex - 1;
  index = gsap.utils.wrap(0, 6, index);
  albumIndex = index
  return index
}

// CHANGE ALBUM COVER
const chagneAlbum = (albums : any) =>
{

  const albumArtist = document.querySelector('.album_artist') as HTMLHeadingElement
  const albumName = document.querySelector('.album_name') as HTMLHeadingElement
   
  const textTl = gsap.timeline();
  textTl
  .to([albumArtist, albumName],
    {
      x: `${direction * 100}%`,
      onComplete: function () {
        albumArtist.innerText = albums[albumIndex].artist;
        albumName.innerText = albums[albumIndex].name;
      }
    })
  .set([albumArtist, albumName], {
    x: `${direction * -100}%`
  })
  .to([albumArtist, albumName], {
    x: 0
  });


}


export {chagneAlbum, changeIndex, getScrollDirection}