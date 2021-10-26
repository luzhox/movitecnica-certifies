import React, { useState, useEffect } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import style from './style.module.scss'

const Home = () => {
  const [isDisabled, setIsDisabled] = useState(true)
  const [confirm, setConfirm] = useState(false)
  const [errorExist, setErrorExist] = useState(false)

  const [form, setForm] = useState(false)
  const handleData = (value) => {
    setForm(value)
  }
  useEffect(() => {
    console.log(form)
    if (form && form.length < 2) {
      setIsDisabled(true)
      return setErrorExist('Ingrese un número de serie válido')
    }
    setIsDisabled(false)
    return setErrorExist(false)
  }, [form])

  const submitForm = async () => {
    await axios
      .post('http://movitecnica.hadronica.pe/consultar', { g_serie: form })
      .then((response) => {
        if (response.data.length) {
          sessionStorage.setItem('data', JSON.stringify(response.data[0]))
          return setConfirm(true)
        }
        return setErrorExist('No existen registros para este número de serie')
      })
      .catch((error) => {
        return console.error(error)
      })
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
          minLength={2}
          maxLength={12}
          hasError={errorExist.length ? errorExist : ''}
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
