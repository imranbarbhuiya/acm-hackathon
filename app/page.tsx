'use client';

import { About } from './(components)/About';
import { Carousel } from './(components)/Carousel';
import { Faq } from './(components)/Faq';
import { Footer } from './(components)/Footer';
import { HeroText } from './(components)/HeroText';
import { Navbar } from './(components)/Navbar';

export default function Home() {
	return (
		<>
			<div style={{ backgroundColor: '#1a1b1e' }}>
				<Navbar />
				<HeroText />
				<About />
				<Carousel />
				<Faq />
			</div>
			<Footer />
		</>
	);
}
