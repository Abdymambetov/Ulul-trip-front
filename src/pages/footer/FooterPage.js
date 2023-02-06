import React from 'react'
import { useTranslation } from 'react-i18next'
import classes from "./Footer.module.css"

function FooterPage() {
  const {t} = useTranslation()
  return (
    <>
        <div className={classes.foot}>Footer</div>
        <p>{t("check")}</p>
    </>
  )
}

export default FooterPage