import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

FlightCode.propTypes = {
    
};
const airline = [
    {
        airlineCode: "AL999AWBCDCA",
        name: "Air China"
    },
    {
        airlineCode: "PAR1",
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

    const handleChange = (event) => {
      setValue(event.target.value);
    };
    return (
        <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Airline</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
            {airline.map(value => 
                <FormControlLabel value={value.airlineCode} control={<Radio />} label={value.name}/>
            )}
          
        </RadioGroup>
      </FormControl>
    );
}

export default FlightCode;