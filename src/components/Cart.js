import React from 'react'
import { useTranslation } from 'react-i18next'

function Cart() {
    const {t} = useTranslation()
  return (
    <div>{t("check")}</div>
  )
}

export default Cart