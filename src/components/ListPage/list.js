import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "./list.css";
import flightApi from '../../Api/flightApi';

// List.propTypes = {

// };

function List(props) {
    const [flightList, setFlightList] = useState([]);
    useEffect(() => {
        const fetchFlights = async () =>{ 
            try{
                const list = await flightApi.getAll("AL978AWBCDVJ");
                console.log(list.data);
                setFlightList(list.data); 
             }
             catch (error){
                    console.log('Fail to fetch flight list', error);
             }
        }
        fetchFlights();
    },[]);
    return (
        <>
            <h2 style={{ color: '#1BA0E2' }}>Flight List</h2>
            {console.log(flightList)}
            <div className='box'>
                {flightList.map((f,index) => 
                    (
                    <div className='box1' key={index}> <p>{f.name}</p>
                    <p>{f.departure}</p>
                    <p>{f.quantityTicket}</p>
                    </div>)
                )}
            </div>
        </>

    )
}

export default List;