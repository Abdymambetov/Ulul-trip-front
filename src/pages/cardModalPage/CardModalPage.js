import { Box, Modal } from '@mui/material'
import React from 'react'
import classes from './CardModalPage.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { closeCardModal} from '../../store/slices/authSlice';
import penImg from '../../images/cardModalImg/pen.svg'
import starsImg from '../../images/cardModalImg/Stars.svg'
import heartImg from '../../images/cardModalImg/Heart.svg'
import regionImg from '../../images/cardModalImg/region.svg'
import groupImg from '../../images/cardModalImg/Group.svg'
import ratingImg from '../../images/cardModalImg/rating.svg'
import guideImg from '../../images/cardModalImg/guide.svg'
import walkerImg from '../../images/cardModalImg/walker.svg'
import googleImg from '../../images/cardModalImg/google.svg'
// import { useState } from 'react';
// import Heart from 'react-heart';


const style = {
    width: '990px',
    height: '100vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
};
function CardModalPage() {
    const dispatch = useDispatch()
    const {cardModal} = useSelector(state => state.modalTour)
    const closeMod = () => {
        dispatch(closeCardModal())
    }
//     const [active ,setActive] = useState(false);
//   const [notActive , setNotActive] =useState('heard');


//   const heandleClick = () => {
//     if(active === false){
//       setActive(true)
//       setNotActive('heard_focus')
//     } else{
//       setActive(false)
//       setNotActive('heard')
//     }
//   }
  return (
    <div>
        <Modal
            open={cardModal}
            aria-labelledby="modal-modal-title"
            onClose={closeMod}
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)', overflow: 'auto',
        '& .MuiBox-root ':{
            padding: '0px'
        }}}
        >
        <Box sx={style}>
            <button onClick={closeMod}>hello</button>
            
            <div className={classes.modal_inner}>
            <div className={classes.block_reviwes}>
                <div className= {classes.slider}></div>
                <div className={classes.arrows}></div>
                <div className={classes.text}>
                     Кель-Суу — это высокогорное озеро ледникового происхождения, располагающееся в юго-восточной части Нарынской области, близ кыргызско-китайской границы, на высоте 3500 метров. Озеро потрясает своими видами — вода в нем ярко-голубого цвета и очень красиво контрастирует с окружающими его суровыми скалами. Это одно из самых красивых, и вместе с тем труднодоступных мест в Кыргызстане.Кель-Суу — это озеро завального типа, образованное в большой расщелине между скалами. С берега не видно большей его части, а потому чтобы увидеть озеро целиком, нужно плыть по нему на лодке. Длина озера составляет 9 километров, а ширина — варьируется от 500 метров до 2-х километров в самом широком месте.У озера имеется одна необычная особенность, в честь которой и ему и было дано такое название: Кель-Суу в переводе с кыргызского переводится как «преходящая вода». И действительно, иногда вода пропадает, утекая в подземные пещеры и гроты, а потому перед поездкой туда нужно иметь ввиду, что озеро можно и не застать, однако и в этом случае вам откроются инопланетные пейзажи со скалами.Озеро находится на труднодоступном хребте Кокшаал-Тоо, а путь туда лежит через обширную Ак-Сайскую долину и изобилует болотистыми местами и бродами, справиться с которыми может только подготовленный автомобиль и опытный водитель. Сама дорога к озеру от лагеря тоже живописна: высокогорные пастбища, реки, стада яков и пики ледников на горизонте не оставят никого равнодушным.

            </div>
            <div className={classes.reviwes}>
                <div className={classes.title}>Отзывы</div>
                <img src={penImg} alt='pen' className={classes.icon_pen}/>
            </div> 
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            
                <div className={classes.people_reviwes}>
                <div className={classes.unwanted_line}></div>
                <div className={classes.header_review}>
                    <div className={classes.info}>
                    <h5 className={classes.name}>
                        Имя Фамилия
                    </h5>
                    <h6 className={classes.date}>
                        ДД/ММ/ГГГГ
                    </h6>
                    </div>
                    <img src={starsImg} alt ='stars' className={classes.stars}/>
                </div>
                    <hr className={classes.line}/>
                <div className={classes.review_text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu ea commodo consequat. t in culpa qui officia deserunt mollit anim id est laborum...
                </div>
                </div>        
        
            </div>
            <div className={classes.block_booking}>
                {/* <div className={classes.heart_header}>
                <div className={notActive} style={{width: "32px", height: "32px", }}>
                      <Heart  className='heard-back' 
                      isActive={active} 
                      onClick={heandleClick}
                      animationTrigger = "both" 
                      inactiveColor='red'
                      activeColor = "red"
                      animationDuration={0.1} style={{width: '20px', height: '18px'}}/>
                 </div>
             </div> */}
                
                <div className={classes.heart_header}>
                    <img scr={heartImg} alt ='h' className={classes.heart}/>
                    <h1 className={classes.heart_text}>Сулайман-Тоо</h1>
                </div>



            <div className={classes.location_and_level}>
                    <div className={classes.region}>
                        <img scr ={regionImg} alt = 'r' className={classes.region_image}/>
                        <div className={classes.region_text}>Область</div>
                    </div>
                    <div className={classes.level}>
                        <img scr={groupImg} alt ='g' className={classes.group_image}/>
                        <div className={classes.level_text}>Сложность</div>
                    </div>    
            </div>
            <div className={classes.user_choice}>
                         <div className={classes.region_name}>Ош</div>
                         <div className={classes.level_name}>Экстремальный</div>
                    </div>
                    <hr className={classes.line_two}></hr>



            <div className={classes.duration_and_price}>
                    <div className={classes.duration}>
                        <img scr ={regionImg} alt = 'r' className={classes.duration_image}/>
                        <div className={classes.duration_text}>Длительность</div>
                    </div>
                    <div className={classes.price}>
                        <img scr={groupImg} alt ='g' className={classes.price_image}/>
                        <div className={classes.price_text}>Цена</div>
                    </div>    
            </div>
            
             <div className={classes.user_choice_two}>
                <div className={classes.days}>
                    <div className={classes.days_number}>3</div>
                    <div className={classes.days_text}>дня</div>
                </div>
                <div className={classes.choice_price}>
                    <div className={classes.price_number}>5000</div>
                    <div className={classes.price_som}>som</div>
                </div>
             </div>
                    <hr className={classes.line_two}></hr>
                    
                <div className={classes.rating_and_guide}>

               

                    
                    <div className={classes.rating}>
                        <img scr = {ratingImg} alt ='r' className={classes.rating_image}/>
                        <div className={classes.rating_text}>Рейтинг</div>
                    </div>
                    <img scr ={starsImg} alt ='stars' className={classes.stars_image}/>

                    
                <div className={classes.walker_and_google}>
                    <div className={classes.walker}>
                        <img scr ={walkerImg} alt = 'w' className={classes.walker_image}/>
                        <div className={classes.walker_text}>Пеший</div>
                        <div className={classes.walker_text_two}>тур</div>
                    </div>
                <div className={classes.google}>
                    <div className={classes.google_text_and_image}>
                        <img scr ={googleImg} alt ='g' className={classes.google_image}/>
                        <div className={classes.google_text_main}>
                            <div className={classes.google_text}>Google</div>
                            <div className={classes.google_text_two}>карты</div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className={classes.guide}>
                        <div className={classes.guide_text_and_image}>
                            <img scr ={guideImg} alt ='g' className={classes.guide_image}/>
                            <div className={classes.guide_text}>Гид</div>
                        </div>
                    </div>
                </div>
               
                  
                </div>

                
            </div>
            </div>
        </Box>  
        </Modal>
    </div>
  )
}

export default CardModalPage