import Image, { type StaticImageData } from 'next/image';

import styles from './Theme.module.css';

import finTechImage from '../(images)/fintech.png';

interface ThemeBoxProps {
	image: StaticImageData;
	title: string;
}

const themes: ThemeBoxProps[] = [
	{
		title: 'FinTech',
		image: finTechImage,
	},
	{
		title: 'FinTech',
		image: finTechImage,
	},
	{
		title: 'FinTech',
		image: finTechImage,
	},
	{
		title: 'FinTech',
		image: finTechImage,
	},
];

function ThemeBox({ image, title }: ThemeBoxProps) {
	return (
		<div className={styles.themeBox}>
			<Image alt={title} className={styles.themeImage} height={280} src={image} />
			<div className={styles.themeTitle}>{title}</div>
		</div>
	);
}

export function Themes() {
	return (
		<div className={styles.root} id="themes">
			<div className={styles.title}>THEMES</div>
			<div className={styles.themes}>
				{themes.map((theme, idx) => (
					<ThemeBox key={idx} {...theme} />
				))}
			</div>
		</div>
	);
}
