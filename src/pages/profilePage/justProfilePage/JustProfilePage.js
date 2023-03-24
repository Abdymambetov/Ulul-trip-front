import React, { useEffect } from 'react'
import classes from '../ProfilePage.module.css'
import { TextField } from '@mui/material'
import crossSvg from '../../../images/profileImg/cross (2).svg'
import lockSvg from '../../../images/profileImg/lock.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../../store/slices/profileSlice'
import DeleteProfileModal from './deleteProfileModal/DeleteProfileModal'
import { openChangePasswordModal, openConfidentalityModal, openDeleteModal, openEditProfileModal } from '../../../store/slices/authSlice'
import ChangePasswordModa from './changePasswordModal/ChangePasswordModa'
import EditProfileModal from './editProfileModal/EditProfileModal'
import ConfidentalityText from './ConfidentalityText'

function JustProfilePage() {
  const {id} = JSON.parse(localStorage.getItem('token'))
  const {userInfo} = useSelector(state => state.profile) 
  const openConfidentality = () => {
    dispatch(openConfidentalityModal())
  }
  console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile(id))
  }, [])
  const openDelete = () => {
    dispatch(openDeleteModal())
  }
  const openChangeMod = () => {
    dispatch(openChangePasswordModal())
  }
  const openEditModal = () => {
    dispatch(openEditProfileModal())
  }
  return (
    <div className={classes.profile}>
      <div className={classes.container}>
        <div className={classes.profile_inner}>
            <div className={classes.personal_data}>
              <div className={classes.personal_block_one}>
                <h3 className={classes.personal_text_data}>Личные данные</h3>
              </div>
              <div className={classes.profile_inputs}>
                <TextField id="outlined-basic"  variant="outlined" value={userInfo.username} sx={{
                  '& .MuiInputBase-root':{
                    borderRadius: '10px',
                    marginRight: '20px',
                    marginBottom: '20px',
                    width: '400px',
                    height: '60px'
                  }
                }}/>
                <TextField id="outlined-basic"  variant="outlined" value={userInfo.email} sx={{
                  '& .MuiInputBase-root':{
                    borderRadius: '10px',
                    marginRight: '20px',
                    marginBottom: '20px',
                    width: '400px',
                    height: '60px'
                  }
                }}/>
                <button onClick={openEditModal} className={classes.btn_edit}>Редактировать профиль</button>
              </div>
              <div className={classes.user_info_block}>
                <div className={classes.user_password}>
                    <p className={classes.change_password_text} onClick={openChangeMod}>Изменить пароль</p>
                    <img src={crossSvg} alt="cross_password" className={classes.cross_img_password}/>
                </div>
                <div className={classes.delete_profile} onClick={openDelete}>
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
                  <p onClick={openConfidentality}>Политика конфиденциальности</p>
                  <img src={crossSvg} alt="crossSvg" className={classes.lock_cross}/>
                </div>
              </div>
            </div>
        </div>
      </div>
      <ConfidentalityText/>
      <EditProfileModal/>
      <ChangePasswordModa/>
      <DeleteProfileModal/>
    </div>
  )
}

export default JustProfilePage