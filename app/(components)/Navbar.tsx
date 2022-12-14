'use client';

import { createStyles, Header, Container, Group, Burger, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';

import logoImage from '../(images)/logo.png';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
	root: {
		position: 'fixed',
		zIndex: 100,
	},

	dropdown: {
		position: 'absolute',
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
	},

	navImageLink: {
		textDecoration: 'none',
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md,
		},
	},

	progressBar: {
		position: 'fixed',
		top: HEADER_HEIGHT - 5,
		left: 0,
		right: 0,
		height: 5,
		background: theme.primaryColor,
		transformOrigin: '0%',
	},
}));

const links: { label: string; link: string }[] = [
	{
		label: 'About',
		link: '#about',
	},
	{
		label: 'Prizes',
		link: '#prizes',
	},
	{
		label: 'Themes',
		link: '#themes',
	},
	{
		label: 'Schedule',
		link: '#schedule',
	},
	{
		label: 'Sponsors',
		link: '#sponsors',
	},
	{
		label: 'Partners',
		link: '#partners',
	},
	{
		label: 'Team',
		link: '#team',
	},
	{
		label: 'FAQ',
		link: '#faq',
	},
];

export function Navbar() {
	const [opened, { toggle, close }] = useDisclosure(false);
	const { classes } = useStyles();
	const { scrollYProgress } = useScroll();

	const items = links.map((link) => (
		<a className={classes.link} href={link.link} key={link.label} onClick={close}>
			{link.label}
		</a>
	));

	return (
		<Header className={classes.root} height={HEADER_HEIGHT}>
			<Container className={classes.header}>
				<a className={classes.navImageLink} href="#">
					<Image alt="ACM MJCET LOGO" height={30} src={logoImage} width={125} />
				</a>
				<Group className={classes.links} spacing={5}>
					{items}
				</Group>

				<Group className={classes.burger}>
					<Burger onClick={toggle} opened={opened} size="sm" />
				</Group>
				<Transition duration={200} mounted={opened} transition="pop-top-right">
					{(styles) => (
						<Paper className={classes.dropdown} style={styles} withBorder>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
			<motion.div className={classes.progressBar} style={{ scaleX: scrollYProgress }} />
		</Header>
	);
}
