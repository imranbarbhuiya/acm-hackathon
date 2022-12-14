'use client';

import { createStyles } from '@mantine/core';
import Image, { type StaticImageData } from 'next/image';

import linodeLogo from '../(images)/linode.png';
import microsoftLogo from '../(images)/microsoft.png';

interface SponsorCardProps {
	description: string;
	link: string;
	logo: StaticImageData | string;
	name: string;
}
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
		flexDirection: 'column',
		gap: 30,
		width: '100%',
	},

	card: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 50,

		':nth-child(even)': {
			flexDirection: 'row-reverse',
		},

		[theme.fn.smallerThan('lg')]: {
			flexDirection: 'column',

			':nth-child(even)': {
				flexDirection: 'column',
			},
		},
	},

	cardImageLink: {
		textDecoration: 'none',
	},

	cardLogo: {
		transition: '0.8s',

		'&:hover': {
			transform: 'scale(1.1)',
		},

		[theme.fn.smallerThan('lg')]: {
			width: 450,
			height: 'auto',
		},
	},

	cardTextBox: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: 500,
	},

	cardTitle: {
		fontSize: 32,
		fontWeight: 900,
	},
}));

const sponsorData: SponsorCardProps[] = [
	{
		name: 'Microsoft Corporation',
		description:
			'Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface lineup of touchscreen personal computers.',
		link: 'https://www.microsoft.com/en-us/',
		logo: microsoftLogo,
	},
	{
		name: 'Linode LLC',
		description:
			'Linode, LLC, an American privately-owned company (based in Philadelphia, Pennsylvania, United States), provides virtual private servers. Linode offers multiple products and services for its clients. Its flagship products are cloud-hosting services with multiple packages at different price points. As of November 2019, Linode offers five kinds of compute services geared towards specific needs of the customers like high memory requirements, dedicated CPU or GPU or general purpose usage. Linode Block Storage allows users to extend their server storage capacity with volumes on demand. Linode Backup allows customers to backup their servers on a daily, weekly, or monthly basis. Linode Manager and NodeBalancer both allow users to manage multiple server instances across a single system.',
		link: 'https://www.linode.com/',
		logo: linodeLogo,
	},
];

function SponsorCard({ name, link, logo, description }: SponsorCardProps) {
	const { classes } = useStyle();

	return (
		<div
			className={classes.card}
			// style={{
			// 	flexDirection: right ? 'row-reverse' : 'row',
			// }}
		>
			<a className={classes.cardImageLink} href={link} rel="noreferrer" target="_blank">
				<Image alt={name} className={classes.cardLogo} height={200} src={logo} />
			</a>
			<div className={classes.cardTextBox}>
				<div className={classes.cardTitle}>{name}</div>
				<div>{description}</div>
			</div>
		</div>
	);
}

export function Sponsors() {
	const { classes } = useStyle();

	return (
		<div className={classes.root} id="sponsors">
			<div className={classes.title}>OUR SPONSORS</div>
			<div className={classes.cardWrapper}>
				{sponsorData.map((data) => (
					<SponsorCard key={data.name} {...data} />
				))}
			</div>
		</div>
	);
}
