/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          // tambahkan hostname S3 bucket-mu di sini:
          'sekolahbucket.s3.us-east-1.amazonaws.com'
        ],
    },
};

export default nextConfig;
