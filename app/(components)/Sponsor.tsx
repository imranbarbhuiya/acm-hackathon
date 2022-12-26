import Image, { type StaticImageData } from 'next/image';

import styles from './Sponsor.module.css';

import shadabLogo from '../(images)/shadab.jpeg';

interface SponsorCardProps {
	description: string;
	link: string;
	logo: StaticImageData | string;
	name: string;
}

const sponsorData: SponsorCardProps[] = [
	{
		name: 'Hotel Shadab',
		description:
			"Hotel Shadab is one of the best restaurants of all time in Hyderabad. Started in 1990, located in the old city of hyderabad, Hotel Shadab is well known for it's authentic, flavourful and award-winning hyderabadi biryani and hyderabadi haleem.",
		link: 'https://goo.gl/maps/wUEEStwZzF9WnP4E7',
		logo: shadabLogo,
	},
	{
		name: 'Hotel Shadab',
		description:
			"Hotel Shadab is one of the best restaurants of all time in Hyderabad. Started in 1990, located in the old city of hyderabad, Hotel Shadab is well known for it's authentic, flavourful and award-winning hyderabadi biryani and hyderabadi haleem.",
		link: 'https://goo.gl/maps/wUEEStwZzF9WnP4E7',
		logo: shadabLogo,
	},
];

function SponsorCard({ name, link, logo, description }: SponsorCardProps) {
	return (
		<div className={styles.card}>
			<a className={styles.cardImageLink} href={link} rel="noreferrer" target="_blank">
				<Image alt={name} className={styles.cardLogo} height={200} src={logo} />
			</a>
			<div className={styles.cardTextBox}>
				<div className={styles.cardTitle}>{name}</div>
				<div>{description}</div>
			</div>
		</div>
	);
}

export function Sponsors() {
	return (
		<div className={styles.root} id="sponsors">
			<div className={styles.title}>Our Sponsors</div>
			<div className={styles.cardWrapper}>
				{sponsorData.map((data) => (
					<SponsorCard key={data.name} {...data} />
				))}
			</div>
		</div>
	);
}
