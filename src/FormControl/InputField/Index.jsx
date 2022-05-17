import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material/InputLabel';

InputField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    rules: PropTypes.object,
};

function InputField(props) {
    const { control, name, label, rules} = props;
    return (
        <Controller
            rules={rules}
            name={name}
            control={control}
            label={label}
            render={({ field,fieldState:{error} }) => (
            <TextField 
                error = {error}
                helperText={error?.message}
            {...field} label={label} 
            />)}
           
            fullWidth
            margin="normal"
            variant="outlined"
        />
    );
}

export default InputField;