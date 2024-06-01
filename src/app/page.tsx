import { Metadata } from 'next'
import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
 
export const metadata: Metadata = {
  title: 'Uchedev',
}

export default function Home(props) {
  return (
    <AppCacheProvider {...props}>
      <h1>Hi from Home</h1>
+    </AppCacheProvider>
  );
}
