import { writable } from "svelte/store";

const shootsData = [
  {
    id : 1,
    name: 'Pepsi Black',
    imgs : ['','']
  },
  {
    id : 2,
    name: "Adidas 'Watch Us Move'",
    imgs : ['','']
  },
  {
    id : 3,
    name: `'Florida' // Marwan Moussa`,
    imgs : ['','']
  },
  {
  id : 4,
    name: `Ehab Amin for Red Bull`,
    imgs : ['','']
  },
  {
    id : 5,
    name: `'Free' // Marwan Pablo`,
    imgs : ['','']
  },
  {
    id : 6,
    name: `'Dorak Gai' // Wegz`,
    imgs : ['','']
  },
  {
  id : 7,
    name: 'Mousv In Ismalia',
    imgs : ['','']
  },
  {
  id : 8,
    name: 'PUBG x Wegz',
    imgs : ['','']
  },
  {
    id : 9,
    name: 'One & Four Studio AW20',
    imgs : ['','']
  },
  {
    id : 10,
    name: 'Rebel Cairo',
    imgs : ['','']
  },
  {
  id : 11,
    name: 'Pier 88 x LUCID',
    imgs : ['','']
  },
  {
  id : 12,
    name: 'Suzanne SS19',
    imgs : ['','']
  },
  {
    id : 13,
    name: 'UNITY',
    imgs : ['','']
  },
  { id : 14,
    name: 'Gas Stations',
    imgs:['','']
  },
  { id : 15,
    name: 'CAIRO',
    imgs:['','']
  },
  { id : 16,
    name: 'Alexandria',
    imgs:['','']
  },
  { id : 17,
    name: '2 AM with Marwan Pablo',
    imgs:['','']
  },
  { id : 18,
    name: 'OVERSIZED I',
    imgs:['','']
  },
  { id : 19,
    name: 'OVERSIZED II',
    imgs:['','']
  },
  { id : 20,
    name: 'OVERSIZED III',
    imgs:['','']
  },
  { id : 21,
    name: 'Marwan Pablo',
    imgs:['','']
  },
  { id : 22,
    name: 'Redbull SoundClash 19',
    imgs:['','']
  },
  { id : 23,
    name: 'Disco Misr',
    imgs:['','']
  },
  { id : 24,
    name: 'Sandbox Festival 19',
    imgs:['','']
  },
  { id : 25,
    name: 'General',
    imgs:['','']
  }
]

const shoots = writable(shootsData)

export default shoots
