import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { CalenderIcon } from './icons/calenderIcon';
interface DatePickerAtomProps {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  iserror: boolean;
  mindate: Date | undefined ; // Minimum allowed date
}

const DatePickerAtom: React.FC<DatePickerAtomProps> = ({ label, value, onChange, iserror, mindate }) => {
  return (
    <DatePicker
      label={label}
      value={value}
      onChange={onChange}
      
      slots={{
        openPickerIcon: CalenderIcon
      }}
      sx={{
        width:"100%",
        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { 
          border: '1px solid',
          borderColor: iserror ? "red" : "info.100" 
        },
        '& .MuiFormLabel-root': {
          color: iserror ? 'red' : 'primary.main', // Change label color based on iserror
        },
        '& .MuiIconButton-root': {
            color: iserror ? 'red' : 'primary.main', // Change icon color based on iserror
          },
      }}
      minDate={mindate} // Set the minimum allowed date

      
    />
  );
};

export default DatePickerAtom;
