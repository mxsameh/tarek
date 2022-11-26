import gsap from "gsap";

let i = 0;
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
const changeIndex = () =>
{
		let index = direction > 0 ? i + 1 : i - 1;
		index = gsap.utils.wrap(0, 4, index);

    return index
}

// CHANGE ALBUM COVER
const chagneAlbum = ( albumArtist : HTMLElement, albumName : HTMLElement, imageCover : HTMLElement, albums : any, y : number) =>
{
  i = changeIndex()
  direction = getScrollDirection(y)

  const textTl = gsap.timeline();
  textTl
  .to([albumArtist, albumName],
    {
      x: `${direction * 100}%`,
      onComplete: function () {
        albumArtist.innerText = albums[i].artist;
        albumName.innerText = albums[i].name;
      }
    })
  .set('.album_artist, .album_name', {
    x: `${direction * -100}%`
  })
  .to('.album_artist, .album_name', {
    x: 0
  });

  const imageTL = gsap.timeline();
  imageTL
    .fromTo(
      imageCover,
      {
        x: `${direction * -100}%`
      },
      {
        x: 0,
        y: 0,
        onComplete: function () {
          console.log('changeImage');
        }
      }
    )
    .to(imageCover, {
      x: `${direction * -100}%`,
      delay: 0.1
    });

}


export default chagneAlbum