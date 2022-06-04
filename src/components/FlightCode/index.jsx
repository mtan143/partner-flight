import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import flightApi from '../../Api/flightApi';
import { Link, Navigate } from 'react-router-dom';

FlightCode.propTypes = {
    
};
const airline = [
    {
        airlineCode: "AL999AWBCDCA",
        name: "Air China"
    },
    {
        airlineCode: "AL978AWBCDVJ",
        name: "Vietjet Air"
    },
    {
        airlineCode: "AL738AWBCDVN",
        name: "Vietnam Airline"
    },
    {
        airlineCode: "AL366AWBCDQH",
        name: "Bamboo Airways"
    },
    {
        airlineCode: "AL375AWBCD3K",
        name: "Jetstar Pacific Airlines"
    },
    {
        airlineCode: "AL618AWBCDSQ",
        name: "Singapore Airlines"
    },
    {
        airlineCode: "AL900AWBCDFD",
        name: "Thai Air Asia"
    },
    {
        airlineCode: "AL217AWBCDTG",
        name: "Thai Airways"
    },
    {
        airlineCode: "AL016AWBCDUA",
        name: "United Airlines"
    },
    {
        airlineCode: "AL310AWBCDSL",
        name: "Thai Lion Air"
    },
    {
        airlineCode: "AL180AWBCDKE",
        name: "Korea Air"
    },
    {
        airlineCode: "AL851AWBCDHX",
        name: "Hongkong Airlines"
    },
    {
        airlineCode: "AL131AWBCDJL",
        name: "Japan Airline"
    },
    {
        airlineCode: "AL784AWBCDCZ",
        name: "China Southern Airlines"
    },
    {
        airlineCode: "AL043AWBCDKA",
        name: "Dragon Air"
    },
    {
        airlineCode: "AL388AWBCDTR",
        name: "Tiger Airways"
    },
    {
        airlineCode: "AL672AWBCDBI",
        name: "Royal Brunei Airlines"
    },
    {
        airlineCode: "AL157AWBCDQR",
        name: "Qatar Airways"
    },
    {
        airlineCode: "AL774AWBCDFM",
        name: "Shanghai Airlines Co Ltd"
    },
    {
        airlineCode: "AL057AWBCDAF",
        name: "Air France"
    },
    
]


function FlightCode(props) {
    const [value, setValue] = React.useState('');
    const handleClick = async() => {
        const data = JSON.stringify({
            airlineCode: value,
            partnerId: localStorage.getItem("partnerId"),
        })
        try{
            flightApi.syncAccount(data);
        }
       catch(error){
            alert("lỗi rồi" + error);
       }
       Navigate("/login");
    }

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <FormControl >
        <FormLabel id="demo-controlled-radio-buttons-group">Airline</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
             <Box sx={{ width: 800,margin:"auto", display:"flex"}}>
             <Grid container spacing={2} justifyContent="center">
             
             {airline.map(value => 
                (
                    <Grid item xs={6} md={4} textAlign="left">
                <FormControlLabel value={value.airlineCode} control={<Radio />} label={value.name}/>
                </Grid>
                )
            )}
            </Grid>
            </Box>
        </RadioGroup>
        <Link to='/login' className='link' style={{ textDecoration: 'none' }} >
        <Button type="submit" onClick={handleClick} variant="contained" style={{ backgroundColor: '#1BA0E2' }}>Submit</Button>
        </Link>
      </FormControl>
      
    );
}

export default FlightCode;