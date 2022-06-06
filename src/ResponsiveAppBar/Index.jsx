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
    function switchRender(data){
        switch(data)
        {
            case "AL999AWBCDCA":
            return "Air China";
        
        
            case "AL978AWBCDVJ":
            return "Vietjet Air";
        
        
            case "AL738AWBCDVN":
            return "Vietnam Airline";
        
        
            case "AL366AWBCDQH":
            return "Bamboo Airways";
        
        
            case "AL375AWBCD3K":
            return "Jetstar Pacific Airlines";
        
        
            case "AL618AWBCDSQ":
            return "Singapore Airlines";
        
        
            case "AL900AWBCDFD":
            return "Thai Air Asia";
        
        
            case "AL217AWBCDTG":
            return "Thai Airways";
        
        
            case "AL016AWBCDUA":
            return "United Airlines";
        
        
            case "AL310AWBCDSL":
            return "Thai Lion Air";
        
        
            case "AL180AWBCDKE":
            return "Korea Air";
        
        
            case "AL851AWBCDHX":
            return "Hongkong Airlines";
        
        
            case "AL131AWBCDJL":
            return "Japan Airline";
        
        
            case "AL784AWBCDCZ":
            return "China Southern Airlines";
        
        
            case "AL043AWBCDKA":
            return "Dragon Air";
        
        
            case "AL388AWBCDTR":
            return "Tiger Airways";
        
        
            case "AL672AWBCDBI":
            return "Royal Brunei Airlines";
        
        
            case "AL157AWBCDQR":
            return "Qatar Airways";
        
        
            case "AL774AWBCDFM":
            return "Shanghai Airlines Co Ltd";
        
        
            case "AL057AWBCDAF":
            return "Air France";
        }
        
    }
    const handleOnClick = () => {
        localStorage.clear();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#1BA0E2' }}>
                <Toolbar>
                    <Typography style={{ textAlign: 'left' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button color="inherit">
                            <Link to='/doanhthu' className='link' style={{ textDecoration: 'none', fontSize: '20px' }} >
                                {switchRender(localStorage.getItem("code"))} Management
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '10px' }}>
                            <Link to='/doanhthu' className='link' style={{ textDecoration: 'none' }} >
                                Quản lý chuyến bay
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '10px' }}>
                            <Link to='/thongke' className='link' style={{ textDecoration: 'none' }} >
                                Chart Thống kê
                            </Link>
                        </Button>
                        <Button color="inherit" style={{ marginLeft: '10px' }}>
                            <Link to='/tickets' className='link' style={{ textDecoration: 'none' }} >
                                tickets
                            </Link>
                        </Button>
                    </Typography>
                    <Button onClick={handleOnClick}  style={{ color: "white" }}> <Link to='/login' className='link' style={{ textDecoration: 'none' }} >
                                Logout
                            </Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Index;