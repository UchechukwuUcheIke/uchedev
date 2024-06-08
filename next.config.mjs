/** @type {import('next').NextConfig} */

const isProduction = (process.env.NODE_ENV === "production");
const nextConfig = {
    basePath: isProduction? '/uchedev' : "", // Added this line in accordance to ChatGPT suggestions
    output: "export"
};

export default nextConfig;
