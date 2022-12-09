import '../styles/globals.css';
import RootStyleRegistry from './provider';

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
