import { MDXRemote } from 'next-mdx-remote/rsc'
import { createClient } from '@/prismicio'
import {Box, Stack } from '@mui/material';

// pages/index.js
// Add the `page` prop in the Home component.
export default async function Article() {
  const client = createClient()

  // Call the Prismic client right in your component!
  const page = await client.getByUID('page', 'maverick-hunter-x');
  const contents = page.data.article?.toString()
  if (contents == null) {
    return <></>
  }
  return(
    // Contents of the component...
      <MDXRemote source={contents} components={{Box, Stack}}/>
    
  )
}