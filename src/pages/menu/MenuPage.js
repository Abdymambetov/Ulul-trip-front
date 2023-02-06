import React from 'react'
import classes from "./Menu.module.css"
import { useTranslation } from 'react-i18next';



function MenuPage() {
  const {t, i18n} = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
        <div className={classes.menu}>Menu</div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("ru")}>Russia</button>
    </>
  )
}

export default MenuPage