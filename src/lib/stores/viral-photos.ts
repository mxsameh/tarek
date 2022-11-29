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
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663887733-CZ1PN3UOAQWTCQHOJ2SM/9.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664394222-2MTKQI0DU19AE5UXHRN2/24.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664204978-RTGJ7WZHJ2R0FL5UAP23/1.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663886625-HA8K65J44JYKH5XFHFS8/TAREK321.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664328366-HCNOK0SLGCA61HPC3J06/A.TAREK001.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664202934-SH2URC6U04ILU0NHLN99/2.jpg',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663870557-D164CSQYB5QQ4PADRFMJ/TAREK104.JPG',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643663837311-2MXTUK4K3U750HFDT9R4/AHMED-003.JPG',
		'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1643664358381-QM0SKDYD9881JWQJDQP0/A.TAREK002-2.jpg'
	]
};

const viralPhotos = writable(data);

export default viralPhotos;
