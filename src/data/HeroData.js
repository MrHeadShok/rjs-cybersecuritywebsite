const hero1 = require('../rsc/deal.jpg');
const hero2 = require('../rsc/connection.jpg');
const hero3 = require('../rsc/stairs.jpg');


export const heroOne = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Brand on high demand since 2010',
	},
	headline: "We've been in business for more than 10 years",
	description: 'We have been through it all to build effeicient systems and servers.',
	buttonLabel: 'Find More',
	imgStart: 'start',
	img: hero1,
	start: 'true',
};

export const heroTwo = {
	reverse: false,
	inverse: false,
	topLine: {
		text: 'Implement & Use',
	},
	headline: 'The best practices to get the best out of our tech',
	description: 'Our clients have had the best experience working with us',
	buttonLabel: 'View Project',

	linkTo: '/more',
	imgStart: 'start',
	img: hero2,
	start: 'true',
};

export const heroThree = {
	reverse: true,
	inverse: true,
	topLine: {
		text: 'Highly reputed brand',
	},
	headline: 'Why not us? ',
	description:
		'Our 9 year experience have allowed us to use the most innovative technologies and methodologies',
	buttonLabel: 'View Project',

	linkTo: '/download',
	imgStart: '',
	img: hero3,
	start: 'true',
};

