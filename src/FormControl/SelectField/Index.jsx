import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

SelectField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    data: PropTypes.object.isRequired,
};

function SelectField(props) {
    const { control, name, label, data } = props;
    return (
        <Controller
            name={name}
            control={control}
            label={label}
            render={({ field }) => (
                <FormControl>
                    <InputLabel>{label}</InputLabel>
                    <Select fullWidth {...field} label={label}>
                        {

                            Object.entries(data).map(([key, value], i) =>
                                <MenuItem style={{padding:5,display:"block"}} key={i} value={key}>{value}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            )}
        />
    );
}

export default SelectField;