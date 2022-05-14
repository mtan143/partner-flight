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

DoanhThu.propTypes = {

};

function DoanhThu(props) {
    const [daonhThu, setThu] = React.useState('');
    const handleChangeThu = (event) => {
        setThu(event.target.value);
    };

    return (
        <>
            <h2 style={{ color: '#1BA0E2' }}>Thống kê doanh thu</h2>
            <FormControl style={{ width: 150 }}>
                <InputLabel id="demo-simple-select-label">Thống kê</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={daonhThu}
                    label="Thống kê"
                    onChange={handleChangeThu}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>Theo ngày</MenuItem>
                    <MenuItem value={2}>Theo tháng</MenuItem>
                    <MenuItem value={3}>Theo năm</MenuItem>
                </Select>
            </FormControl>
            <TextField className='TextBox' style={{ marginLeft: 10 }} id="outlined-basic" label="Giá trị" variant="outlined" />
            <DoanhThuList />
        </>
    );
}

export default DoanhThu;