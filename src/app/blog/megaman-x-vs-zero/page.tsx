import Markdown from 'react-markdown'

//TODO: Find a better way to store article content!
export default function Article({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Markdown>{"Hi!"}</Markdown>

  )
}