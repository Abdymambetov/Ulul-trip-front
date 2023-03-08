import classes from './Footer.module.css'
import ululImage from '../../images/modalImg/Ulul.svg'

import WithHoverStyles from '../cursor/hocHover/HOCHover'
import { Link } from 'react-router-dom'
const HoverRedLi = WithHoverStyles(Li)

function Li({ children }) {
    return (
        <div className={classes.about_point}>
            <li className={classes.about_us_text}>{children}</li>
        </div>
    )
}
const snList = [
    <div className={classes.svgs_media_facebook}></div>,
    <div className={classes.svgs_media_inst}></div>,
    <div className={classes.svgs_media_telega}></div>,
    <div className={classes.svgs_media_twiter}></div>
]

function Icon({ children }) {
    return children
}

const HoverIcon = WithHoverStyles(Icon)

function Footer() {
    const listSecond = [
        {
            el: (
                <Link to="/" className={classes.about_us_text}>
                    {' '}
                    О нас{' '}
                </Link>
            ),
            ol: (
                <Link to="/" className={classes.about_us_text}>
                    Вакансии
                </Link>
            ),
            al: (
                <Link to="/" className={classes.about_us_text}>
                    Реклама
                </Link>
            ),
            rl: (
                <Link to="faq" className={classes.about_us_text}>
                    Помощь
                </Link>
            )
        }
    ]

    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <footer className={classes.footer_inner}>
                    <div className={classes.ulul_img}>
                        <HoverIcon>
                            <img
                                src={ululImage}
                                alt="ululImage"
                                className={classes.ulul_svg}
                            />
                        </HoverIcon>
                    </div>
                    <div className={classes.social_media}>
                        {snList.map((item, i) => (
                            <HoverIcon key={i}>{item}</HoverIcon>
                        ))}
                    </div>
                    <ul className={classes.about_us}>
                        {listSecond.map((item, i) => (
                            <HoverRedLi key={i}>
                                {item.el} {item.ol} {item.al} {item.rl}
                            </HoverRedLi>
                        ))}
                    </ul>
                </footer>
            </div>
        </div>
    )
}

export default Footer
