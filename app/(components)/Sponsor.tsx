import Image, { type StaticImageData } from 'next/image';

import styles from './Sponsor.module.css';

import linodeLogo from '../(images)/linode.png';
import microsoftLogo from '../(images)/microsoft.png';

interface SponsorCardProps {
	description: string;
	link: string;
	logo: StaticImageData | string;
	name: string;
}

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
			<div className={styles.title}>OUR SPONSORS</div>
			<div className={styles.cardWrapper}>
				{sponsorData.map((data) => (
					<SponsorCard key={data.name} {...data} />
				))}
			</div>
		</div>
	);
}
