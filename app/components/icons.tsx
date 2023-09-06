import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

export default function Icons() {
    return (
        <div className='absolute bottom-4 left-3 text-white'>
            <IconButton aria-label="Insta" color='secondary'>
                <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Git" color='secondary'>
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="Linkedin" color='secondary'>
                <LinkedInIcon />
            </IconButton>



        </div>
    )
}