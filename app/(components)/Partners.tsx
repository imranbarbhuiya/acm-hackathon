import Image, { type StaticImageData } from 'next/image';

import styles from './Partners.module.css';

import linodeLogo from '../(images)/linode.png';
import microsoftLogo from '../(images)/microsoft.png';

const sponsorData: { logo: StaticImageData; name: string }[] = [
	{ name: 'Microsoft', logo: microsoftLogo },
	{ name: 'Linode', logo: linodeLogo },
];

export function Partners() {
	return (
		<div className={styles.root} id="partners">
			<div className={styles.title}>Technical Partners</div>
			<div className={styles.cardWrapper}>
				{sponsorData.map((data) => (
					<Image alt={data.name} className={styles.cardImage} height={200} key={data.name} src={data.logo} />
				))}
			</div>
		</div>
	);
}
