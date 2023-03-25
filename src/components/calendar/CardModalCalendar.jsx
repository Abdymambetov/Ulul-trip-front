import { Tooltip, tooltipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import isBetweenPlugin from 'dayjs/plugin/isBetween';
import * as React from 'react';
import { useState } from 'react';


dayjs.extend(isBetweenPlugin);
const BootstrapTooltip = styled(({ className, ...props }) => (
	<Tooltip
		placement='top-start'
		sx={{}}
		{...props}
		arrow
		classes={{ popper: className }}
	/>
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		width: '100px',
		height: '30px',
	},
}))

const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    cursor: 'none',
    width: '42px',
    height: '42px',
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '20px',
    color: '#9F9F9F',
    border: '1px solid #EAEAEA',
		borderRadius: '10px',
    '&.Mui-selected': {
      width: '42px',
      height: '42px',
      background: '#6AA9FF !important',
      borderRadius: '6px',
      border: 'none',
      color: '#FFFFFF'
    },
    '&:hover': {
      width: '42px',
      height: '42px',
      borderRadius: '6px',
      background: '#C3DCFF',
      color: '#4C97FE',
    },
  ...(dayIsBetween && {
    borderRadius: 0,
    background: '#C3DCFF !important',
    border: 'none',
    color: '#4C97FE!important'
  }),
  ...(isFirstDay && {
    background: '#6AA9FF !important',
    borderRadius: '10px 0px 0px 10px !important',
    border: 'none',
    color: '#FFFFFF!important'
  }),
  ...(isLastDay && {
    background: '#6AA9FF !important',
    border: 'none',
    borderRadius: '0px 10px 10px 0px!important',
    color: '#FFFFFF!important'
  }),
  
}));

export default function CustomDay({propsDate}) {
  
  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    const start = dayjs(propsDate.gone);
    const end = dayjs(propsDate.back);
    
  
    const dayIsBetween = date.isBetween(start, end, null, '[]');
    const isFirstDay = date.isSame(start, 'day');
    const isLastDay = date.isSame(end, 'day');
    const isOneDay = propsDate.gone===propsDate.back
    if(isOneDay && start.day()===date.day()){
      return <BootstrapTooltip  	key={date.day()}
      title='однодневный тур'><div><CustomPickersDay
      {...pickersDayProps}
       /></div></BootstrapTooltip>
    } else if (isFirstDay && !isOneDay) {
      return (<BootstrapTooltip  	key={date.day()}
       	title='начало тура'><div><CustomPickersDay
         isFirstDay={isFirstDay}
         {...pickersDayProps}
          /></div></BootstrapTooltip>)
    }else if(isLastDay  && !isOneDay) {
        return <BootstrapTooltip  	key={date.day()}
       	title='конец тура'><div><CustomPickersDay
        isLastDay={isLastDay}
         {...pickersDayProps}
          /></div></BootstrapTooltip>
    } else if (dayIsBetween){
      return  (
        <CustomPickersDay
          {...pickersDayProps}
          dayIsBetween={dayIsBetween}
        />
      );
    }else {
     return <BootstrapTooltip  	key={date.day()}
       	title=' нету тура'><div><CustomPickersDay
         {...pickersDayProps}
          /></div></BootstrapTooltip>
    }
  };

  return (
    <LocalizationProvider adapterLocale='ru' dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        disablePast={true}
        PopperProps={{
					sx: {
						maxHeight: '400px',
						'& .css-epd502': {
							maxHeight: '400px',
							mt: '47px',
						},
						'& .MuiButtonBase-root': {
							cursor: 'none !important',
						},

						'& .MuiCalendarPicker-root': {
							maxHeight: '400px',
						},
						'& .css-sf5t6v-PrivatePickersSlideTransition-root-MuiDayPicker-slideTransition':
							{
								minHeight: '300px !important',
							},
						'& .MuiCalendarOrClockPicker-root': {
							width: '391px',
							height: '446px',
						},
						'& .MuiDayPicker-header': {
							display: 'flex',
							justifyContent: 'space-between',
							'& .MuiTypography-root': {
								fontFamily: 'Rubik',
								fontStyle: 'normal',
								fontWeight: 700,
								fontSize: '20px',
								color: '#454545',
							},
						},
					},
				}}
        showDaysOutsideCurrentMonth={true}
        dayOfWeekFormatter={day =>
					day.charAt(0).toUpperCase() + day.charAt(1)
				}
        value={dayjs(propsDate.gone)}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}