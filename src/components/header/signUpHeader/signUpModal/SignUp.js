import { TextField } from '@mui/material'
import React from 'react'
import classes from './SignUModal.module.css'


function SignUp({name, label, image,...props}) {
  return (
    <div className={classes.one_inputs}>
            <TextField id="outlined-basic" label={label} variant="outlined" name={name} image {...props} className={classes.inputs_modal} sx={{
                '& .MuiInputBase-root':{
                    borderRadius:"10px",
                    height: '50px'
                }
            }}/> 
    </div> 
  )
}

export default SignUp