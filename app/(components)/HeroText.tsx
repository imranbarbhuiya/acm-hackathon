'use client';
import { createStyles, Title, Text, Button, Container } from '@mantine/core';

import { Dots } from './Dots';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		paddingTop: 260,
		paddingBottom: 80,
		minHeight: '100vh',
		width: '100vw',
		margin: 0,
		background: 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("/space.jpg")',
		backgroundSize: 'cover',

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
		<div className={classes.wrapper}>
			<Dots className={classes.dots} style={{ left: 60, top: 90 }} />
			<Dots className={classes.dots} style={{ left: 120, top: 90 }} />
			<Dots className={classes.dots} style={{ left: 60, top: 230 }} />
			<Dots className={classes.dots} style={{ right: 60, top: 340 }} />

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
					<Button className={classes.control} size="lg">
						Join Now
					</Button>
				</div>
			</div>
		</div>
	);
}
