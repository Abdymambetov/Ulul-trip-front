import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Accordion.module.css'
import Ask from '../../../../images/lastblockimg/img/Group 307 (1).svg'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordionBlock() {
  return (
    <div>
      <div className={classes.container}>

      <div className={classes.ask_info}>
        <img src={Ask} alt="Ask" />
        <h1>Помощь и советы</h1>
      </div>

 <div className={classes.accordion}>

    <Accordion className={classes.accord} style={{margin: 0}}
    >
      <AccordionSummary style={{'cursor': 'none'}}
        sx={{
          '& .MuiTypography-root':{
             "fontSize": '16px',
             "lineHeight": "17px",
          }
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.info_item}>
        Как часто мы будем останавливаться на привал?</Typography>
      </AccordionSummary>
      <AccordionDetails
       sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
        В зависимости от сложности и характера рельефа привалы будут каждые 30-50 минут, длительность привала - 5-15 минут. Среди дня один большой привал на обед длительностью один час. Скорость движения группы определяется по самому медленному человеку-черепашке и по общему настрою.
       
        </Typography>
        <Link className={classes.text} to='faq'>'Читать полностью- </Link>
      </AccordionDetails>
    </Accordion>

    <Accordion className={classes.accord} style={{margin: 0}}>
      <AccordionSummary style={{'cursor': 'none'}}
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '16px',
           "lineHeight": "17px",
        }
      }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.info_item}>Что делать если я потерялся?</Typography>
      </AccordionSummary>
      <AccordionDetails 
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
        Вероятность того, что это случится, стремится к нулю. Но если вы все же засмотрелись на бабочку/дерево/облако/пейзаж и умудрились заблудиться, первое, что нужно сделать – перестать паниковать. Второе – позвать кого-то из группы, покричать “Эва”. Если попытка успехом не увенчалась, позвонить тимлидеру. Если нет связи, не стоит стремглав нестись по дороге вперед. Точного маршрута вы не знаете, и можете еще больше затеряться. Лучше останьтесь на месте и ждите, пока за вами вернуться и строго отчитают.

        </Typography>
        <Link className={classes.text} to='faq'>Читать полностью -</Link>
      </AccordionDetails>
    </Accordion>

    <Accordion className={classes.accord} style={{margin: 0}}>
      <AccordionSummary style={{'cursor': 'none'}}
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '16px',
           "lineHeight": "17px",
        }
      }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.info_itemone}>Какие принадлежности 
брать с собой в тур?</Typography>
      </AccordionSummary>
      <AccordionDetails
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
         На нашем сайте есть много статей, посвященных снаряжению. В этих статьях сможете найти ответы на большинство интересующих вас вопросов и просмотреть списки индивидуального снаряжения для различных походов. Не стесняйтесь, расспросите инструктора о снаряжении до начала похода.За годы работы у нас накопилось очень много популярных вопросов от вас о снаряжении, одежде, выборе маршрута, подготовке к треку и другое. И постарались о каждом из них расписать максимально детально.

        </Typography>
        <Link className={classes.text} to='faq'>Читать полностью -</Link>
      </AccordionDetails>
    </Accordion>

    <Accordion className={classes.accord} style={{margin: 0}}>
      <AccordionSummary style={{'cursor': 'none'}}
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '16px',
           "lineHeight": "17px",
        }
      }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.info_item}>Что делать если я потерялся?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
         Вероятность того, что это случится, стремится к нулю. Но если вы все же засмотрелись на бабочку/дерево/облако/пейзаж и умудрились заблудиться, первое, что нужно сделать – перестать паниковать. Второе – позвать кого-то из группы, покричать “Эва”. Если попытка успехом не увенчалась, позвонить тимлидеру. Если нет связи, не стоит стремглав нестись по дороге вперед. Точного маршрута вы не знаете, и можете еще больше затеряться. Лучше останьтесь на месте и ждите, пока за вами вернуться и строго отчитают.

        </Typography>
        <Link className={classes.text} to='faq'>Читать полностью -</Link>
      </AccordionDetails>
    </Accordion>  

    <Accordion className={classes.accord} style={{margin: 0}}>
      <AccordionSummary style={{'cursor': 'none'}}
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '16px',
           "lineHeight": "17px",
        }
      }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.info_itemtwo}>Как с магазинами, электричеством 
и мобильной связью?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
        Вначале и конце маршрута магазины точно будут, а вот будут ли они на протяжении вы можете узнать из описания конкретного похода на сайте. На некоторых маршрутах есть возможность подзарядить аккумуляторы, а на некоторых нет - берите запасные. Связь в горах ловит гораздо чаще, чем не ловит и с каждым годом покрытие все улучшается. Так что скоро мест, где до вас не смогут достучаться может почти не остаться..

        </Typography>
        <Link className={classes.text} to='faq'>Читать полностью -</Link>
      </AccordionDetails>
    </Accordion> 

    <Accordion className={classes.accord} style={{margin: 0}}>
      <AccordionSummary style={{'cursor': 'none'}}
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '16px',
           "lineHeight": "17px",
        }
      }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.info_itemthree}>Какие принадлежности брать
с собой в тур?</Typography>
      </AccordionSummary>
      <AccordionDetails
      sx={{
        '& .MuiTypography-root':{
           "fontSize": '12px',
           "lineHeight": "16px",
        }
      }}>
        <Typography className={classes.qestion}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <Link className={classes.text} to='faq'>Читать полностью -</Link>
      </AccordionDetails>
    </Accordion>  

</div>

  <Link className={classes.btn_info}to='faq'>смотреть весь раздел -</Link>
   

      </div>
    </div>
  )
}

export default AccordionBlock