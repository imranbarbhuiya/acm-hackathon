'use client';

import { CacheProvider } from '@emotion/react';
import { useEmotionCache, MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({ children }: { children: React.ReactNode }) {
	const cache = useEmotionCache();
	cache.compat = true;
	// eslint-disable-next-line @typescript-eslint/unbound-method
	const prevInsert = cache.insert;
	let inserted: string[] = [];
	cache.insert = (...args) => {
		const serialized = args[1];
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (cache.inserted[serialized.name] === undefined) {
			inserted.push(serialized.name);
		}

		return prevInsert(...args);
	};

	const flush = () => {
		const prevInserted = inserted;
		inserted = [];
		return prevInserted;
	};

	useServerInsertedHTML(() => {
		const names = flush();
		if (names.length === 0) return null;
		let styles = '';
		for (const name of names) {
			styles += cache.inserted[name];
		}

		return (
			<style
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{
					__html: styles,
				}}
				data-emotion={`${cache.key} ${names.join(' ')}`}
				key={cache.key}
			/>
		);
	});

	return (
		<CacheProvider value={cache}>
			<MantineProvider
				theme={{
					colorScheme: 'dark',
				}}
				withGlobalStyles
				withNormalizeCSS
			>
				<AnimatePresence>{children}</AnimatePresence>
			</MantineProvider>
		</CacheProvider>
	);
}
