'use client';

import { createStyles } from '@mantine/core';
import Image, { type StaticImageData } from 'next/image';

import linodeLogo from '../(images)/linode.png';
import microsoftLogo from '../(images)/microsoft.png';

const useStyle = createStyles((theme) => ({
	root: {
		marginTop: 20,
		paddingTop: 120,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
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
	cardWrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 30,
		flexWrap: 'wrap',

		[theme.fn.smallerThan('lg')]: {
			paddingLeft: 20,
			paddingRight: 20,
		},
	},

	cardImage: {
		transition: '0.8s',

		'&:hover': {
			transform: 'scale(1.1)',
		},

		[theme.fn.smallerThan('lg')]: {
			width: 450,
			height: 'auto',
		},
	},
}));

const sponsorData: { logo: StaticImageData; name: string }[] = [
	{ name: 'Microsoft', logo: microsoftLogo },
	{ name: 'Linode', logo: linodeLogo },
];

export function Partners() {
	const { classes } = useStyle();

	return (
		<div className={classes.root} id="partners">
			<div className={classes.title}>Technical Partners</div>
			<div className={classes.cardWrapper}>
				{sponsorData.map((data) => (
					<Image alt={data.name} className={classes.cardImage} height={200} key={data.name} src={data.logo} />
				))}
			</div>
		</div>
	);
}
