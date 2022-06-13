import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flightApi from '../../Api/flightApi';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Grid} from '@mui/material';
import Link from '@mui/material/Link';

Footer.propTypes = {
    
};

function Footer(props) {
  const formatCash = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K+";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M+";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B+";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };
    const [fData,setFData] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            try{
                const data = await flightApi.getFooterData(localStorage.getItem("code"));
                console.log("footer");
                console.log(data.data);
                setFData(data.data);
            }
            catch(error){
                console.log('Fail to fetch Footer Data', error);
            }
        }
        fetchData();
    },[localStorage.getItem("code")]) 
    function Copyright() {
        return (
          <Typography marginTop="50px" variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Traveloka
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    return (
        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          height:300,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container >
        <Grid container spacing={8}>
                            <Grid  item xs={12} sm={4}>
                                <Box width="150px" margin="auto" borderBottom={1}> <span style={{fontSize:"100px", fontFamily:"fantasy"}} color="inherit">
                                        {formatCash(fData.totalFlight)}
                                    </span></Box>
                                <Box marginTop="10px">
                                   TOTALFLIGHT
                                </Box>
                            </Grid>
                            <Grid  item xs={12} sm={4}>
                                <Box width="150px" margin="auto" borderBottom={1}>  <span  style={{fontSize:"100px", fontFamily:"fantasy"}} color="inherit">
                                    {formatCash(fData.totalTicket)}
                                    </span></Box>
                                <Box marginTop="10px">
                                  TOTALTICKETS
                                </Box>
                            </Grid>
                            <Grid  item xs={12} sm={4}>
                                <Box width="150px" margin="auto" borderBottom={1}><span  style={{fontSize:"100px", fontFamily:"fantasy"}} color="inherit">
                                    {formatCash(fData.totalPrice)}
                                    </span></Box>
                                <Box marginTop="10px">
                                    TOTALPRICE
                                </Box>
                            </Grid>
                        </Grid>
        </Container>
        <Copyright />
      </Box>
    </Box>
    );
}

export default Footer;