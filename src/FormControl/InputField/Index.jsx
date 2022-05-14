import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material/InputLabel';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
};

function InputField(props) {
    const { form, name, label } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            label={label}
            render={({ field }) => <TextField {...field} label={label} />}
            fullWidth
            margin="normal"
            variant="outlined"

        />
    );
}

export default InputField;