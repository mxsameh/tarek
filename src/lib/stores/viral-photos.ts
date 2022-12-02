import { writable } from 'svelte/store';

const data = {
	dimens: [
		'2500x3690',
		'2500x1694',
		'2241x3000',
		'1403x2197',
		'2500x2500',
		'2033x3000',
		'2295x3431',
		'1132x1699',
		'2241x3000'
	],
	imgs: [
		'/viral-photos/9.jpg',
		'/viral-photos/24.jpg',
		'/viral-photos/1.jpg',
		'/viral-photos/TAREK321.jpg',
		'/viral-photos/A.TAREK001.jpg',
		'/viral-photos/2.jpg',
		'/viral-photos/TAREK104.JPG',
		'/viral-photos/AHMED-003.JPG',
		'/viral-photos/A.TAREK002-2.jpg'
	]
};

const viralPhotos = writable(data);

export default viralPhotos;
