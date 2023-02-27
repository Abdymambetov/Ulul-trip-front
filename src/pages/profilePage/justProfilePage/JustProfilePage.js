import React from 'react'
import classes from '../ProfilePage.module.css'
import { TextField } from '@mui/material'
import crossSvg from '../../../images/profileImg/cross (2).svg'
import lockSvg from '../../../images/profileImg/lock.svg'

function JustProfilePage() {
  return (
    <div className={classes.profile}>
      <div className={classes.container}>
        <div className={classes.profile_inner}>
            <div className={classes.personal_data}>
              <div className={classes.personal_block_one}>
                <h3 className={classes.personal_text_data}>Личные данные</h3>
              </div>
              <div className={classes.profile_inputs}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                  '& .MuiInputBase-root':{
                    borderRadius: '10px',
                    marginRight: '20px',
                    marginBottom: '20px',
                    width: '400px',
                    height: '60px'
                  }
                }}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                  '& .MuiInputBase-root':{
                    borderRadius: '10px',
                    marginRight: '20px',
                    marginBottom: '20px',
                    width: '400px',
                    height: '60px'
                  }
                }}/>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                  '& .MuiInputBase-root':{
                    borderRadius: '10px',
                    marginRight: '20px',
                    marginBottom: '20px',
                    width: '400px',
                    height: '60px'
                  }
                }}/>
              </div>
              <div className={classes.user_info_block}>
                <div className={classes.user_password}>
                    <p className={classes.change_password_text}>Изменить пароль</p>
                    <img src={crossSvg} alt="cross_password" className={classes.cross_img_password}/>
                </div>
                <div className={classes.delete_profile}>
                  <p className={classes.delete_profile_text}>Удалить мой профиль</p>
                  <img src={crossSvg} alt="cross" className={classes.cross_img}/>
              </div>
              </div>
            </div>
            <div className={classes.confidentality_block}>
              <div className={classes.confidentality_text}>
                <p className={classes.text_conf}>Конфиденциальность</p>
                <div className={classes.confidentality_lock}>
                  <img src={lockSvg} alt="lock" className={classes.lock_img}/>
                  <p>Политика конфиденциальности</p>
                  <img src={crossSvg} alt="crossSvg" className={classes.lock_cross}/>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default JustProfilePage