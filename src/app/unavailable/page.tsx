import {Stack, Paper, Typography, Button} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

//TODO: Finish styling on this page
export default function UnavailableContentPage() {
    return (
        <Paper sx={{height: '100%'}}>
            <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}>
                <Typography> Coming Soon </Typography>
                <Typography> This page is still underconstruction </Typography>
                <Typography> Feel free to check out the rest of the website! </Typography>
                <Button
                startIcon={<HomeIcon/>}> 
                    Home 
                </Button>
            </Stack>
        </Paper>
        
    )
}