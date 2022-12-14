import { About } from './(components)/About';
import { Carousel } from './(components)/Carousel';
import { Faq } from './(components)/Faq';
import { Footer } from './(components)/Footer';
import { HeroText } from './(components)/HeroText';
import { Navbar } from './(components)/Navbar';
import { Partners } from './(components)/Partners';
import { Prizes } from './(components)/Prizes';
import { Schedule } from './(components)/Schedule';
import { Sponsors } from './(components)/Sponsor';
import { Team } from './(components)/Team';

export default function Home() {
	return (
		<>
			<div
				style={{
					backgroundColor: '#1a1b1e',
				}}
			>
				<Navbar />
				<HeroText />
				<About />
				<Carousel />
				<Prizes />
				<Schedule />
				<Sponsors />
				<Partners />
				<Team />
				<Faq />
			</div>
			<Footer />
		</>
	);
}
