import { createStyles, Group, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
	noop: {
		height: 100,
		width: '100%',
	},
	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,
		position: 'fixed',
		bottom: 0,
		height: 60,
		width: '100%',
		marginTop: 10,
		borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
		zIndex: -1,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},
}));

export function Footer() {
	const { classes } = useStyles();

	return (
		<div>
			<div className={classes.noop} />
			<div className={classes.inner}>
				ACM MJCET
				<Group noWrap position="right" spacing="xs">
					<ActionIcon radius="xl" size="lg" variant="default">
						<IconBrandTwitter size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon radius="xl" size="lg" variant="default">
						<IconBrandYoutube size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon radius="xl" size="lg" variant="default">
						<IconBrandInstagram size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</div>
		</div>
	);
}
