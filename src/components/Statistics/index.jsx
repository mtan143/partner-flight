import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DoanhThuData } from './data';
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

Statistics.propTypes = {

};

function Statistics() {
    const [yearData, setYearData] = useState([]);
    const [listData, setListData] = useState([]);
    const [monthData,setMonthData] = useState([]);
    const [classTypeData,setClassTypeData] = useState([]);
    const [filter,setFilter] = useState(yearData);
    useEffect(() => {
        const flightChart = async () => {
            const yearStatistic = await flightApi.getAllStatisticYear("AL978AWBCDVJ");
            const monthStatistic =  await flightApi.getAllStatisticMonth("AL978AWBCDVJ");
            const classTypeStatictis = await flightApi.getAllStatisticClassType("AL978AWBCDVJ");
            setYearData(yearStatistic.data);
            setMonthData(monthStatistic.data);
            setClassTypeData(classTypeStatictis.data);
        }

        flightChart();
    }, []);


    return (
            <>
            <h2 style={{ color: '#1BA0E2' }}>Biểu đồ doanh thu chuyến bay</h2>
            <Box sx={{ width: 200,margin:"auto" }}>
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
          <MenuItem value={monthData}>Month</MenuItem>
          <MenuItem value={classTypeData}>ClassType</MenuItem>
        </Select>
      </FormControl>
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
    </>
    );
}

export default Statistics;