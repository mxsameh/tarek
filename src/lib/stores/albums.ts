import { writable } from "svelte/store"

const data = [
  {
    id : 1,
    name : 'free',
    artist : 'marwan pablo',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592151481131-3JA3O395OU4B7C6MX0PK/FREE+7.png?format=500w'
  },
  {
    id : 3,
    name : 'dorak gai',
    artist : 'wegz',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592164997313-2VGHSRFSCDQ8DZ9Y9E40/dorak+gai+fixed.jpg?format=750w'
  },
  {
    id : 2,
    name : 'florida',
    artist : 'marwan moussa',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1616494853076-ZSWVZJ6WV9HW27TXFZQD/A.TAREK001.jpg?format=750w'
  },
  {
    id : 4,
    name : 'asyad el soot',
    artist : 'wegz',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1618580112858-NVL77XPHMKKVJ2AI7G4S/WEGZART+HIGH+RES+4-3.jpg?format=750w'
  },
  {
    id : 5,
    name : 'el zar',
    artist : 'wegz',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592151454010-KCAH3H5TRGTN8LLV2KH6/WEGZ+COVERART2.jpg?format=750w'
  },
  {
    id : 6,
    name : 'mayhmeneesh',
    artist : 'mousv',
    image : 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1618580143676-KR5AECP8FFZ943C5QGY6/HAAAA.png?format=750w'
  },
]

const albums = writable(data)

export default albums