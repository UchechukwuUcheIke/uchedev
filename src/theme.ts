'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#990000',
        },
        background: {
            default: "#000"
        },
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
                background: "#7D8C80", 
                p:0
            },
          },
        },
        MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: "#7D8C80",
                color: "#FFFFFF",
                p:0,
                m:0,
                '&:hover': {
                    backgroundColor: '#990000',
                    boxShadow: 'none',
                }
              },
            },
          },
        MuiTypography: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                },
              },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                },
            },
        },
        MuiStack: {
            styleOverrides: {
                root: {
                    padding:0,
                    margin:0
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: "#F5F5F5",
                    borderRadius: 0, 
                    boxShadow: "10px 10px #990000"
                },
            },
        }
        // Other component overrides
    },
  
});

export default theme;
