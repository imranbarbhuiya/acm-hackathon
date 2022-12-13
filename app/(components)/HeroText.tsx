'use client';
import { createStyles, Text, Button, Container } from '@mantine/core';
import Image from 'next/image';

import heroImage from '../heroLogo.png';

const useStyles = createStyles((theme) => ({
	wrapper: {
		position: 'relative',
		paddingTop: 120,
		paddingBottom: 80,
		minHeight: '100vh',
		width: '100vw',
		margin: 0,
		background: 'linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("/space.jpg")',
		backgroundSize: 'cover',

		'@media (max-width: 755px)': {
			paddingTop: 50,
			paddingBottom: 60,
		},
	},

	inner: {
		position: 'relative',
		zIndex: 1,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',

		'@media (max-width: 900px)': {
			gap: 100,
		},
	},

	heroImage: {
		'@media (max-width: 900px)': {
			width: 750,
			height: 220,
		},

		'@media (max-width: 755px)': {
			marginTop: 100,
			width: 550,
			height: 200,
		},
	},

	date: {
		textAlign: 'center',
		marginTop: -50,

		'@media (max-width: 520px)': {
			marginTop: 0,
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
		'@media (max-width: 520px)': {
			height: 42,
			fontSize: theme.fontSizes.md,
		},
	},
}));

export function HeroText() {
	const { classes, theme } = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<Image alt="ACM Logo" className={classes.heroImage} height={300} src={heroImage} />

				<Container p={0} size={600}>
					<Text className={classes.date} size={1.5 * theme.fontSizes.xl}>
						1st Jan 2023
					</Text>
					<div className={classes.controls}>
						<Button className={classes.control} size="lg">
							Join Now
						</Button>
					</div>
				</Container>
			</div>
		</div>
	);
}
