// @ts-check
/** @type {import('next').NextConfig} */
export default {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.unsplash.com', 'plus.unsplash.com', 'avatars.githubusercontent.com'],
	},
};
