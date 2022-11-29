import { writable } from 'svelte/store';

const projectsData = [
	// {
	// 	name : 'exhibitions',
	// 	shoots: ['GRADUATION // 2021', 'GRADUATION Press', 'Photos']
	// },
	{
		id: 1,
		name: 'commissioned projects',
		shoots: [
			{
				name: 'Pepsi Black',
				link: '/shoots/1',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592154457702-JLIJK8STYUPGC164IW7Z/TAREK123-2.JPG?format=500w'
			},
			{
				name: "Adidas 'Watch Us Move'",
				link: '/shoots/2',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632759176142-UHS9PAQM4YBGGY0NPDS0/TAREK749.jpg?format=500w'
			},
			{
				name: `'Florida' // Marwan Moussa`,
				link: '/shoots/3',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1616626787994-WBUGEOMB8WVY4H6VGUDG/TAREK190.jpg?format=500w'
			},
			{
				name: `Ehab Amin for Red Bull`,
				link: '/shoots/4',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632757963070-9UBHPUCT1I0VCX4S8XDG/TAREK973.jpg?format=500w'
			},
			{
				name: `'Free' // Marwan Pablo`,
				link: '/shoots/5',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1592150835731-ODUGJGSNV89XJS8VOYBV/TAREK73.JPG?format=500w'
			},
			{
				name: `'Dorak Gai' // Wegz`,
				link: '/shoots/6',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1591992882747-633S2OUL8ZS6U9MLDXW4/TAREK024.JPG?format=500w'
			},
			{
				name: 'Mousv In Ismalia',
				link: '/shoots/7',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632760038698-33P4Y0GWLU72G4X1OW07/TAREK966.jpg?format=500w'
			},
			{
				name: 'PUBG x Wegz',
				link: '/shoots/8',
				img: 'https://images.squarespace-cdn.com/content/v1/5b27a34be17ba335ea8d1983/1632760271831-S7REQXX9F9RVZYWA5HDH/TAREK451.jpg?format=500w'
			},
			{
				name : 'BRAND NAME BLANK',
				link : '/shoots/9',
				img : ''
			},
			{
				name: 'One & Four Studio AW20',
				link: '/shoots/10',
				img: ''
			},
			{
				name: 'Rebel Cairo',
				link: '/shoots/11',
				img: ''
			},
			{
				name: 'Pier 88 x LUCID',
				link: '/shoots/12',
				img: ''
			},
			{
				name: 'Suzanne SS19',
				link: '/shoots/13',
				img: ''
			},
			{
				name: 'UNITY',
				link: '/shoots/14',
				img: ''
			}
		]
	},
	{
		id: 2,
		name: 'personal projects',
		shoots: [
			{
				name: 'Gas Stations',
				link: '/shoots/15',
				img: ''
			},
			{
				name: 'CAIRO',
				link: '/shoots/16',
				img: ''
			},
			{
				name: 'Alexandria',
				link: '/shoots/17',
				img: ''
			},
			{
				name: '2 AM with Marwan Pablo',
				link: '/shoots/18',
				img: ''
			},
			{
				name: 'OVERSIZED I',
				link: '/shoots/19',
				img: ''
			},
			{
				name: 'OVERSIZED II',
				link: '/shoots/20',
				img: ''
			},
			{
				name: 'OVERSIZED III',
				link: '/shoots/21',
				img: ''
			}
		]
	},
	{
		id: 3,
		name: 'live music',
		shoots: [
			{
				name: 'Marwan Pablo',
				link: '/shoots/22',
				img: ''
			},
			{
				name: 'Redbull SoundClash 19',
				link: '/shoots/23',
				img: ''
			},
			{
				name: 'Disco Misr',
				link: '/shoots/24',
				img: ''
			},
			{
				name: 'Sandbox Festival 19',
				link: '/shoots/25',
				img: ''
			},
			{
				name: 'General',
				link: '/shoots/26',
				img: ''
			}
		]
	}
];



const projects = writable(projectsData);

export default projects;
