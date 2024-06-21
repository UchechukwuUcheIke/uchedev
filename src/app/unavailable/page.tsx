import {Stack, Paper, Typography, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

//TODO: Finish styling on this page
export default function UnavailableContentPage() {
    return (
        <Paper elevation={0} sx={{paddingTop: '10%'}}>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}>
                <Typography
                variant="h1" 
                gutterBottom
                sx={{fontWeight: 'bold', color: "#990000"}}> 
                    Coming Soon 
                </Typography>
                <Typography
                variant="h5"> 
                    This page is still under construction 
                </Typography>
                <Typography
                variant="h5"> 
                    But feel free to check out the rest of the website! 
                </Typography>
                <Button
                size="large"
                startIcon={<HomeIcon/>}> 
                    Home 
                </Button>
            </Stack>
        </Paper>
        
    )
}