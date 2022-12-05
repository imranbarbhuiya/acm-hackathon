'use client';
import { createStyles, Title, Text, Button, Container } from '@mantine/core';

import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		paddingTop: 140,
		paddingBottom: 80,
		minHeight: '100vh',

		'@media (max-width: 755px)': {
			paddingTop: 80,
			paddingBottom: 60,
		},
	},

	inner: {
		position: 'relative',
		zIndex: 1,
	},

	dots: {
		position: 'absolute',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

		'@media (max-width: 755px)': {
			display: 'none',
		},
	},

	dotsLeft: {
		left: 0,
		top: 0,
	},

	title: {
		textAlign: 'center',
		fontWeight: 800,
		fontSize: 80,
		letterSpacing: -1,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		marginBottom: theme.spacing.xs,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,

		'@media (max-width: 520px)': {
			fontSize: 40,
			textAlign: 'left',
		},
	},

	highlight: {
		color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
	},

	date: {
		textAlign: 'center',

		'@media (max-width: 520px)': {
			textAlign: 'left',
			fontSize: theme.fontSizes.md,
		},
	},

	controls: {
		marginTop: theme.spacing.lg,
		display: 'flex',
		justifyContent: 'center',

		'@media (max-width: 520px)': {
			flexDirection: 'column',
		},
	},

	control: {
		'&:not(:first-of-type)': {
			marginLeft: theme.spacing.md,
		},

		'@media (max-width: 520px)': {
			height: 42,
			fontSize: theme.fontSizes.md,

			'&:not(:first-of-type)': {
				marginTop: theme.spacing.md,
				marginLeft: 0,
			},
		},
	},
}));

export function HeroText() {
	const { classes } = useStyles();

	return (
		<Container className={classes.wrapper} size={1_400}>
			<Dots className={classes.dots} style={{ left: 0, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 0 }} />
			<Dots className={classes.dots} style={{ left: 0, top: 140 }} />
			<Dots className={classes.dots} style={{ right: 0, top: 60 }} />

			<div className={classes.inner}>
				<Title className={classes.title}>
					Hackathon by{' '}
					<Text className={classes.highlight} component="span" inherit>
						ACM MJCET
					</Text>
				</Title>

				<Container p={0} size={600}>
					<Text className={classes.date} color="dimmed" size="xl">
						1st Jan 2023
					</Text>
				</Container>
				<div className={classes.controls}>
					<Button className={classes.control} color="gray" size="lg" variant="default">
						Join Now
					</Button>
					<Button className={classes.control} size="lg">
						Login
					</Button>
				</div>
			</div>
		</Container>
	);
}
