import type { Metadata } from "next";
import Link from "next/link";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          {/* AppBar is added to layout so it is shared among all pages */}
            <AppBar> 
              <Toolbar>
                <Typography 
                  variant="h3" 
                  component={Link}
                  href="/"
                  sx={{ textDecoration: 'none', flexGrow: 1 }}>
                    UcheDev
                </Typography>
                <Button 
                color="inherit" 
                size="large"
                href="/projects"
                LinkComponent={Link}>
                    Projects
                </Button>
                <Button 
                  color="inherit" 
                  size="large"
                  href="/blogs"
                  LinkComponent={Link}>
                    Blogs
                </Button>
              </Toolbar>
            </AppBar>
            {/* Empty toolbar is added add spacing between AppBar and website contents */}
            <Toolbar />
            {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
