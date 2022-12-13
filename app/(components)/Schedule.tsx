'use client';

import { createStyles, Tabs, Text, Timeline, type TabsProps } from '@mantine/core';

const useStyle = createStyles((theme) => ({
	root: {
		marginTop: 20,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
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
				<Tabs.List grow>
					<Tabs.Tab value="1">1st - Jan</Tabs.Tab>
					<Tabs.Tab disabled value="2">
						2nd - Jan
					</Tabs.Tab>
					<Tabs.Tab disabled value="3">
						3rd - Jan
					</Tabs.Tab>
				</Tabs.List>

				<Tabs.Panel value="1">
					<Timeline active={5} bulletSize={18} lineWidth={4}>
						<Timeline.Item title="Event Starts">
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
						<Timeline.Item title="Kick off - Hackathon Starts">
							<Text mt={4} size="xs">
								04.00 PM
							</Text>
						</Timeline.Item>
						<Timeline.Item title="Day 1 Ends">
							<Text mt={4} size="xs">
								06.00 PM
							</Text>
						</Timeline.Item>
					</Timeline>
				</Tabs.Panel>
				<Tabs.Panel value="2">2</Tabs.Panel>
				<Tabs.Panel value="3">3</Tabs.Panel>
			</StyledTabs>
		</div>
	);
}
