import '../styles/globals.css';
import RootStyleRegistry from './emotion';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body>
				<RootStyleRegistry>{children}</RootStyleRegistry>
			</body>
		</html>
	);
}
