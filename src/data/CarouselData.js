const topclient=require('../rsc/topclient.jpg');
const client4=require('../rsc/client4.jpg');
const servers=require('../rsc/servers.jpg');
const team= require('../rsc/team.jpg');
const deal=require('../rsc/deal.jpg')

export const data = [
	{
		title: 'Customer Satisfaction',
		description:
			'Our clients have been onboard for years, we have got one of the fastest support in the fields with record resolution time.',
		image: topclient,
	},
	{
		title: 'All about quality',
		description: 'Learn about our KPIs and how we measure our success',
		image: client4,
	},
	{
		title: 'Solid Team',
		description: 'Providing such quality requires the right team to get the job done.',
		image: team,
	},
	{
		title: 'Effective solutions',
		description: 'Looking for more details about the tech we use ?',
		image: servers,
	},
	{
		title: 'Loyalty',
		description: 'Become one, join us !',
		image: deal,
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
    autoplay:true,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};