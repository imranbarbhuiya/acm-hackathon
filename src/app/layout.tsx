import '@unocss/reset/tailwind.css';
import '../styles/globals.css';
import '../styles/unocss.css';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}
