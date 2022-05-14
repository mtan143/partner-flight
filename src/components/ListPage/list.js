import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "./list.css";

// List.propTypes = {

// };

function List(props) {
    return (
        <>
            <h2 style={{ color: '#1BA0E2' }}>Flight List</h2>
            <div className='box'>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
                <div id='box1'></div>
            </div>
        </>

    )
}

export default List;