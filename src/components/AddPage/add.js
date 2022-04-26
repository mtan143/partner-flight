import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import BasicSelect from '../../BasicSelect/Index';
import BasicDatePicker from './../../BasicDatePicker/Index';
import BasicButton from '../../BasicButton/Index';
import SimplePaper from '../../SimplePaper/Index';
import { Grid } from '@mui/material';
import './add.css'



add.propTypes = {

};

function add(props) {
    return (
        <><h2 style={{ color: '#1BA0E2' }}>Add Flight</h2>
            <BasicButton />
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Mã chuyến bay" variant="outlined" />
                <TextField id="outlined-basic" label="Tình trạng chuyến bay" variant="outlined" />
                <BasicDatePicker />
                <TextField id="outlined-basic" label="Thời gian ước tính" variant="outlined" />
                <BasicSelect />
            </Box>
            <h2 style={{ color: '#1BA0E2' }}>Hạng ghế</h2>
            <div className='text' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Phổ thông</p>
                        <TextField className='textfield' id="outlined-basic" label="Mã hạng ghế" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Số lượng" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Giá vé" variant="outlined" />
                    </Grid>

                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Phổ thông đặc biệt</p>
                        <TextField className='textfield' id="outlined-basic" label="Mã hạng ghế" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Số lượng" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Giá vé" variant="outlined" />
                    </Grid>
                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Thương gia</p>
                        <TextField className='textfield' id="outlined-basic" label="Mã hạng ghế" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Số lượng" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Giá vé" variant="outlined" />
                    </Grid>
                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Hạng nhất</p>
                        <TextField className='textfield' id="outlined-basic" label="Mã hạng ghế" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Số lượng" variant="outlined" /> <br />
                        <TextField className='textfield' id="outlined-basic" label="Giá vé" variant="outlined" />
                    </Grid>
                </div>
            </div>
            {/* <SimplePaper /> */}

        </>
    );
}

export default add;