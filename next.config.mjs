import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    domains:['cdn.sanity.io'],
  },
  async redirects() {
    return [
      {
        source: '/events',
        destination: 'https://events.techunterhub.com/',  
        permanent: true,  
      },
      {
        source: '/gpt',
        destination: 'https://gpt.techunterhub.com/',
        permanent: true,  
      },
    ];
  },
};

export default nextConfig;
