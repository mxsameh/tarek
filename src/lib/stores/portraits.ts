import { writable } from "svelte/store"

const imgs = [
  '',
  ''
]

const portraits = writable(imgs)

export default portraits