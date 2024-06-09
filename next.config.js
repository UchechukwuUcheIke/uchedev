const withMDX = require('@next/mdx')()
const isProduction = (process.env.NODE_ENV === "production");

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProduction? '/uchedev' : "", // Added this line in accordance to ChatGPT suggestions
    output: "export",
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig)
