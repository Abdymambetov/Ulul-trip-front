import React from 'react'
import { Modal, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { closeConfidentalityModal } from '../../../store/slices/authSlice'
import classes from './ConfidentalityText.module.css'
import croosImg from '../../../images/modalImg/Cross2.svg'

const style = {
    width: '990px',
    height: '600px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%) scale(1.05)',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
}
function ConfidentalityText() {
    const {confidentalityModal} = useSelector(state => state.modalTour)
    const dispatch = useDispatch()
    const closeMod = () => {
        dispatch(closeConfidentalityModal())
    }
  return (
    <Modal 
    open={confidentalityModal}
    onClose={closeMod}>
        <Box sx={style}>
            <div>
            <div className={classes.cross_parent}>
                <img
                    src={croosImg}
                    alt="cross"
                    onClick={closeMod}
                    className={classes.croos_ulul}
                />
            </div>
                <div>
               <div className={classes.privacy_policy}>
               <h1 className={classes.caption_privacy}>
               Политика конфиденциальности
               </h1>
            <div className={classes.text_privacy}>Настоящий документ «Политика конфиденциальности» (далее по тексту – «Политика») представляет собой правила использования /указать владельца сайта/ (далее – «мы» и/или «Администрация») данных интернет-пользователей (далее «вы» и/или «Пользователь»), собираемых с использованием сайта / указать URL сайта/ (далее – «Сайт»).  </div>


            <h3 className={classes.caption_data}>1. Обрабатываемые данные</h3>

    <div className={classes.data}>1.1. Мы не осуществляем сбор ваших персональных данных с использованием Сайта.</div>
    <div className={classes.data}>1.2. Все данные, собираемые на Сайте, предоставляются и принимаются в обезличенной форме (далее – «Обезличенные данные»).</div>
    
    
    <div className={classes.data}>1.3. Обезличенные данные включают следующие сведения, которые не позволяют вас идентифицировать:</div>
    <div className={classes.data}>1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с использованием онлайн-форм и программных модулей Сайта, включая имя и номер телефона и/или адрес электронной почты.</div>
    <div className={classes.data}>1.3.2. Данные, которые передаются в обезличенном виде в автоматическом режиме в зависимости от настроек используемого вами программного обеспечения.</div>
    <div className={classes.data}>1.4. Администрация вправе устанавливать требования к составу Обезличенных данных Пользователя, которые собираются использованием Сайта.
1.5. Если определенная информация не помечена как обязательная, ее предоставление или раскрытие осуществляется Пользователем на свое усмотрение. Одновременно вы даете информированное согласие на доступ неограниченного круга лиц к таким данным. Указанные данные становится общедоступными с момента предоставления и/или раскрытия в иной форме.</div>
    <div className={classes.data}>1.6. Администрация не осуществляет проверку достоверности предоставляемых данных и наличия у Пользователя необходимого согласия на их обработку в соответствии с настоящей Политикой, полагая, что Пользователь действует добросовестно, осмотрительно и прилагает все необходимые усилия к поддержанию такой информации в актуальном состоянии и получению всех необходимых согласий на ее использование.
</div>
    <div className={classes.data}>1.7. Вы осознаете и принимаете возможность использования на Сайте программного обеспечения третьих лиц, в результате чего такие лица могут получать и передавать указанные в п.1.3 данные в обезличенном виде.
</div>
    <ul className={classes.data}>1.8. Состав и условия сбора обезличенных данных с использованием программного обеспечения третьих лиц определяются непосредственно их правообладателями и могут включать:
<li className={classes.data_list}>данyые браузера (тип, версия, cookie);</li>
<li className={classes.data_list}>данные устройства и место его положения;</li>
<li className={classes.data_list}>данные операционной системы (тип, версия, разрешение экрана);</li>
<li className={classes.data_list}>данные запроса (время, источник перехода, IP-адрес).</li>
</ul>
    <div className={classes.data}>1.9. Администрация не несет ответственность за порядок использования Обезличенных данных Пользователя третьими лицами.
</div>



            <h3 className={classes.caption_data}>Цели обработки данных</h3>

    <div className={classes.data}>2.1. Администрация использует данные в следующих целях:</div>
    <div className={classes.data}>
2.1.1. Обработка поступающих запросов и связи с Пользователем;</div>
    <div className={classes.data}>2.1.2. Информационное обслуживание, включая рассылку рекламно-информационных материалов;</div>  
    <div className={classes.data}>2.1.3. Проведение маркетинговых, статистических и иных исследований;</div>
    <div className={classes.data}>2.1.4. Таргетирование рекламных материалов на Сайте.</div>
 
   



            <h3 className={classes.caption_data}>Требования к защите данных</h3>
    <div className={classes.data}>3.1. Администрация осуществляет хранение данных и обеспечивает их охрану от несанкционированного доступа и распространения в соответствии с внутренними правилами и регламентами.</div>  
    <div className={classes.data}>3.2. В отношении полученных данных сохраняется конфиденциальность, за исключением случаев, когда они сделаны Пользователем общедоступными, а также когда используемые на Сайте технологии и программное обеспечение третьих лиц либо настройки используемого Пользователем программного обеспечения предусматривают открытый обмен с данными лицами и/или иными участниками и пользователями сети Интернет.
</div>
    <div className={classes.data}>3.3. В целях повышения качества работы Администрация вправе хранить лог-файлы о действиях, совершенных Пользователем в рамках использования Сайта в течение 1 (Одного) года.
</div>



          
               </div>
              








                </div>
            </div>
        </Box>
    </Modal>
  )
}

export default ConfidentalityText