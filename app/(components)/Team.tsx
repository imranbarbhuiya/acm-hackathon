'use client';

import { createStyles, Card, Group, Text, Tooltip, ActionIcon } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons';
import Image from 'next/image';

interface SocialMediaData {
	icon: React.ReactNode;
	link: string;
	tooltip: string;
}

interface TeamCardProps {
	avatar: string;
	description: string;
	socialMedia: SocialMediaData[];
	username: string;
}
const useStyle = createStyles((theme) => ({
	root: {
		marginTop: 20,
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
	group: {
		justifyContent: 'center',
	},
	cardImage: {
		borderRadius: '50%',
	},
}));

const teamData: TeamCardProps[] = [
	{
		avatar: 'https://avatars.githubusercontent.com/u/69213593',
		socialMedia: [
			{
				icon: (
					<ActionIcon radius="xl" size="lg" variant="default">
						<IconBrandGithub size={18} stroke={1.5} />
					</ActionIcon>
				),
				link: 'https://github.com/legendhimself',
				tooltip: 'Github',
			},
		],
		username: 'Voxelli',
		description: 'Organizer',
	},
];

function TeamCard({ username, avatar, socialMedia, description }: TeamCardProps) {
	const { classes } = useStyle();

	return (
		<Card
			p="xl"
			radius="md"
			sx={{ width: 210, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
			withBorder
		>
			<Image alt={username} className={classes.cardImage} height={80} src={avatar} width={80} />
			<Text align="center" mt="sm" size="lg" weight={500}>
				{username}
			</Text>
			<Text align="center" mt="sm" size="md">
				{description}
			</Text>
			<Group mt="md" position="center" spacing={30}>
				{socialMedia.map((data, index) => (
					<Tooltip key={index} label={data.tooltip}>
						<a href={data.link} rel="noreferrer" target="_blank">
							{data.icon}
						</a>
					</Tooltip>
				))}
			</Group>
		</Card>
	);
}

export function Team() {
	const { classes } = useStyle();

	return (
		<div className={classes.root}>
			<div className={classes.title}>MEET THE TEAM</div>
			<Group className={classes.group}>
				{teamData.map((data, index) => (
					<TeamCard key={index} {...data} />
				))}
			</Group>
		</div>
	);
}
