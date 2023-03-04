import React from 'react'
import classes from '../justHeader/JustHeader.module.css'
import Vector from '../../../images/headerImg/Vector.svg'
import { Link } from 'react-router-dom';
import HeartIcon from '../../../images/headerImg/heart.svg';
import searchImg from '../../../images/firstBlockImg/search.svg'
import svgSearch from '../../../images/headerImg/Frame 314.svg';
import { useDispatch } from 'react-redux';
import { openLikesModal } from '../../../store/slices/authSlice';
import LikesModal from '../../likesModal/LikesModal';

function ProfileHeader() {
  const dispatch = useDispatch()
  const openLikes = () => { 
    dispatch(openLikesModal())
  }
  return (
    <div>
         <div className={classes.header}>
            <div className={classes.container}>
                <header className={classes.header_inner}>
                  <div className={classes.header_antools}>
                    <Link to='/'>
                        <img src={Vector} alt="vector" className={classes.vector_img}/>
                    </Link> 
                      <h3 className={classes.ulul}>Ulul Trip</h3>
                  </div>
                  <div className={classes.profile_header_search}>
                    <a href='search'>
                      <img src={svgSearch} alt="search" className={classes.search_svg}/>
                    </a>
                    <img src={HeartIcon} alt="Heart" className={classes.heart_icon } onClick={openLikes}/>
                  </div>
                </header>
            </div>
        </div>
        <LikesModal/>
    </div>
  )
}

export default ProfileHeader