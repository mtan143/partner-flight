import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { InputLabel, Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

SelectField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    data: PropTypes.object.isRequired,
};

function SelectField(props) {
    const { form, name, label, data } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            label={label}
            render={({ field }) => (
                <FormControl>
                    <InputLabel>{label}</InputLabel>
                    <Select fullWidth {...field} label={label}>
                        {

                            Object.entries(data).map(([key, value], i) =>
                                <MenuItem key={i} value={key}>{value}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            )}
        />
    );
}

export default SelectField;