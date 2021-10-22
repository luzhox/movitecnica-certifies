import React, { useState, useEffect } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import { Redirect } from 'react-router-dom'
import style from './style.module.scss'

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [confirm, setConfirm] = useState(false)

  const [form, setForm] = useState('')
  const handleData = (value) => {
    console.log(value)
    setForm(value)
  }
  useEffect(() => {
    if (form.length > 1) setIsDisabled(false)
  }, [form])

  const submitForm = () => {
    setConfirm(true)
  }
  return (
    <div className={style.wrapper}>
      {confirm && <Redirect to='/confirmacion' />}
      <div className={style.wrapper__img}></div>
      <div className={style.wrapper__form}>
        <h2>Verifica tu producto</h2>
        <p>
          Llena algunos datos y solícita el certificado de garantía de tu
          producto
        </p>
        <Input
          label='Número de serie'
          value={form}
          onChange={handleData}
          minLength={12}
          maxLength={12}
          hasError={form && form.length < 12 && 'Documento inválido'}
        />

        <Button
          text='Verificar'
          size='medium'
          primary
          disabled={isDisabled}
          onClick={() => submitForm()}
        />
      </div>
    </div>
  )
}

export default Home
