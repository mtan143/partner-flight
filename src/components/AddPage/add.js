import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import BasicSelect from '../../BasicSelect/Index';
import BasicDatePicker from '../../BasicDatePicker/Index';
import BasicButton from '../../BasicButton/Index';
import SimplePaper from '../../SimplePaper/Index';
import { Grid } from '@mui/material';
import './add.css'
import { useForm } from 'react-hook-form';
import InputField from '../../FormControl/InputField/Index';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SelectField from '../../FormControl/SelectField/Index';
import dateFormat from 'dateformat';
import moment from 'moment';
import { format } from 'date-fns';
import BasicTimePicker from './../../BasicTimePicker/index';
import yupResolver from '@hookform/resolvers';
import * as yup from "yup";
import profileApi from '../../Api/profileApi';
import { alpha } from '@material-ui/core/styles'

function Add(props) {
    // const schema = yup.object({
    //     FlightName: yup.string().required('loz'),
    //     // AirlineID: yup.string().required(),
    //     // GateID: yup.string().required(),
    //     // EstimatedTime: yup.string().required(),
    //     // QuantityPT: yup.string().required(),
    //     // TicketPricePT: yup.string().required(),
    //     // QuantityPTDB: yup.string().required(),
    //     // TicketPricePTDB: yup.string().required(),
    //     // QuantityTG: yup.string().required(),
    //     // TicketPriceTG: yup.string().required(),
    //     // QuantityHN: yup.string().required(),
    //     // TicketPriceHN: yup.string().required(),
    //     // depaturePlace: yup.string().required(),
    //     // destination: yup.string().required(),
    //     // Departure: yup.date().required(),
    //     // TimeDeparture: yup.date().required(),
    //     // TimeArrival: yup.date().required(),
    // });
    // useEffect(() => {
    //     const fetchFlights = async () => {
    //         const param = {
    //             "APP_ID": "VY04MB",
    //         }
    //         try {
    //             const list = await profileApi.getAll(param);
    //             console.log(list.data);
    //         }
    //         catch (error) {
    //             console.log('Fail to fetch flight list', error);
    //         }
    //     }
    //     fetchFlights();
    // }, []);
    const [date, setDate] = useState(new Date());

    const {control ,handleSubmit, formState:{errors}} = useForm({
        defaultValues: {
            // FlightName: "",
            AirlineID: "",
            GateID: "",
            // FlightStatus: "",
            EstimatedTime: "",
            // SeatCodePT: "",
            QuantityPT: "",
            TicketPricePT: "",
            // SeatCodePTDB: "",
            QuantityPTDB: "",
            TicketPricePTDB: "",
            // SeatCodeTG: "",
            QuantityTG: "",
            TicketPriceTG: "",
            // SeatCodeHN: "",
            QuantityHN: "",
            TicketPriceHN: "",
            DeparturePlace: "SGN",
            Destination: "HAN",
            Departure: new Date(),
            TimeDeparture: new Date(),
            TimeArrival: new Date(),
        },
    });
    console.log(errors);

    // const sendLocation = (departurePlace, destination) => {
    //     console.log(departurePlace, destination);
    // }

    const onSubmit = (values) => {
        console.log(values);
    }
    const depaturePlace = {
        SGN: "TP HCM, Việt Nam",
        HAN: "Hà Nội, Việt Nam",
        VII: "Vinh, Việt Nam",
        PQC: "Phú Quốc, Việt Nam",
        DLI: "Đà Lạt, Việt Nam",
        DAD: "Đà Nẵng, Việt Nam",
        HUI: "Huế, Việt Nam",
        CXR: "Nha Trang, Việt Nam",
    }

    const destination = {
        SGN: "TP HCM, Việt Nam",
        HAN: "Hà Nội, Việt Nam",
        VII: "Vinh, Việt Nam",
        PQC: "Phú Quốc, Việt Nam",
        DLI: "Đà Lạt, Việt Nam",
        DAD: "Đà Nẵng, Việt Nam",
        HUI: "Huế, Việt Nam",
        CXR: "Nha Trang, Việt Nam",
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ color: '#1BA0E2' }}>Add Flight</h2>
            <Stack className='Button' spacing={2} direction="row">
                <Button type="submit" variant="contained" style={{ backgroundColor: '#FF6F00' }}>Add</Button>
                <Link to='/list' className='link' style={{ textDecoration: 'none' }} >
                    <Button variant="contained" style={{ backgroundColor: '#1BA0E2' }}>
                        Back
                    </Button>
                </Link>
            </Stack>
            {/* <BasicButton /> */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '50ch', marginTop: '50px' },
                }}
                noValidate
                autoComplete="off"
            >
                {/* <InputField name="FlightCode" label="Mã chuyến bay" control={control} /> */}
                <InputField name="FlightName" label="Tên chuyến bay" control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} />
                <InputField name="AirlineID" label="ID hãng bay" control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} />
                {/* <InputField name="FlightStatus" label="Tình trạng chuyến bay" control={control} /> */}
                <BasicDatePicker name='Departure' label='Thời gian khởi hành' control={control} />
                {/* <BasicSelect sendLocation = {sendLocation} /> */}
                <FormControl fullWidth >
                    <SelectField name='DeparturePlace' data={depaturePlace} label='Điểm đi' control={control} />
                </FormControl>

                <FormControl fullWidth>
                    <SelectField name='Destination' data={destination} label='Điểm đến' control={control} />
                </FormControl>
                <InputField name="EstimatedTime" label="Thời gian ước tính" control={control}  rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/>
                <InputField name="GateID" label="ID Cổng vào" control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/>
                <BasicTimePicker name='TimeDeparture' label="Thời gian cất cánh" control={control} />
                <BasicTimePicker name='TimeArrival' label="Thời gian hạ cánh" control={control} />
            </Box>
            <h2 style={{ color: '#1BA0E2', marginTop: '50px' }}>Hạng ghế</h2>
            <div className='text' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Phổ thông</p>
                        {/* <InputField name='SeatCodePT' label='Mã hạng ghế' control={control} /><br /> */}
                        <InputField name='QuantityPT' label='Số lượng' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/><br />
                        <InputField name='TicketPricePT' label='Giá vé' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/>
                    </Grid>

                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Phổ thông đặc biệt</p>
                        {/* <InputField name='SeatCodePTDB' label='Mã hạng ghế' control={control} /><br /> */}
                        <InputField name='QuantityPTDB' label='Số lượng' control={control}rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} /><br />
                        <InputField name='TicketPricePTDB' label='Giá vé' control={control}rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} />
                    </Grid>
                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Thương gia</p>
                        {/* <InputField name='SeatCodeTG' label='Mã hạng ghế' control={control} /><br /> */}
                        <InputField name='QuantityTG' label='Số lượng' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} /><br />
                        <InputField name='TicketPriceTG' label='Giá vé' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}} />
                    </Grid>
                </div>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        <p style={{ fontSize: '20px' }}>Hạng nhất</p>
                        {/* <InputField name='SeatCodeHN' label='Mã hạng ghế' control={control} /><br /> */}
                        <InputField name='QuantityHN' label='Số lượng' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/><br />
                        <InputField name='TicketPriceHN' label='Giá vé' control={control} rules={{required: "Chưa nhập tên chuyến bay bé ơi"}}/>
                    </Grid>
                </div>
            </div>
            {/* <SimplePaper /> */}
        </form >
    );
}

export default Add;