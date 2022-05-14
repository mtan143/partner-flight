import React, { useEffect } from 'react';
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

    useEffect(() => {
        console.log(departurePlace);
        console.log(destination);
    }, [departurePlace, destination])


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
                    <MenuItem value="TP HCM, Việt Nam">TP HCM, Việt Nam</MenuItem>
                    <MenuItem value="Hà Nội, Việt Nam">Hà Nội, Việt Nam</MenuItem>
                    <MenuItem value="Vinh, Việt Nam">Vinh, Việt Nam</MenuItem>
                    <MenuItem value="Phú Quốc, Việt Nam">Phú Quốc, Việt Nam</MenuItem>
                    <MenuItem value="Đà Lạt, Việt Nam">Đà Lạt, Việt Nam</MenuItem>
                    <MenuItem value="Đà Nẵng, Việt Nam">Đà Nẵng, Việt Nam</MenuItem>
                    <MenuItem value="Huế, Việt Nam">Huế, Việt Nam</MenuItem>
                    <MenuItem value="Nha Trang, Việt Nam">Nha Trang, Việt Nam</MenuItem>
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
                    <MenuItem value="TP HCM, Việt Nam">TP HCM, Việt Nam</MenuItem>
                    <MenuItem value="Hà Nội, Việt Nam">Hà Nội, Việt Nam</MenuItem>
                    <MenuItem value="Vinh, Việt Nam">Vinh, Việt Nam</MenuItem>
                    <MenuItem value="Phú Quốc, Việt Nam">Phú Quốc, Việt Nam</MenuItem>
                    <MenuItem value="Đà Lạt, Việt Nam">Đà Lạt, Việt Nam</MenuItem>
                    <MenuItem value="Đà Nẵng, Việt Nam">Đà Nẵng, Việt Nam</MenuItem>
                    <MenuItem value="Huế, Việt Nam">Huế, Việt Nam</MenuItem>
                    <MenuItem value="Nha Trang, Việt Nam">Nha Trang, Việt Nam</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}