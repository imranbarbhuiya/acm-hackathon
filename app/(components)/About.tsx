'use client';
import { createStyles, Title, Container, Text } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { rightVariants } from './variants';

const useStyles = createStyles((theme) => ({
	title: {
		fontSize: 34,
		fontWeight: 900,
		[theme.fn.smallerThan('sm')]: {
			fontSize: 24,
		},

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
	},

	card: {
		border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: 45,
			height: 2,
			marginTop: theme.spacing.sm,
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
		<motion.div animate={controls} id="faq" initial="hidden" ref={ref} variants={rightVariants}>
			<Container py="xl" size="xl">
				<Title align="center" className={classes.title} mt="sm" order={2}>
					ABOUT THE EVENT
				</Title>
				<Text align="center" className={classes.description} mt="lg">
					As a continuation of a legacy started by like-minded people, hackCBS 5.0 aims to bring together the minds of
					programmers, designers, application developers, tech-geeks, and novices to the world of programming for the
					intensive development of a hack. At hackCBS, we provide a tranquil and welcoming environment where you will be
					completely free to develop a product, pick up new skills, and along with that, we'll also give you the chance
					to network with leaders in the hacker community. You've come to the right place if you haven't taken part in a
					hackathon before, as you are about to witness a series of events that will enlighten as well as enhance your
					skills. Experienced hackers must have been familiar with hackCBS, the biggest student-run hackathon in
					India.Over 1,000 hackers from all over the country competed for the top spot last year, writing over 50,000
					lines of code in a single 24-hour period and guzzling more than 10,000 cups of coffee. But this time it’s
					going to be different, ‘coz this time it’s going to be even grander.
				</Text>
			</Container>
		</motion.div>
	);
}
