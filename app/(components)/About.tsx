'use client';

import { createStyles } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { leftVariants, rightVariants } from './variants';

const useStyles = createStyles((theme) => ({
	wrapper: {
		padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
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
			marginTop: theme.spacing.sm,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	description: {
		margin: 'auto',
		textAlign: 'center',
		marginTop: theme.spacing.lg,
		fontSize: theme.fontSizes.lg,
		padding: '0 100px',
	},

	bold: {
		fontWeight: 900,
	},

	venuePart: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		'@media (max-width: 768px)': {
			flexDirection: 'column',
		},
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

	return (
		<div className={classes.wrapper} id="faq" ref={ref}>
			<motion.div animate={controls} className={classes.title} initial="hidden" variants={leftVariants}>
				ABOUT THE EVENT
			</motion.div>
			<motion.div animate={controls} className={classes.description} initial="hidden" variants={rightVariants}>
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
		</div>
	);
}
