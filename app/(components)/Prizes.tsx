'use client';

import { createStyles, Group, Text } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { topVariants } from './variants';

import firstImage from '../(images)/first.png';
import bestBeginner from '../(images)/hack-beginner.png';
import bestBlockchain from '../(images)/hack-blockchain.png';
import secondImage from '../(images)/second.png';
import thirdImage from '../(images)/third.png';

const useStyles = createStyles((theme, _params, getRef) => ({
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
		textAlign: 'left',
		marginTop: theme.spacing.sm,
		display: 'flex',
		flexDirection: 'column',

		[theme.fn.smallerThan('sm')]: {
			fontSize: 24,
		},
	},

	titleFirst: {
		fontWeight: 900,

		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: 45,
			height: 2,
		},
	},

	titleSecond: {
		fontStyle: 'italic',
		fontSize: 24,
	},

	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		width: 300,
		height: 250,
		padding: theme.spacing.md,
		borderRadius: theme.radius.sm,
		boxShadow: `0px 0px 8px ${theme.colors.gray[theme.colorScheme === 'dark' ? 6 : 3]}`,
		transition: 'transform 1s',
		marginTop: 100,
		cursor: 'pointer',

		[`&:hover .${getRef('circleImage')}`]: {
			transform: 'rotate(360deg)',
		},

		'&:hover': {
			transform: 'translateY(-30px)',
		},
	},

	cardLarge: {
		width: 500,
	},

	topCircle: {
		height: 130,
		width: 130,
		borderRadius: '50%',
		margin: '-90px auto 0',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		border: '18px solid #b4b9ff',
	},

	circleImage: {
		transition: 'transform 1s',
		ref: getRef('circleImage'),
	},

	textBox: {
		marginTop: 30,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 5,
	},

	bold: {
		fontWeight: 900,
	},
}));

export function Prizes() {
	const { classes, cx, theme } = useStyles();
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
		<div className={classes.wrapper} id="prizes" ref={ref}>
			<motion.div animate={controls} className={classes.title} initial="hidden" variants={topVariants}>
				<span className={classes.titleFirst}>PRIZES</span>
				<span className={classes.titleSecond}>
					worth <span className={classes.bold}>$100,000</span>
				</span>
			</motion.div>
			<Group position="center" spacing="xl">
				<div className={classes.card}>
					<div
						className={classes.topCircle}
						style={{
							border: '18px solid #ffd580',
						}}
					>
						<Image alt="First" className={classes.circleImage} height={50} src={firstImage} width={50} />
					</div>
					<Text align="center" mt="xl" size={30} weight={700}>
						First Prize
					</Text>

					<div className={classes.textBox}>
						<Text align="center" color="dimmed" size="md">
							Total Prize worth <span className={classes.bold}>$1000</span>
						</Text>
						<Text align="center" color="dimmed" size="md">
							Cash Prize of <span className={classes.bold}>INR 35,000</span>
						</Text>
					</div>
				</div>
				<div className={classes.card}>
					<div
						className={classes.topCircle}
						style={{
							border: '18px solid #add8e6',
						}}
					>
						<Image alt="Second" className={classes.circleImage} height={50} src={secondImage} width={50} />
					</div>
					<Text align="center" mt="xl" size={30} weight={700}>
						Second Prize
					</Text>

					<div className={classes.textBox}>
						<Text align="center" color="dimmed" size="sm">
							Total Prize worth <span className={classes.bold}>$1000</span>
						</Text>
						<Text align="center" color="dimmed" size="sm">
							Cash Prize of <span className={classes.bold}>INR 35,000</span>
						</Text>
					</div>
				</div>
				<div className={classes.card}>
					<div
						className={classes.topCircle}
						style={{
							border: '18px solid #ff7f7f',
						}}
					>
						<Image alt="Third" className={classes.circleImage} height={50} src={thirdImage} width={50} />
					</div>
					<Text align="center" mt="xl" size={30} weight={700}>
						Third Prize
					</Text>

					<div className={classes.textBox}>
						<Text align="center" color="dimmed" size="sm">
							Total Prize worth <span className={classes.bold}>$1000</span>
						</Text>
						<Text align="center" color="dimmed" size="sm">
							Cash Prize of <span className={classes.bold}>INR 35,000</span>
						</Text>
					</div>
				</div>
			</Group>

			<Group position="center" spacing={1.5 * theme.spacing.xl}>
				<div className={cx(classes.card, classes.cardLarge)}>
					<div className={classes.topCircle}>
						<Image
							alt="Best Hack Blockchain"
							className={classes.circleImage}
							height={50}
							src={bestBlockchain}
							width={50}
						/>
					</div>
					<Text align="center" mt="xl" size={30} weight={700}>
						Second Prize
					</Text>

					<div className={classes.textBox}>
						<Text align="center" color="dimmed" size="sm">
							Total Prize worth <span className={classes.bold}>$1000</span>
						</Text>
						<Text align="center" color="dimmed" size="sm">
							Cash Prize of <span className={classes.bold}>INR 35,000</span>
						</Text>
					</div>
				</div>
				<div className={cx(classes.card, classes.cardLarge)}>
					<div className={classes.topCircle}>
						<Image alt="Best Hack Beginner" className={classes.circleImage} height={50} src={bestBeginner} width={50} />
					</div>
					<Text align="center" mt="xl" size={30} weight={700}>
						Third Prize
					</Text>

					<div className={classes.textBox}>
						<Text align="center" color="dimmed" size="sm">
							Total Prize worth <span className={classes.bold}>$1000</span>
						</Text>
						<Text align="center" color="dimmed" size="sm">
							Cash Prize of <span className={classes.bold}>INR 35,000</span>
						</Text>
					</div>
				</div>
			</Group>
		</div>
	);
}
