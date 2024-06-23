// pages/index.js

import { PrismicText, PrismicRichText } from '@prismicio/react'
import { createClient } from '@/prismicio'

// pages/index.js
// Add the `page` prop in the Home component.
export default async function Article() {
  const client = createClient()

  // Call the Prismic client right in your component!
  const page = await client.getByUID('page', 'article_test');

  return(
    // Contents of the component...
    <PrismicText field={page.data.article_test} />
  )
}
