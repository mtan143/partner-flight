import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './DoanhThu.css'
import DoanhThuList from './DoanhThuList/DoanhThuList';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Link, Navigate } from 'react-router-dom';
import flightApi from '../../Api/flightApi';
import { Grid } from '@mui/material';
import { FilterList } from '@material-ui/icons';
import Footer from '../Footer';

DoanhThu.propTypes = {

};

function DoanhThu(props) {
    function padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }
    const [doanhThu, setThu] = React.useState('none');
    const [filterM, setFilterM] = useState('none');
    const [filterD, setFilterD] = useState('none');
    const [filterY, setFilterY] = useState('none');
    useEffect(() => {
        const fetchFlights = async () =>{ 
            try{
               // const flightList = await flightApi.getAll(jwtDecode(localStorage.getItem("token")).PARTNER_ID);
                const flightList = await flightApi.getAll(localStorage.getItem("code"));
                console.log(flightList.data);
                if((filterM != 'none' && filterY != 'none' && filterD != 'none') )
                {
                    console.log(flightList.data);
                    console.log(filterY.concat(`-${padLeadingZeros(filterM,2).concat(`-${filterD}`)}`));
                    setList(flightList.data.filter(data => data.departure == filterY.concat(`-${padLeadingZeros(filterM,2).concat(`-${padLeadingZeros(filterD,2)}`)}`)));

                }
                else if (filterM != 'none' && filterY !='none') {
                    console.log(filterY.concat(`${padLeadingZeros(filterM,2)}`));
                    setList(flightList.data.filter(data => data.monthDeparture == filterY.concat(`-${padLeadingZeros(filterM,2)}`)));
                }
              
                
                else if (filterY != 'none' && filterD !='none') 
                setList(flightList.data.filter(data => (data.yearDeparture == filterY && data.departure.substring(8)== padLeadingZeros(filterD,2)) ));
                
                else if(filterM != 'none' && filterD !='none')
                setList(flightList.data.filter(data => (data.month == filterM && data.departure.substring(8)== padLeadingZeros(filterD,2)) ));
                
                else if(filterD !='none')
                setList(flightList.data.filter(data => (data.departure.substring(8) ==padLeadingZeros(filterD,2) )));
                else if (filterM != 'none')
                setList(flightList.data.filter(data=> (data.month == filterM)));
                else if(filterY !='none')
                setList(flightList.data.filter(data => (data.yearDeparture == filterY)))
                else
                    setList(flightList.data); 
                
             }
             catch (error){
                    console.log('Fail to fetch flight list', error);
             }
        }
        fetchFlights();
    },[filterM,filterY,filterD]);
    const [list, setList] = useState([]);
    const handleChangeThu = (event) => {
        setThu(event.target.value);
    };
    const month = [];
    for(var i =1 ; i< 13 ; i ++)
        {
            var obj={};
            obj['month'] = i;
            month.push(obj);
        }
        const day = [];
        for(var i = 1; i<32 ; i++){
            var obj={};
            obj['day']= i;
            day.push(obj);
        }
        const handleClick = ()=> {
            setFilterM('none');
            setFilterY('none');
            setFilterD('none');
        }
    return (
        <div>
            <h2 style={{ color: '#1BA0E2' }}>Quản lý chuyến bay</h2>
             <Box sx={{ width: 400,margin:"auto", display:"flex"}}>
              <Grid container spacing={2} justifyContent="center">
              <Grid item xs={1} md={3}>
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tháng</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Tháng"
          value={filterM}
          onChange={(event)=> {
              setFilterM(event.target.value);
          }}
        >
           <MenuItem style={{padding:5,display:"block"}} value={'none'}>none</MenuItem>
            {
                month.map((m,i) => 
                     <MenuItem style={{padding:5,display:"block"}} key={i} value={m.month}>{m.month}</MenuItem>
            )
            }
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={1} md={3}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Năm</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="năm"
          value={filterY}
          onChange={(event)=> {
              setFilterY(event.target.value);
          }}
        >
           <MenuItem style={{padding:5,display:"block"}} value={'none'}>none</MenuItem>
           <MenuItem style={{padding:5,display:"block"}} value= "2018">2018</MenuItem>
           <MenuItem style={{padding:5,display:"block"}} value= "2019">2019</MenuItem>
           <MenuItem style={{padding:5,display:"block"}} value= "2020">2020</MenuItem>
           <MenuItem style={{padding:5,display:"block"}} value= "2021">2021</MenuItem>
           <MenuItem style={{padding:5,display:"block"}} value= "2022">2022</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={1} md={3}>
             <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ngày</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Ngày"
          value={filterD}
          onChange={(event)=> {
              setFilterD(event.target.value);
          }}
        >
           <MenuItem style={{padding:5,display:"block"}} value={'none'}>none</MenuItem>
            {
                day.map((m,i) => 
                     <MenuItem style={{padding:5,display:"block"}} key={i} value={m.day}>{m.day}</MenuItem>
            )
            }
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={1} md={2} padding="16px 0">
      <Button type='submit' onClick={handleClick} >Reset filter</Button>
      </Grid>
    </Grid>                             
      </Box>
            
            <Link to='/add' className='link' style={{ textDecoration: 'none' }} >
                <Button type="submit" variant="contained" style={{float:"left", backgroundColor: '#FF6F00' , marginLeft: '10px', padding: '15px 20px'}}>
                                +</Button></Link>
            <DoanhThuList list={list} />
            { localStorage.getItem("code") === null ? <></> :  <Footer />}
        </div>
    );
}

export default DoanhThu;