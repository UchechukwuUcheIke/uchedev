import {Stack, Paper} from '@mui/material';

export default function Layout({children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{paddingX: "18%", background: "#EEEEEE"}}
      >
      <Paper
        elevation={0}
        sx={{paddingX: "10px"}}>
        {children}
      </Paper>
    </Stack>

  )
}