import { writable } from 'svelte/store';

const data = {
	dimens: [
		'2500x3690',
		'2500x1694',
		'2033x3000',
		'2500x2500',
		'1132x1699',
		'2241x3000',
		'2295x3431',
		'1403x2197',
		'2241x3000',
	],
	imgs: [
		'/viral-photos/4.webp',
		'/viral-photos/2.webp',
		'/viral-photos/3.webp',
		'/viral-photos/6.webp',
		'/viral-photos/5.webp',
		'/viral-photos/7.webp',
		'/viral-photos/8.webp',
		'/viral-photos/9.webp',
		'/viral-photos/1.webp',
	]
};

const viralPhotos = writable(data);

export default viralPhotos;
