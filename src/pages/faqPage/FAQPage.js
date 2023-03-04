import React from 'react'
import {useRef, useState, useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import point from "../../images/fagpageimg/Vector (19).svg"
import classes from './FAQPage.module.css'

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(0)

  const element = [
    useRef(null),
    useRef(null),
    useRef(null)
  ]
   
  const scrollToAction = (index) => {
    element[index].current.scrollIntoView({ behavior: 'smooth' });
    setActiveIndex(index)
  };

  useEffect(() => {
    const handleScroll = () => {
      const elementTops = element.map((ref) => ref.current.getBoundingClientRect().top);
      const index = elementTops.findIndex((top) => top >= 0);
      setActiveIndex(index === -1 ? element.length - 1 : index);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [element]);


  return (
    <div>
      
    <div className={classes.container}>
      <div className={classes.container_item}>
          <div className={classes.text_item}>
            <div className={classes.info_item}>
                    <p className={activeIndex === 0 ? 'active' : ''} onClick={() => scrollToAction(0)}>Популярное</p>
                    <p className={activeIndex === 1 ? 'active' : ''} onClick={() => scrollToAction(1)}>Популярное</p>
                    <p className={activeIndex === 2 ? 'active' : ''} onClick={() => scrollToAction(2)}>Популярное</p>
                    <p>Популярное</p>
                    <p>Популярное</p>
                    <p>Популярное</p>
            </div>
          </div>
          <div className={classes.block_item}>
            {element.map((ref,index)=>(
                <div className={classes.block_info} key={index} ref={ref} >
                <div className={classes.wrap_block}>
                  <div className={classes.image_item}>
                    <img src={point} alt="Frame" />
                    <div className={classes.text_info}>
                      <p>Популярное</p>
                      </div>
                    </div>
                  </div>
                  <div className={classes.accordion_block}
                  
                >
                    <Accordion  className={classes.accordion_input} 
                     
                    //</div> sx = {{
                    //  "& .MuiPaper-root":{
                    //    margin: "19px"
                    //  }
                    //}}   
                    >
                      <AccordionSummary
                      sx={{
                        "& .MuiSvgIcon-root ":{
                          color: "#0C73FE",
                        }
                      }} 
                      
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.answer_item}> Как с магазинами, электричеством, мобильной связью?   </Typography>
                      </AccordionSummary >
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}>
                        Вначале и конце маршрута магазины точно будут, а вот будут ли они на протяжении вы можете узнать из описания конкретного похода на сайте. На некоторых маршрутах есть возможность подзарядить аккумуляторы, а на некоторых нет - берите запасные. Связь в горах ловит гораздо чаще, чем не ловит и с каждым годом покрытие все улучшается. Так что скоро мест, где до вас не смогут достучаться может почти не остаться..

                        </Typography>
                      </AccordionDetails >
                    </Accordion>

                    <Accordion  className={classes.accordion_input}>
                      <AccordionSummary
                      sx={{
                        "& .MuiSvgIcon-root ":{
                          color: "#0C73FE",
                        }
                      }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.answer_item}>Как быть, если я заболею или травмируюсь и не смогу идти дальше?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}>
                      Наш тимлидер сможет оказать вам первую медицинскую помощь, в групповом снаряжении обязательно есть походная аптечка. Вам дадут таблетку, капли, мазь или обезболивающее в зависимости от ситуации. Если же, не дай Бог, у вас будет серьёзна травма или нешуточное заболевание – вместе с инструктором вы сойдете с маршрута и отправитесь в ближайший населённый пункт, где есть медпункт или поликлиника. В особо тяжёлых случаях (которых не было) можно вызвать вертолёт МЧС..

                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion  className={classes.accordion_input}>
                      <AccordionSummary
                      sx={{
                        "& .MuiSvgIcon-root ":{
                          color: "#0C73FE",
                        }
                      }}
                        className={classes.answer_info}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.answer_item}>Что включено в стоимость похода?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}
                         >
                      Мы стараемся сделать походы максимально комфортными для вас и часто включаем в стоимость все расходы по маршруту. Но бывает, что их угадать невозможно - в таких случаях мы не включаем. Что входит в стоимость конкретного похода читайте в его описании. Бывают маршруты, где есть две стоимости - базовый и оптимальный пакет. О каждом из них детально расписано на страничке маршрута. Но даже если и после прочтения этой информации у вас остались вопросы - смело задавайте их нашим консультантам.

                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion  className={classes.accordion_input}>
                      <AccordionSummary
                         sx={{
                          "& .MuiSvgIcon-root ":{
                            color: "#0C73FE",
                          }
                        }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.answer_item}>Что необходимо взять с собой?</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}>
                        На нашем сайте есть много статей, посвященных снаряжению. В этих статьях сможете найти ответы на большинство интересующих вас вопросов и просмотреть списки индивидуального снаряжения для различных походов. Не стесняйтесь, расспросите инструктора о снаряжении до начала похода.За годы работы у нас накопилось очень много популярных вопросов от вас о снаряжении, одежде, выборе маршрута, подготовке к треку и другое. И постарались о каждом из них расписать максимально детально.

                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                    <Accordion  className={classes.accordion_input}>
                      <AccordionSummary
                      sx={{
                        "& .MuiSvgIcon-root ":{
                          color: "#0C73FE",
                        }
                      }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.answer_item}>Хочу взять собаку в поход</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}>
                      С нами неоднократно ходили участники с собаками, и чаще всего это было круто. Но в то же время есть ряд определенных проблем и сложностей. Собака может пораниться, укусить кого-то из участников, быть подраной местными псами (поэтому маршрут должен проходить вдали от населенных пунктов). Нужно принять, что полную ответственность за собаку и ее действия несет хозяин, и, если из-за проблем с животным ему (хозяину) придется сойти с маршрута, перерасчет стоимости мы не производим.
                Также мы ввели обязательные условия для участия собак в группах Кулуара:
                У хозяина и пса должен быть опыт участия в походах. Минимум три похода на двоих. Если у пса опыта нет, тогда должен быть опыт длительных прогулок по 15-20 км.
                Полное согласие группы. Если кто-то из участников будет категорически против, мы не сможем взять собаку.
                Аптечка для собаки. Перевязочные и какие-то собачьи лекарства – обязательно взять с собой.
                Документы на собаку и все необходимые прививки
                Отдельная палатка. Мы не даем в прокат палатки для участников с собаками (после мокрого пса может остаться запах, пес может вымарать и порвать палатку) и не станем вас подселять к другим участникам. Но с личной палаткой на вас (или ваших друзей, которые тоже не прочь, если к ним залезет мокрый пес) мы с радостью возьмем
                .

                        </Typography>
                      </AccordionDetails>
                    </Accordion>


                    <Accordion  className={classes.accordion_input}>
                      <AccordionSummary
                      sx={{
                        "& .MuiSvgIcon-root ":{
                          color: "#0C73FE",
                        }
                      }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                      >
                        <Typography className={classes.answer_info}>Походы с детьми - страхи и сомнения</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.otvet_item}>
                        С какого возраста можно брать детей. В наши походы мы рекомендуем брать детей от 7-ми лет. Они уже вполне самостоятельны, имеют окрепший иммунитет, готовы бегать и много ходить в поисках интересного и нового. Главная проблема - это поддерживать интерес чада к походу, и успевать отвечать на все вопросы, ведь их будет очень много.Затяжные нудные подъемы и длительные переходы по ровной местности часто даются деткам тяжело – ведь это скучно. В такие моменты мы стараемся развлекать их играми и историями. В некоторые походы можно брать детей и младшего возраста, но тут уже нужно сопровождение обеих родителей и постоянный присмотр.
                Не опасно ли? Опять же, все зависит от возраста. Для более старших – от 7-ми лет и выше – основная опасность кроется в самих детях и их неусидчивости. Когда группа преодолевает сложный участок пути, дети инстинктивно чувствуют всю серьезность момента, ведут себя собрано и хорошо. Да и взрослые в такие моменты максимально сконцентрированы и присматривают за своими чадами. А вот на затянувшемся привале или в лагере, когда дети начинают скучать, а родители расслабляются (видимой опасности то нет) - жди приключений. То начнут играть в рыцарей и наставят один одному синяков, то спрячут спички от дежурных, то начнут разжигать свой костерок и обожгутся... много всяких может быть приключений, это же дети)) Главное, не подпускать их близко к обрывам и следить, чтобы не ели ненужных ягод. За детьми младшего возраста нужен более тщательный присмотр и уход.
                Выдержит ли ребенок.Как показывает практика, дети зачастую справляются с переходами еще лучше родителей. Им все ново и все интересно, и это заряжает их невиданной энергией. Весь день они могут ходит туда-сюда по тропе, расспрашивая взрослых обо всем, что видят и рассказывая свои, часто придуманные на ходу, истории.Иногда их очень интересно послушать, детская фантазия еще не так сжата рамками и нормами, как наша с вами. Дети быстрее взрослых устают, ведь выносливости у них меньше. Поэтому привалы нужно делать чаще. Но зато энергии у них гораздо больше, главное - поддерживать заинтересованность в происходящем и не давать скучать.
                А выдержу ли я? В организованном походе с ребенком вам придется нести за него часть вещей и еды, а иногда, когда он устанет, и самого малыша. Конечно, это тяжелей. Поэтому, советуем ходить в горы с детьми сразу всей семьей, чтобы было легче распределить нагрузку.
                Будет ли с кем общаться? Обычно, в детские походы ходят по несколько семей, так что и вам, и вашему ребенку скучать не придется. Пока детвора будет играть в сторонке, вы сможете познакомиться с их родителями и обзавестись новыми друзьями.

                        </Typography>
                      </AccordionDetails>
                    </Accordion>

                </div>   
                </div> 
                ))}
          </div>
        </div>
       </div>
    </div>
  )
}

export default FAQPage