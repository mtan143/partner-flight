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
import { Link } from 'react-router-dom';

DoanhThu.propTypes = {

};

function DoanhThu(props) {
    const [doanhThu, setThu] = React.useState('');
    const handleChangeThu = (event) => {
        setThu(event.target.value);
    };

    return (
        <>
            <h2 style={{ color: '#1BA0E2' }}>Quản lý chuyến bay</h2>
            <Link to='/add' className='link' style={{ textDecoration: 'none' }} >
                <Button type="submit" variant="contained" style={{float:"left", backgroundColor: '#FF6F00' , marginLeft: '10px', padding: '15px 20px'}}>
                                +</Button></Link>
            <DoanhThuList />
        </>
    );
}

export default DoanhThu;