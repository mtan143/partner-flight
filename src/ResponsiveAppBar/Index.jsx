import React from 'react';
import PropTypes from 'prop-types';
import "./Index.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


Index.propTypes = {

};

function Index(props) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#1BA0E2' }}>
                <Toolbar>
                    <Typography style={{ textAlign: 'left' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit">
                            <Link to='/' className='link' style={{ textDecoration: 'none', fontSize: '20px' }} >
                                Airline Management
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '50px' }}>
                            <Link to='/list' className='link' style={{ textDecoration: 'none' }} >
                                Flight List
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '10px' }}>
                            <Link to='/add' className='link' style={{ textDecoration: 'none' }} >
                                Add Flight
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '10px' }}>
                            <Link to='/doanhthu' className='link' style={{ textDecoration: 'none' }} >
                                Thống kê doanh thu
                            </Link>
                        </Button>
                    </Typography>
                    <Button style={{ color: "white" }}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Index;