import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Index.css"

export default function BasicSelect() {
    const [departurePlace, setDep] = React.useState('');
    const handleChangeDep = (event) => {
        setDep(event.target.value);
    };

    const [destination, setDes] = React.useState('');
    const handleChangeDes = (event) => {
        setDes(event.target.value);
    };


    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Điểm đi</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={departurePlace}
                    label="Điểm đi"
                    onChange={handleChangeDep}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>TP HCM, Việt Nam</MenuItem>
                    <MenuItem value={2}>Hà Nội, Việt Nam</MenuItem>
                    <MenuItem value={3}>Vinh, Việt Nam</MenuItem>
                    <MenuItem value={4}>Phú Quốc, Việt Nam</MenuItem>
                    <MenuItem value={5}>Đà Lạt, Việt Nam</MenuItem>
                    <MenuItem value={6}>Đà Nẵng, Việt Nam</MenuItem>
                    <MenuItem value={7}>Huế, Việt Nam</MenuItem>
                    <MenuItem value={8}>Nha Trang, Việt Nam</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Điểm đến</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={destination}
                    label="Điểm đến"
                    onChange={handleChangeDes}
                >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value={1}>TP HCM, Việt Nam</MenuItem>
                    <MenuItem value={2}>Hà Nội, Việt Nam</MenuItem>
                    <MenuItem value={3}>Vinh, Việt Nam</MenuItem>
                    <MenuItem value={4}>Phú Quốc, Việt Nam</MenuItem>
                    <MenuItem value={5}>Đà Lạt, Việt Nam</MenuItem>
                    <MenuItem value={6}>Đà Nẵng, Việt Nam</MenuItem>
                    <MenuItem value={7}>Huế, Việt Nam</MenuItem>
                    <MenuItem value={8}>Nha Trang, Việt Nam</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}