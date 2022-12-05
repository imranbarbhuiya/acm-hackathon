'use client';
import { createStyles, Container, Accordion } from '@mantine/core';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { leftVariants, rightVariants } from './variants';

const useStyles = createStyles((theme, _params, getRef) => {
	const icon = getRef('control');

	return {
		wrapper: {
			paddingTop: theme.spacing.xl * 2,
			paddingBottom: theme.spacing.xl * 2,
			position: 'relative',
			minHeight: '100vh',
		},

		title: {
			fontSize: 52,
			fontFamily: `Greycliff CF, ${theme.fontFamily}`,
			marginBottom: theme.spacing.xl * 1.5,
			textAlign: 'center',
		},

		item: {
			borderBottom: 0,
			borderRadius: theme.radius.md,
			boxShadow: theme.shadows.lg,
			overflow: 'hidden',

			border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
		},

		control: {
			fontSize: theme.fontSizes.lg,
			padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
		},

		content: {
			paddingLeft: theme.spacing.xl,
			lineHeight: 1.6,
		},

		icon: {
			ref: icon,
			marginLeft: theme.spacing.md,
		},

		itemOpened: {
			[`& .${icon}`]: {
				transform: 'rotate(45deg)',
			},
		},

		button: {
			display: 'block',
			marginTop: theme.spacing.md,

			'@media (max-width: 755px)': {
				display: 'block',
				width: '100%',
			},
		},
	};
});

export function Faq() {
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
			<Container size="lg">
				<motion.div animate={controls} className={classes.title} initial="hidden" variants={rightVariants}>
					Frequently Asked Questions
				</motion.div>

				<motion.div animate={controls} initial="hidden" variants={leftVariants}>
					<Accordion
						chevronPosition="right"
						chevronSize={50}
						defaultValue="reset-password"
						disableChevronRotation
						variant="separated"
					>
						<Accordion.Item className={classes.item} value="reset-password">
							<Accordion.Control>What is a hackathon?</Accordion.Control>
							<Accordion.Panel>
								A hackathon can be best described as an “invention marathon”, or in simple words hackathons are about
								bringing your crazy ideas to reality. It’s an event where any tech-enthusiast, regardless of their
								individual field can come & participate to learn, build & share their creations over the course of a
								weekend, in a relaxed & productive environment. Hackathons are simply a venue for self-expression &
								creativity, where people come together & transform their thoughts into reality, through technology.
							</Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item className={classes.item} value="another-account">
							<Accordion.Control>How big a team can be?</Accordion.Control>
							<Accordion.Panel>The minimum team size is two and the maximum team size is four.</Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item className={classes.item} value="newsletter">
							<Accordion.Control>Who all can participate?</Accordion.Control>
							<Accordion.Panel>
								This is a student hackathon and only students are allowed to participate. You’ll be required to verify
								at the event by showing your student ID card.
							</Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item className={classes.item} value="credit-card">
							<Accordion.Control>
								Do I need to have any specific qualifications to be a participant for the hackathon?
							</Accordion.Control>
							<Accordion.Panel>
								If you love to code, you are more than welcome to participate in the hackathon.
							</Accordion.Panel>
						</Accordion.Item>

						<Accordion.Item className={classes.item} value="payment">
							<Accordion.Control>I'm not a citizen of India. Can I participate?</Accordion.Control>
							<Accordion.Panel>
								There is only one eligibility for this hackathon and that is Motivation. If you love to code and have an
								innovative brain then you are more than welcome. So yes, If you are an International Participant, You
								are always welcome to our hackathon.
							</Accordion.Panel>
						</Accordion.Item>
					</Accordion>
				</motion.div>
			</Container>
		</div>
	);
}
