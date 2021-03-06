import React from "react";
import {
    Typography,
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Button
} from "@mui/material";
import JavascriptIcon from '@mui/icons-material/Javascript'
import CodeIcon from '@mui/icons-material/Code';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BrushIcon from '@mui/icons-material/Brush';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ApiIcon from '@mui/icons-material/Api';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CreateIcon from '@mui/icons-material/Create';
import HexagonIcon from '@mui/icons-material/Hexagon';
import SettingsIcon from '@mui/icons-material/Settings';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import RichardResume from '../assets/Richard Martin Resume.pdf';



function Resume() {

    const frontEnd = [
        {
            id: 1,
            name: 'JavaScript',
            icon: JavascriptIcon,
        },
        {
            id: 2,
            name: 'HTML/CSS',
            icon: CodeIcon
        },
        {
            id: 3,
            name: 'jQuery',
            icon: AttachMoneyIcon
        },
        {
            id: 4,
            name: 'React',
            icon: DeveloperModeIcon
        },
        {
            id: 5,
            name: 'Bootstrap',
            icon: BrushIcon
        },
        {
            id: 6,
            name: 'Material UI',
            icon: CreateIcon
        },
        {
            id: 7,
            name: 'Responsive/Mobile Design',
            icon: PhoneIphoneIcon
        }
    ];

    const backEnd = [
        {
            id: 1,
            name: 'API',
            icon: ApiIcon,
        },
        {
            id: 2,
            name: 'Node.js',
            icon: HexagonIcon
        },
        {
            id: 3,
            name: 'Express',
            icon: SettingsIcon
        },
        {
            id: 4,
            name: 'MySQL, Sequelize',
            icon: DataObjectIcon
        },
        {
            id: 5,
            name: 'MongoDB, Mongoose',
            icon: StorageIcon
        },
        {
            id: 6,
            name: 'REST',
            icon: CloudDownloadIcon
        },
        {
            id: 7,
            name: 'GraphQL',
            icon: DeviceHubIcon
        }
    ];
    return (
        <>
            <Box sx={{ display: 'flex', backgroundColor: '#8d99ae', justifyContent: 'center', height: '100%' }}>
                <Grid container >
                    <Grid item xs={12} md={6}>
                        <Typography textAlign='center' sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                            Front-End Proficiencies
                        </Typography>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                            <List>
                                {frontEnd.map((front) => (
                                    <ListItem key={front.id}>
                                        <ListItemIcon>
                                            <front.icon sx={{ fontSize: 60, color: '#2b2d42' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={front.name}
                                            sx={{ color: '#2b2d42', p: 2}}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography textAlign='center' sx={{ mt: 4, mb: 2 }} variant="h4" component="div">
                            Back-End Proficiencies
                        </Typography>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                            <List>
                                {backEnd.map((back) => (
                                    <ListItem key={back.id}>
                                        <ListItemIcon>
                                            <back.icon sx={{ fontSize: 60, color: '#2b2d42' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={back.name}
                                            sx={{ color: '#2b2d42', p: 2}}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{backgroundColor: '#8d99ae', pt: 5}}>
                <Grid container direction="row" justifyContent="center" sx={{ pb: 10 }}>
                    <Button 
                        variant="contained" 
                        component='a' 
                        href={RichardResume} 
                        download="Richard_Martin_Resume.pdf" 
                        sx={{backgroundColor: '#2b2d42', '&.MuiButtonBase-root:hover': { bgcolor: '#2b2d42' }}}>
                        Download My Resume
                    </Button>
                </Grid>
            </Box>

        </>
    );
};

export default Resume;
