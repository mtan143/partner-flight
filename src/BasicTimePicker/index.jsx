import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import dateFormat from 'dateformat';
import TimePicker from 'react-multi-date-picker/plugins/time_picker';

BasicTimePicker.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    lable: PropTypes.string,
    data: PropTypes.object.isRequired,
};

function BasicTimePicker(props) {
    const { form, name, label, } = props;

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                name={name}
                control={form.control}
                defaultValue={new Date()}
                render={({ field: { ref, ...rest } }) => (
                    <KeyboardTimePicker
                        autoOk={true}
                        variant="inline"
                        // placeholder="08:00 AM"
                        // mask="__:__ _M"
                        format="HH:mm a"

                        inputVariant="outlined"
                        margin="normal"
                        label={label}
                        id="time-picker-dialog"
                        KeyboardButtonProps={{
                            "aria-label": "change time"
                        }}
                        {...rest}
                    />
                )}
            />
        </MuiPickersUtilsProvider>
    );
}
export default BasicTimePicker;