'use client';

import { Carousel as MantineCarousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useRef } from 'react';

const urls = [
	'https://plus.unsplash.com/premium_photo-1669357657857-2b63127805f2',
	'https://images.unsplash.com/photo-1596787493867-c250a8216d5b',
];

export function Carousel() {
	const autoplay = useRef(Autoplay({ delay: 2_000 }));

	const images = urls.map((url, idx) => (
		<MantineCarousel.Slide key={idx}>
			<Image alt="Carousel Image" fill src={url} />
		</MantineCarousel.Slide>
	));

	return (
		<MantineCarousel
			controlSize={50}
			height="85vh"
			loop
			mx="auto"
			/* eslint-disable react/jsx-handler-names */
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
			/* eslint-enable react/jsx-handler-names */
			plugins={[autoplay.current]}
			slideGap="md"
			sx={{
				maxWidth: 900,
				position: 'relative',
			}}
			withIndicators
		>
			{images}
		</MantineCarousel>
	);
}
