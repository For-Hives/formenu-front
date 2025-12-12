/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**.andy-cinquin.fr',
			},
		],
	},
	experimental: {
		scrollRestoration: true,
	},
}

module.exports = nextConfig
