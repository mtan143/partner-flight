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
import flightApi from '../../Api/flightApi';
import { alpha } from '@material-ui/core/styles'

function Add(props) {
    const [date, setDate] = useState(new Date());

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            // FlightName: "",
            airlineId: 2,
            // hnPrice:300000,
            // tgPrice:300000,
            // ptPrice:300000,
            // pt_dbPrice:300000,
            // AirlineID: "",
            // GateID: "",
            // FlightStatus: "",
            // EstimatedTime: "",
            // SeatCodePT: "",
            // QuantityPT: "",
            // TicketPricePT: "",
            // SeatCodePTDB: "",
            // QuantityPTDB: "",
            // TicketPricePTDB: "",
            // SeatCodeTG: "",
            // QuantityTG: "",
            // TicketPriceTG: "",
            // SeatCodeHN: "",
            // QuantityHN: "",
            // // TicketPriceHN: "",
            // DeparturePlace: "TP HCM, Việt Nam",
            // Destination: "Hà Nội, Việt Nam",
            // Departure: new Date(),
            // TimeDeparture: new Date(),
            // TimeArrival: new Date(),
        },
    });
    console.log(errors);

    // const sendLocation = (departurePlace, destination) => {
    //     console.log(departurePlace, destination);
    // }

    const onSubmit = async (values) => {
        const newValues = JSON.stringify( {
            ...values,
            timeArrival: moment(values.timeArrival).format("HH:mm"),
            timeDeparture:  moment(values.timeDeparture).format("HH:mm"),
            departure:  moment(values.departure).format("YYYY-MM-DD")
        })
        try{
            await flightApi.add(newValues);
            alert("thêm thành công");
        }
        catch{
           alert("lỗi rồi", errors);
        }
    }
    const depaturePlace = {
        "TP HCM, Việt Nam": "TP HCM, Việt Nam",
        "Hà Nội, Việt Nam": "Hà Nội, Việt Nam",
        "Vinh, Việt Nam": "Vinh, Việt Nam",
        "Phú Quốc, Việt Nam": "Phú Quốc, Việt Nam",
        "Đà Lạt, Việt Nam": "Đà Lạt, Việt Nam",
        "Đà Nẵng, Việt Nam": "Đà Nẵng, Việt Nam",
        "Huế, Việt Nam": "Huế, Việt Nam",
        "Nha Trang, Việt Nam": "Nha Trang, Việt Nam",
    }

    const destination = {
        "TP HCM, Việt Nam": "TP HCM, Việt Nam",
        "Hà Nội, Việt Nam": "Hà Nội, Việt Nam",
        "Vinh, Việt Nam": "Vinh, Việt Nam",
        "Phú Quốc, Việt Nam": "Phú Quốc, Việt Nam",
        "Đà Lạt, Việt Nam": "Đà Lạt, Việt Nam",
        "Đà Nẵng, Việt Nam": "Đà Nẵng, Việt Nam",
        "Huế, Việt Nam": "Huế, Việt Nam",
        "Nha Trang, Việt Nam": "Nha Trang, Việt Nam",
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 style={{ color: '#1BA0E2' }}>Add Flight</h2>
            <Stack className='Button' spacing={2} direction="row">
                <Button type="submit" variant="contained" style={{ backgroundColor: '#FF6F00' }}>Add</Button>
                <Link to='/doanhthu' className='link' style={{ textDecoration: 'none' }} >
                    <Button variant="contained" style={{ backgroundColor: '#1BA0E2' }}>
                        Back
                    </Button>
                </Link>
            </Stack>
            {/* <BasicButton /> */}
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch', marginTop: '50px' },
                }}
                noValidate
                autoComplete="off"
            >
                <InputField name="name" label="Tên chuyến bay" control={control} rules={{ required: "Chưa nhập tên chuyến bay bé ơi" }} />
            
                <BasicDatePicker name='departure' label='Ngày khởi hành' control={control} />
                <FormControl fullWidth >
                    <SelectField name='departurePlace' data={depaturePlace} label='Điểm đi' control={control} />
                </FormControl>

                <FormControl fullWidth>
                    <SelectField name='destination' data={destination} label='Điểm đến' control={control} />
                </FormControl>
                <InputField name="time" label="Thời gian ước tính" control={control} rules={{ required: "Chưa nhập thời gian", pattern: { value: /^[0-9]+$/i, message: "nhập số thôi bé ơi" } }} />
                <InputField name="gateId" label="ID Cổng vào" control={control} rules={{ required: "Chưa nhập cổng vào" }} />
                <BasicTimePicker name='timeDeparture' label="Thời gian cất cánh" control={control} />
                <BasicTimePicker name='timeArrival' label="Thời gian hạ cánh" control={control} />
            </Box>
            <h2 style={{ color: '#1BA0E2', margin: 50 }}>Hạng ghế</h2>
            <div className='text' style={{ display: 'flex', justifyContent: 'space-evenly' , marginBottom: 20}}>
                <div>
                    <Grid container direction={"column"} spacing={3}>
                        {/* <InputField name='SeatCodePT' label='Mã hạng ghế' control={control} /><br /> */}
                        <InputField name='stdQuantity' label='Số lượng' control={control} rules={{ required: "Chưa nhập số lượng",min: { value: 30, message: "số ghế không được thấp hơn 30" }, max: { value: 45, message: "số ghế không được cao hơn 45" } }} /><br />
                        <InputField name='stdPrice' label='Giá vé' control={control} rules={{ required: "Chưa nhập giá vé", min: { value: 300000, message: "giá không được thấp hơn 300000k" }, max: { value: 3000000, message: "giá không được cao hơn 3000000k" } }} />
                    </Grid>

                </div>
            </div>
            {/* <SimplePaper /> */}
        </form >
    );
}

export default Add;