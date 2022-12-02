import { writable } from 'svelte/store';

const data = [
	{
		id: 1,
		name: 'free',
		artist: 'marwan pablo',
		image: './albums-covers/1.webp'
	},
	{
		id: 2,
		name: 'florida',
		artist: 'marwan moussa',
		image: './albums-covers/2.webp'
	},
	{
		id: 3,
		name: 'dorak gai',
		artist: 'wegz',
		image: './albums-covers/3.webp'
	},
	{
		id: 4,
		name: 'asyad el soot',
		artist: 'wegz',
		image: './albums-covers/4.webp'
	},
	{
		id: 5,
		name: 'el zar',
		artist: 'wegz',
		image: './albums-covers/5.webp'
	},
	{
		id: 6,
		name: 'mayhmeneesh',
		artist: 'mousv',
		image: './albums-covers/6.webp'
	}
];
const albums = writable(data);

export default albums;
