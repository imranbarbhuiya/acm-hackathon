import Image, { type StaticImageData } from 'next/image';

import styles from './Partners.module.css';

import shadabLogo from '../(images)/shadab.png';

const sponsorData: { logo: StaticImageData; name: string }[] = [{ name: 'Hotel Shadab', logo: shadabLogo }];

export function Partners() {
	return (
		<div className={styles.root} id="partners">
			{/* <div className={styles.title}>Technical Partners</div>
			<div className={styles.cardWrapper}>
				{sponsorData.map((data) => (
					<Image alt={data.name} className={styles.cardImage} height={200} key={data.name} src={data.logo} />
				))}
			</div> */}
			<div className={styles.title}>Food Partners</div>
			<div className={styles.cardWrapper}>
				{sponsorData.map((data) => (
					<Image alt={data.name} className={styles.cardImage} height={200} key={data.name} src={data.logo} />
				))}
			</div>
		</div>
	);
}
