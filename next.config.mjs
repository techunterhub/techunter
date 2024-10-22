/** @type {import('next').NextConfig} */
const nextConfig = {
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