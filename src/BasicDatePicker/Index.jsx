import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useForm, Controller } from "react-hook-form";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import moment from 'moment';
import dateFormat from 'dateformat';

BasicDatePicker.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  lable: PropTypes.string,
  data: PropTypes.object.isRequired,
};

function BasicDatePicker(props) {
  const { control, name, label, } = props;

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        defaultValue={new Date()}

        render={({ field: { ref, ...rest } }) => (
          <KeyboardDatePicker
            autoOk={true}
            variant="inline"
            inputVariant="outlined"
            margin="normal"
            label={label}
            id="date-picker-dialog"
            format="yyyy/MM/dd"
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
            {...rest}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
}
export default BasicDatePicker;