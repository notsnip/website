import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "cdn.discordapp.com",
        }, {
            protocol: "https",
            hostname: "i.scdn.co",
        }],
    },
};

const millionConfig = {
    auto: true,
};

export default million.next(nextConfig, millionConfig);