/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['localhost', 'picsum.photos', 'sayyes-web-development.fra1.digitaloceanspaces.com', 'sayyes-web-production.fra1.digitaloceanspaces.com'],
	},
};

module.exports = nextConfig;
