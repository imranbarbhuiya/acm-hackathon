'use client';
import { About } from './(components)/About';
import { Carousel } from './(components)/Carousel';
import { Faq } from './(components)/Faq';
import { HeroText } from './(components)/HeroText';
import { Navbar } from './(components)/Navbar';

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroText />
			<About />
			<Carousel />
			<Faq />
		</>
	);
}
