'use client';

import { createStyles, Tabs, Text, Timeline, type TabsProps } from '@mantine/core';

const useStyle = createStyles((theme) => ({
	root: {
		marginTop: 20,
		paddingTop: 120,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 50,
	},

	title: {
		fontSize: 50,
		fontWeight: 900,
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
}));

function StyledTabs(props: TabsProps) {
	return (
		<Tabs
			styles={(theme) => ({
				tab: {
					...theme.fn.focusStyles(),
					backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
					color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
					border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4]}`,
					padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
					cursor: 'pointer',
					fontSize: theme.fontSizes.sm,
					display: 'flex',
					alignItems: 'center',
					marginBottom: 40,

					'&:disabled': {
						opacity: 0.5,
						cursor: 'not-allowed',
					},

					'&:not(:first-of-type)': {
						borderLeft: 0,
					},

					'&:first-of-type': {
						borderTopLeftRadius: theme.radius.md,
						borderBottomLeftRadius: theme.radius.md,
					},

					'&:last-of-type': {
						borderTopRightRadius: theme.radius.md,
						borderBottomRightRadius: theme.radius.md,
					},

					'&[data-active]': {
						backgroundColor: theme.colors.blue[7],
						borderColor: theme.colors.blue[7],
						color: theme.white,
					},
				},

				tabIcon: {
					marginRight: theme.spacing.xs,
					display: 'flex',
					alignItems: 'center',
				},

				tabsList: {
					display: 'flex',
				},
			})}
			unstyled
			{...props}
		/>
	);
}

export function Schedule() {
	const { classes } = useStyle();

	return (
		<div className={classes.root} id="schedule">
			<div className={classes.title}>Schedule</div>
			<StyledTabs defaultValue="1">
				{/* <Tabs.List grow>
					<Tabs.Tab value="1">1st - Jan</Tabs.Tab>
					<Tabs.Tab value="2">2nd - Jan</Tabs.Tab>
					<Tabs.Tab value="3">3rd - Jan</Tabs.Tab>
				</Tabs.List> */}

				<div>
					<Timeline active={0} bulletSize={18} lineWidth={4}>
						<Timeline.Item title="Reporting Time">
							<Text mt={4} size="xs">
								5:00 AM - 6:00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Start Hacking">
							<Text mt={4} size="xs">
								6:00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Breakfast Snacks">
							<Text mt={4} size="xs">
								7:00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Keynote session">
							<Text mt={4} size="xs">
								8:00 AM - 8:30 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Judgement: Round 1">
							<Text mt={4} size="xs">
								10:00 AM - 11:00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Mentorship: Round 1">
							<Text mt={4} size="xs">
								12:00 PM - 1:00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Lunch">
							<Text mt={4} size="xs">
								1:30 PM - 2:30 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Judgement: Round 2">
							<Text mt={4} size="xs">
								05:00 PM - 06:00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Announcing the Finalists">
							<Text mt={4} size="xs">
								7:00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Dinner">
							<Text mt={4} size="xs">
								7:30 PM - 8:30 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Judgement: Round 3">
							<Text mt={4} size="xs">
								9:30 PM - 10:00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Results Announcement">
							<Text mt={4} size="xs">
								10:30 PM
							</Text>
						</Timeline.Item>
					</Timeline>
				</div>
				{/* <Tabs.Panel value="2">
					<Timeline active={5} bulletSize={18} lineWidth={4}>
						<Timeline.Item title="Refreshments">
							<Text mt={4} size="xs">
								12.00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Fun activity">
							<Text mt={4} size="xs">
								06.00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Breakfast">
							<Text mt={4} size="xs">
								08.00 AM - 09.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Lunch">
							<Text mt={4} size="xs">
								01.00 PM - 02.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Workshop session 3 & 4">
							<Text mt={4} size="xs">
								02.00 PM - 03.30 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Hackathon description and problem statements">
							<Text mt={4} size="xs">
								03.30 PM - 04.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Kick off - Hackathon Starts">
							<Text mt={4} size="xs">
								04.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Day 2 Ends">
							<Text mt={4} size="xs">
								06.00 PM
							</Text>
						</Timeline.Item>
					</Timeline>
				</Tabs.Panel>
				<Tabs.Panel value="3">
					<Timeline active={5} bulletSize={18} lineWidth={4}>
						<Timeline.Item title="Day 3 Starts">
							<Text mt={4} size="xs">
								10.00 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Keynote session">
							<Text mt={4} size="xs">
								11.00 AM - 11.30 AM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Workshop Session 1 & 2">
							<Text mt={4} size="xs">
								11.30 AM - 01.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Lunch">
							<Text mt={4} size="xs">
								01.00 PM - 02.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Workshop session 3 & 4">
							<Text mt={4} size="xs">
								02.00 PM - 03.30 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Hackathon description and problem statements">
							<Text mt={4} size="xs">
								03.30 PM - 04.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Result announcements">
							<Text mt={4} size="xs">
								04.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Hackathon wraps">
							<Text mt={4} size="xs">
								06.00 PM
							</Text>
						</Timeline.Item>
					</Timeline>
				</Tabs.Panel> */}
			</StyledTabs>
		</div>
	);
}
