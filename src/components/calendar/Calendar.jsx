import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'
import { Box, InputBase, Tooltip, tooltipClasses } from '@mui/material'
import { PickersDay } from '@mui/x-date-pickers'
import { styled } from '@mui/material/styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import classes from '../firstBlockHome/FirstBlockHome.module.css'
const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip
        placement="top-start"
        sx={{}}
        {...props}
        arrow
        classes={{ popper: className }}
    />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        width: '100px',
        height: '30px'
    }
}))

export default function Calendar() {
    const [value, setValue] = useState()
    const [activeInput, setActiveInput] = useState(true)

    return (
        <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
            <DatePicker
                disableHighlightToday={true}
                disableToolbar={true}
                DialogProps={{
                    '& .MuiPickersPopper-root': {
                        top: '10px !important'
                    }
                }}
                PopperProps={{
                    sx: {
                        maxHeight: '400px',
                        '& .css-epd502': {
                            maxHeight: '400px',
                            mt: '47px'
                        },
                        '& .MuiButtonBase-root': {
                            cursor: 'none !important'
                        },

                        '& .MuiCalendarPicker-root': {
                            maxHeight: '400px'
                        },
                        '& .css-sf5t6v-PrivatePickersSlideTransition-root-MuiDayPicker-slideTransition':
                            {
                                minHeight: '300px !important'
                            },
                        '& .MuiCalendarOrClockPicker-root': {
                            width: '391px',
                            height: '446px'
                        },
                        '& .MuiDayPicker-header': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            '& .MuiTypography-root': {
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: '20px',
                                color: '#454545'
                            }
                        }
                    }
                }}
                disablePast={true}
                views={['day']}
                value={value}
                onChange={newValue => {
                    setValue(newValue)
                }}
                dayOfWeekFormatter={day =>
                    day.charAt(0).toUpperCase() + day.charAt(1)
                }
                shouldDisableDate={day => {
                    return day === dayjs().date()
                }}
                showDaysOutsideCurrentMonth={true}
                renderDay={(day, _value, DayComponentProps) => {
                    if (DayComponentProps.disabled) {
                        return <CustomPicker {...DayComponentProps} />
                    } else if (day) {
                        return (
                            <BootstrapTooltip
                                key={DayComponentProps.day}
                                title="Delete"
                            >
                                <Box>
                                    <CustomPicker
                                        style={{
                                            border: '1px solid #EAEAEA',
                                            borderRadius: '10px'
                                        }}
                                        {...DayComponentProps}
                                    />
                                </Box>
                            </BootstrapTooltip>
                        )
                    }
                }}
                renderInput={params => (
                    <div className={classes.parent_input_date}>
                        {activeInput && (
                            <label
                                for="inputs_from_date"
                                className={classes.label_input_date}
                            >
                                Выберите предпочтительную дату
                            </label>
                        )}
                        <TextField
                            id="inputs_from_date"
                            {...params}
                            type="date"
                            sx={{
                                mr: '20px',
                                borderRadius: '0px 14px 14px 0px',
                                '& .MuiFormControl-root': {},
                                '& .MuiButtonBase-root': {
                                    cursor: 'none !important'
                                },
                                '& .MuiInputBase-root': {
                                    width: '220px',
                                    height: '60px'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                },
                                '& .Mui-focused': {
                                    border: '2px solid #FF6F32'
                                }
                            }}
                            disableUnderline={true}
                            className={classes.inputs_from_date}
                            onFocus={() => setActiveInput(true)}
                            onBlur={() => setActiveInput(false)}
                        />
                    </div>
                )}
            />
        </LocalizationProvider>
    )
}

function CustomPicker(props) {
    return (
        <PickersDay
            disableMargin={true}
            today={true}
            sx={{
                cursor: 'none',
                width: '45px',
                height: '45px',
                fontFamily: 'Rubik',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '20px',
                color: '#9F9F9F',
                '&.Mui-selected': {
                    width: '45px',
                    height: '45px',
                    background: '#6AA9FF !important',
                    borderRadius: '6px',
                    border: 'none'
                },
                '&:hover': {
                    width: '45px',
                    height: '45px',
                    borderRadius: '6px',
                    background: '#C3DCFF',
                    color: '#4C97FE'
                }
            }}
            {...props}
        />
    )
}
