import createMDX from '@next/mdx'
   
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
  },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)