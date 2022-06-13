import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import flightApi from './../../Api/flightApi';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@material-ui/core/Box';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
import { display, padding } from '@mui/system';
import jwtDecode from 'jwt-decode';
import { Grid } from '@mui/material';
import Footer from '../Footer';

Statistics.propTypes = {

};

function Statistics() {
    const [yearData, setYearData] = useState([]);
    const [listData, setListData] = useState([]);
    const [monthData,setMonthData] = useState([]);
    const [classTypeData,setClassTypeData] = useState([]);
    const [filterMonth, setFilterMonth] = useState(monthData);
    const [filter,setFilter] = useState(yearData);
    function formatVnd(n) {
      return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    };
    useEffect(() => {
        const flightChart = async () => {
            // const yearStatistic = await flightApi.getAllStatisticYear(jwtDecode(localStorage.getItem("token")).PARTNER_ID);
            // const monthStatistic =  await flightApi.getAllStatisticMonth(jwtDecode(localStorage.getItem("token")).PARTNER_ID);
            // const classTypeStatictis = await flightApi.getAllStatisticClassType(jwtDecode(localStorage.getItem("token")).PARTNER_ID);
            const yearStatistic = await flightApi.getAllStatisticYear(localStorage.getItem("code"));
            const monthStatistic =  await flightApi.getAllStatisticMonth(localStorage.getItem("code"));
            const classTypeStatictis = await flightApi.getAllStatisticClassType(localStorage.getItem("code"));
            setYearData(yearStatistic.data);
            setMonthData(monthStatistic.data);
            setClassTypeData(classTypeStatictis.data);
        }

        flightChart();
    }, []);


    return (
            <>
            <h2 style={{ color: '#1BA0E2' }}>Biểu đồ doanh thu chuyến bay</h2>
            <Box sx={{ width: 400,margin:"auto", display:"flex" ,paddingBottom:20}}>
              <Grid container spacing={2}>
              <Grid item xs={6}>
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Statistic</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Statistic"
          value={filter}
          onChange={(event) => {
            setFilter(event.target.value);
          }

          }     
        >
          <MenuItem value={yearData}>Year</MenuItem>
          <MenuItem value={filterMonth}>Month</MenuItem>
          <MenuItem value={classTypeData}>ClassType</MenuItem>
        </Select>
      </FormControl>
              </Grid>
              <Grid item xs={6}>
              <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chọn năm</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="chọn năm"
          onChange={(event)=> {
            setFilterMonth(monthData.filter(data => data.year.substring(0,4)== event.target.value))
          }}
        >
        {yearData.map((value) =>
                                 <MenuItem style={{padding:5,display:"block"}} key={value.year} value={value.year}>{value.year}</MenuItem>) 
        }
        </Select>
      </FormControl>
              </Grid>
                 </Grid>

                                           
      
                                         
      </Box>
            <div style={{ width: 1200, marginLeft: 250, }}>


        <LineChart
      width={1000}
      height={600}
      data={filter}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis type="number" width={100} domain={['auto', 300000000]} allowDataOverflow="true" unit="VNĐ"/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="totalPrice"
        stroke="#C62828"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="tg"
        stroke="#1BA0E2"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="pt"
        stroke="#4A148C"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="hn"
        stroke="#7CB342"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Line
        type="monotone"
        dataKey="pt_db"
        stroke="#FF6F00"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
    </LineChart>
                    </div>
                    { localStorage.getItem("code") === null ? <></> :  <Footer />}
    </>
    );
}

export default Statistics;