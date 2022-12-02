import { writable } from 'svelte/store';

const data = [
	{
		id: 1,
		name: 'free',
		artist: 'marwan pablo',
		image: './albums-covers/0-FREE+7.png'
	},
	{
		id: 2,
		name: 'florida',
		artist: 'marwan moussa',
		image: './albums-covers/1-A.TAREK001.jpg'
	},
	{
		id: 3,
		name: 'dorak gai',
		artist: 'wegz',
		image: './albums-covers/2-dorak+gai+fixed.jpg'
	},
	{
		id: 4,
		name: 'asyad el soot',
		artist: 'wegz',
		image: './albums-covers/3-WEGZART+HIGH+RES+4-3.jpg'
	},
	{
		id: 5,
		name: 'el zar',
		artist: 'wegz',
		image: './albums-covers/4-WEGZ+COVERART2.jpg'
	},
	{
		id: 6,
		name: 'mayhmeneesh',
		artist: 'mousv',
		image: './albums-covers/5-HAAAA.png'
	}
];
const albums = writable(data);

export default albums;
