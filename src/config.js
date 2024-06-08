/** @type {import('next').NextConfig} */

// Self made config file for managing the base path.
// Changes the base path for images when app is deployed

//TODO: Find a more optimal place to place this file
const isProduction = (process.env.NODE_ENV === "production");
const config = {
    basePath: isProduction ? '/uchedev' : "", // Added this line in accordance to ChatGPT suggestions
    output: "export"
};

export default config;
