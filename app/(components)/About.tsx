'use client';

import { ActionIcon, createStyles, keyframes } from '@mantine/core';
import { IconWorld, IconHome, IconMapPin, IconUser, IconBrandYoutube } from '@tabler/icons';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

import { topVariants, bottomVariants } from './variants';

const bounce = keyframes({
	'from, 20%, 53%, 80%, to': { transform: 'translate3d(0, 0, 0)' },
	'40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
	'70%': { transform: 'translate3d(0, -15px, 0)' },
	'90%': { transform: 'translate3d(0, -4px, 0)' },
});

const iconBoxData = [
	{
		icon: IconUser,
		name: 'Registrations',
		value: 8_652,
	},
	{
		icon: IconHome,
		name: 'Colleges',
		value: 692,
	},
	{
		icon: IconMapPin,
		name: 'Cities',
		value: 439,
	},
	{
		icon: IconWorld,
		name: 'Countries',
		value: 439,
	},
	{
		icon: IconBrandYoutube,
		name: 'YouTube Views',
		value: 439,
	},
];

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `120px ${theme.spacing.xl}px ${theme.spacing.xl * 2}px`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: theme.spacing.xl,
		minHeight: '100vh',
		position: 'relative',
	},
	title: {
		fontSize: 34,
		fontWeight: 900,
		[theme.fn.smallerThan('sm')]: {
			fontSize: 24,
		},
		textAlign: 'center',
		marginTop: theme.spacing.sm,

		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: 45,
			height: 2,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	description: {
		margin: '0 auto',
		textAlign: 'center',
		marginTop: theme.spacing.lg,
		fontSize: theme.fontSizes.lg,
		padding: '0 100px',

		'@media (max-width: 768px)': {
			padding: '0 10px',
			fontSize: theme.fontSizes.md,
		},
	},

	bold: {
		fontWeight: 900,
	},

	venuePart: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 300,

		'@media (max-width: 768px)': {
			gap: 100,
		},
	},

	venue: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},

	countPart: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30,
		flexWrap: 'wrap',
		marginTop: 20,
	},
	countBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	},

	countIcon: {
		animation: `${bounce} 3s ease-in-out infinite`,
		marginBottom: 10,
	},

	countText: {
		fontSize: theme.fontSizes.xl,
		fontWeight: 900,
	},
}));

export function About() {
	const { classes } = useStyles();
	const controls = useAnimation();
	const ref = useRef(null);
	const inView = useInView(ref);

	useEffect(() => {
		if (inView) {
			void controls.start('visible');
		} else {
			controls.stop();
			void controls.start('hidden');
		}
	}, [controls, inView]);

	const iconBoxes = iconBoxData.map((data, idx) => (
		<div className={classes.countBox} key={data.name}>
			<ActionIcon
				className={classes.countIcon}
				radius={100}
				size={100}
				sx={{
					animationDelay: `${idx * 0.1}s`,
				}}
				variant="gradient"
			>
				<data.icon size={50} />
			</ActionIcon>
			<div className={classes.countText}>
				<CountUp enableScrollSpy end={data.value} />
			</div>
			<div>{data.name}</div>
		</div>
	));

	return (
		<div className={classes.wrapper} id="about" ref={ref}>
			<motion.div animate={controls} className={classes.title} initial="hidden" variants={topVariants}>
				ABOUT THE EVENT
			</motion.div>
			<motion.div animate={controls} className={classes.description} initial="hidden" variants={bottomVariants()}>
				As a continuation of a legacy started by like-minded people, <span className={classes.bold}>ACM MJCET</span>{' '}
				aims to bring together the minds of programmers, designers, application developers, tech-geeks, and novices to
				the world of programming for the intensive development of a hack. At hackCBS, we provide a tranquil and
				welcoming environment where you will be completely free to develop a product, pick up new skills, and along with
				that, we'll also give you the chance to network with leaders in the hacker community. You've come to the right
				place if you haven't taken part in a hackathon before, as you are about to witness a series of events that will
				enlighten as well as enhance your skills. Experienced hackers must have been familiar with hackCBS, the biggest
				student-run hackathon in India.Over <span className={classes.bold}>1,000 hackers</span> from all over the
				country competed for the top spot last year, writing over <span className={classes.bold}>50,000 lines</span> of
				code in a single <span className={classes.bold}>24-hour period</span> and guzzling{' '}
				<span className={classes.bold}>more than 10,000</span>
				cups of coffee. But this time it’s going to be different, ‘coz this time it’s going to be even grander.
			</motion.div>
			<motion.div animate={controls} className={classes.venuePart} initial="hidden" variants={bottomVariants(100)}>
				<div className={classes.venue}>
					<div className={classes.bold}>Venue</div>
					<div>[In-Person] - ACM MJCET</div>
				</div>
				<div className={classes.venue}>
					<div className={classes.bold}>Dates</div>
					<div>1st - 3rd Jan 2022</div>
				</div>
			</motion.div>
			<motion.div animate={controls} className={classes.countPart} initial="hidden" variants={bottomVariants(150)}>
				{iconBoxes}
			</motion.div>
		</div>
	);
}
