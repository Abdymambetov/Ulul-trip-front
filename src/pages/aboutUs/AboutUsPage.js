import React, { useEffect, useState } from 'react'
import classes from './AboutUsAPage.module.css'
import AboutusImg from '../../images/aboutUsImg/aboutus.png'
import stickImg from '../../images/aboutUsImg/stick.svg'
import expertsImg from '../../images/aboutUsImg/experts.svg'
import clientImg from '../../images/aboutUsImg/client.svg'  
import monthlyImg from '../../images/aboutUsImg/monthly.svg'
import yearsImg from '../../images/aboutUsImg/years.svg'


function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < value) {
        setCount(count + 1);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count, value]);

  return <h1>{count}</h1>;
}


function AboutUsPage() {

  return (
    <div className={classes.aboutUs}>
        <div className={classes.container}>
            <div className={classes.about_us_inner}>
                <div className ={classes.about_us_block}>
                  <div className={classes.abt_all_text}>
                      <div className={classes.abt_text_caption}> 
                      <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                      <div className={classes.caption_text}>О нас</div>
                      </div>
                      <div className={classes.abt_text}>
                        <p className={classes.text}>
                          Туристическая компания ОсОО “Snail Trip” ведет туроператорскую деятельность с февраля 2020 года, а по работе с иностранными Туристами с 2018 года. За 4 года работы в сфере туризма, фирма зарекомендовала себя как надежный поставщик туристических и транспортных услуг в Кыргызстане.
                        </p>
                        <p className={classes.text }>
                        Нашими услугами пользуются крупные предприятия, дипломатические представительства, неправительственные и международные организации,крупные корпорации и известные бизнесмены.С 2021 года компания является активным членом Кыргызской Ассоциации Туроператоров (КАТО),в качестве которого участвует на официальных мероприятиях, помогающих диалогу государства и субъектов турбизнеса.   
                        </p>
                        <p className={classes.text}>
                        “Snail Trip”  придерживается политики устойчивого развития туризма, поэтому большое внимание уделяет проведению тренингов по повышению квалификации для своего персонала (менеджеры, гиды, водители, повара),а также экологических акций по очистке природных зон и парков от бытового мусора.
                        </p>
                      </div>
                  </div>
                <img src = {AboutusImg} alt ='aboutus' className={classes.abt_image} />
                </div>

                <div className={classes.we_in_numbers}>Мы в цифрах</div>
                <div className={classes.numbers_block}>
                  <div className={classes.icon_and_text}>
                  
                    
               
                
                    <img src ={expertsImg} alt = 'experts' className={classes.icon_image}/>
                    <Counter value={42} />
                    <div className={classes.number_text}>Специалистов</div>
                  </div>

                  <div className={classes.icon_and_text}>
                    <img src ={clientImg} alt = 'client' className={classes.icon_image}/>
                    <Counter value={1255}/>
                    <div className={classes.number_text}>Счастливых клиентов</div>
                  </div>

                  <div className={classes.icon_and_text}>
                    <img src ={monthlyImg} alt = 'monthly' className={classes.icon_image}/>
                  <Counter value = {22}/>
                    <div className={classes.number_text}>Туров ежемесячно</div>
                  </div>

                  <div className={classes.icon_and_text}>
                    <img src ={yearsImg} alt = 'years' className={classes.icon_image}/>
                   <Counter value ={5}/>
                    <div className={classes.number_text}>Лет на рынке</div>
                  </div>
                </div>

                <div className={classes.service_caption}>Наши услуги</div>
                <div className={classes.service_block}>
              
                  <div className={classes.favors_block}>
                    <div className={classes.favors_columns}>
                    <div className={classes.favors_caption}>
                      Наш спектр услуг
                    </div>
                  <ul className={classes.list}>
                    <li className={classes.favors_li}>Организация трансфера по всей Центральной Азии; </li>
                    <li className={classes.favors_li}>Разработка и организация групповых/индивидуальных туров и программ;</li>
                    <li className={classes.favors_li}>Бронирование гостиниц, отелей, санаториев;</li>
                    <li className={classes.favors_li}>Разработка активных горных маршрутов;</li>
                    <li className={classes.favors_li}>Поиск оптимального маршрута;</li>
                    <li className={classes.favors_li}>Предоставление гидов экскурсоводов;</li>
                    <li className={classes.favors_li}>Сопровождение по всем маршрутам;</li>
                    <li className={classes.favors_li}>Организация экскурсий;</li>
                    <li className={classes.favors_li}>Предоставление туристического инвентаря;</li>
                    <li className={classes.favors_li}>Джип-туры, треккинг и пешие походы;</li>
                    <li className={classes.favors_li}>Встреча делегаций;</li>
                    <li className={classes.favors_li}>Организация мероприятий и ивентов;</li>
                  </ul>
                    </div>
                  
                  </div>
                 
                  <div className={classes.favors_block}>
                    <div className={classes.favors_columns}>
                    <div className={classes.favors_caption}>
                      Наши преимущества
                    </div>
                  <ul className={classes.list}>
                    <li className={classes.favors_li}>Умеренные цены и гарантия качества предоставляемых услуг; </li>
                    <li className={classes.favors_li}>Для выполнения заказов наших клиентов мы используем собственные транспортные средства и квалифицированный состав гидов;</li>
                    <li className={classes.favors_li}>Заключение договора на гибких условиях с учетом индивидуальных особенностей заказчика;</li>
                    <li className={classes.favors_li}>Опыт организации 4 года;</li>
                    <li className={classes.favors_li}>Поддержка и решение возникающих проблем во время тура;</li>
                    <li className={classes.favors_li}>Удобные формы взаиморасчетов за оказанные услуги;</li>
                    <li className={classes.favors_li}>Расположение офиса в центре города;</li>
                    <li className={classes.favors_li}>Возможность изменения маршрута или программы тура в кратчайшие сроки;</li>
                    <li className={classes.favors_li}>Предоставления страховых услуг</li>
                  </ul>
                    </div>
                    
                  </div>
                 
                  <div className={classes.favors_block}>
                    <div className={classes.favors_columns}>
                    <div className={classes.favors_caption}>
                      Наша миссия
                    </div>
                  <ul className={classes.list}>
                    <li className={classes.favors_li}>Предоставить возможность всему миру узнать больше о Кыргызстане.</li>
                    <li className={classes.favors_li}>Развитие устойчивого туризма в Кыргызстане через профессиональное отношение и улучшение качества туров</li>
                    <li className={classes.favors_li}>Добиться признания Кыргызстана как заслуживающего доверия направления в мировой туристической индустрии</li>
                    <li className={classes.favors_li}>Содействие развития сервиса и обслуживание в Кыргызстане</li>
                  </ul>
                    </div>
                    
                  </div>
                 
                </div>

                <hr className={classes.line}></hr>


                <div className={classes.tour_block}>
                  <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                    Туры
                  </div>
                  </div>

                <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Не предлагаем экскурсии, которые наносят вред людям, животным, растениям, природным ресурсам, или которые являются социально и культурно неприемлемыми</li>
                  <li className={classes.tour_li}>Во время поездок на природные территории, отказываемся от одноразового пластика, а также не оставляем мусор (собираем его и безопасно утилизируем в назначенных пунктах)</li>
                  <li className={classes.tour_li}>Не продвигаем сувениры, содержащие виды флоры и фауны, находящиеся под угрозой исчезновения, как указано в договоре СИТЕС и в «Красном списке» МСОП; или исторические и археологические артефакты (кроме случаев, разрешенных законом)</li>
                  <li className={classes.tour_li}>Консультируем гостей по стандартам поведения во время экскурсий и мероприятий с акцентом на уважение местных жителей и сообществ, местной культуры, природы и окружающей среды</li>
                  <li className={classes.tour_li}>Планируя туры, учитываем климат, местность проведения туров, нагрузку и максимальное время использования.</li>
                </ul>


                  <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                    Экскурсии с участием животных
                  </div>
                  </div>


                <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Не предлагаем каких-либо экскурсии с участием диких животных в неволе, за исключением надлежащим образом регулируемых мероприятий в соответствии с местным, национальным и международным законодательством;</li>
                  <li className={classes.tour_li}>Не имеем отношения к компаниям, которые занимаются добычей, потреблением, выставкой, продажей или торговлей видами диких животных, кроме случаев, когда это является частью регулируемой деятельности, которая гарантирует, что их использование является устойчивым и соответствует местным, национальным и международным законам;</li>
                  <li className={classes.tour_li}>Дважды думаем, когда организуем туры с участием животных</li>
                  <li className={classes.tour_li}>Выбираем опытных поставщиков, которые соблюдают нормам и законам КР, и с заботой и ответственностью обращаются со своими животными</li>
                  <li className={classes.tour_li}>Инструктируем туристов о том, как правильно вести себя с животными, чтобы избежать любых рисков; ни в коем случае не пускаем туристов в алкогольном и наркотическом опьянении</li>
                  <li className={classes.tour_li}>Все животные, которые принимают участие в турах или шоу, сытые, живут в хороших условиях, обращаются с ними с заботой.</li>
                </ul>


                  <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Особые правила, касающиеся конных туров
                  </div>
                  </div>

                <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Подбираем опытного поставщика и конюха</li>
                  <li className={classes.tour_li}>Экипировка – проверяем каску для туристов</li>
                  <li className={classes.tour_li}>Проверяем грузоподъемность (человек – до 100-110 кг, партер до 80 кг)</li>
                  <li className={classes.tour_li}>Расстояние – примерно 16 км в день, эксплуатация – 6 часов в горных условиях, по прямой трассе – 8 часов.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Особые правила, касающиеся шоу с участием хищних птиц
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Подбираем опытного поставщика и конюха</li>
                  <li className={classes.tour_li}>Экипировка – проверяем каску для туристов</li>
                  <li className={classes.tour_li}>Проверяем грузоподъемность (человек – до 100-110 кг, партер до 80 кг)</li>
                  <li className={classes.tour_li}>Расстояние – примерно 16 км в день, эксплуатация – 6 часов в горных условиях, по прямой трассе – 8 часов</li>
                  <li className={classes.tour_li}>Не используем краснокнижных птиц (соколы)</li>
                  <li className={classes.tour_li}>Проверяем наличие соответствующей экипировки (наличие калпачка и т.д.)</li>
                  <li className={classes.tour_li}>Не вывозим птиц от привычной среды обитания</li>
                  <li className={classes.tour_li}>Соблюдаем за соответствующей одеждой туристов (отсутствие висящие элементы в одежде)</li>
                  <li className={classes.tour_li}>Нельзя использовать дрон при съемках.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Гиды и тур-лидеры
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>В качестве гидов нанимаем исключительно местных жителей и обеспечиваем справедливую и безопасную рабочую среду, которая поддерживает и уважает местные сообщества.</li>
                  <li className={classes.tour_li}>При найме гидов, соблюдаем достойную оплату и условия труда</li>
                  <li className={classes.tour_li}>Всем гидам даем конкретные инструкции по туру</li>
                  <li className={classes.tour_li}>Все наши гиды знают правила здоровья и безопасности, знают, как оказать первую медпомощь и что делать в экстренных случаях</li>
                  <li className={classes.tour_li}>Нанимаем только квалифицированных гидов для сопровождения наших гостей, именно когда посещаем чувствительные культурные объекты, объектам наследия или экологически чувствительные места.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Транспорт
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Весь транспорт, используемый для туров выбирается в соответствии с количеством туристов и достижением цели.</li>
                  <li className={classes.tour_li}>Соответствуем всем требованиям закона КР (страховка, патенты и тд.)</li>
                  <li className={classes.tour_li}>Следим за безопасностью и технической исправностью транспорта (и наличием ремней безопасности)</li>
                  <li className={classes.tour_li}>Отслеживаем время водителей за рулем</li>
                  <li className={classes.tour_li}>Проверяем компетентность, опыт и отзывы водителей.</li>
                  <li className={classes.tour_li}>Следим за комфортом и чистотой транспорта</li>
                  <li className={classes.tour_li}>Проверяем наличие аптечки и огнетушителя и других необходимых средств</li>
                  <li className={classes.tour_li}>Следуем обязательствам безопасного вождения и соблюдением ПДД.</li>
                  <li className={classes.tour_li}>Проверяем наличие пропускных документов на приграничные территории.</li>
                  <li className={classes.tour_li}>Выбираем размер и тип транспортного средства в зависимости от размера группы</li>
                  <li className={classes.tour_li}>Оптимизируем маршруты чтобы время в транспорте не занимало больше времени чем нужно.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Клиенты
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Для нас очень важны благосостояние клиентов и их удовлетворение.</li>
                  <li className={classes.tour_li}>Предоставляем качественную и правдивую информацию о наших продуктах и услугах</li>
                  <li className={classes.tour_li}>Защищаем приватные данные и конфиденциальность клиентов</li>
                  <li className={classes.tour_li}>Информируем клиентов еще до приезда о том как подготовится к посещению нашей страны и конкретному туру</li>
                  <li className={classes.tour_li}>Мотивировать клиентов посещать местные рестораны и магазины и покупать местные сувениры</li>
                  <li className={classes.tour_li}>Систематически оцениваем степень удовлетворенности наших клиентов и принимаем во меры для улучшения услуг и продуктов, а в случае жалоб — их рассматриваем и быстро реагируем.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Объекты размещения
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Средства размещения выбираем в соответствии со стандартами компании, специфики тура, бюджета и специфики туриста</li>
                  <li className={classes.tour_li}>Все объекты размещения, с которыми сотрудничаем, принадлежат местным жителям и 100% работающих у них сотрудников — представители местного сообщества</li>
                  <li className={classes.tour_li}>Все наши объекты в хорошем техническом состоянии и соответствуют стандартам здоровья и безопасности, например у всех есть аптечка, противопожарное оборудование</li>
                  <li className={classes.tour_li}>Предлагаемая еда всегда качественная, свежая и по возможности — выращена и произведена в Кыргызстане; мясо, овощи и молочные продукты покупаем у фермеров которые живут недалеко от объекта размещения.</li>
                </ul>

                <div className={classes.tour_caption}>
                  <img src = {stickImg} alt = 'stick' className={classes.stick_image}/>
                  <div className={classes.tour_caption_text}>
                  Еда и напитки
                  </div>
                  </div>

                  <ul className={classes.list_two}>
                  <li className={classes.tour_li}>Использовать продукты и напитки местного производства и продвигать как можно больше местные покупки во время туров и экскурсий.</li>
                  <li className={classes.tour_li}>Соблюдаем предпочтения туристов в питании (по предварительному запросу, приготовим питание с учетом диетических предпочтений и аллергии, например вегетарианское, веганское, без глютена, без лактозы, и тд.)</li>
                  <li className={classes.tour_li}>Минимизируем пищевые отходы, например оптимизируем размер порции</li>
                  <li className={classes.tour_li}>Сокращаем воду в индивидуальных одноразовых бутылках — вместо этого, предлагаем воду с большого диспенсера и просим наших клиентов пользоваться многоразовыми бутылками; независимо от условии, наша вода всегда абсолютно безопасная</li>
                  <li className={classes.tour_li}>При подаче еды в заведениях а также во время походов не пользуемся одноразовой посудой; имеем многоразовые стаканы, кружки, тарелки и приборы.</li>
                </ul>


                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUsPage