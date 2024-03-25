import { MenuItem, TextField, Button } from "@mui/material";

export const renderInputField = ({ name, label, type, fullWidth=true, required=true, inputsObj, onChange, sx={} }) => {
  const { data, errors } = inputsObj;
  return (
    <TextField
      label={label}
      type={type ? type : "text"}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={fullWidth}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
      required={required}
      sx={{...sx, mb: 2}}
    />
  );
};
export const renderSelect = ({ name, label, options, inputsObj, onChange, sx={} }) => {
  const { data, errors } = inputsObj;
  return (
    <TextField
      select
      label={label}
      variant='outlined'
      color='primary'
      size='small'
      fullWidth={true}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
      sx={{...sx}}>
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick, sx={} }) => (
    <Button
      variant={variant ? variant : "contained"}
      color={color ? color : "primary"}
      fullWidth={fullWidth ? fullWidth : false}
      onClick={onClick}
      sx={{...sx, mt:2}}>
      {label}
    </Button>
  );