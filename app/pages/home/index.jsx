import React, { useState, useEffect } from 'react'
import Button from '@components/Button'
import Input from '@components/Input'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './style.module.scss'
import * as actions from './state/actions'
const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isDisabled, setIsDisabled] = useState(true)
  const [errorExist, setErrorExist] = useState(false)
  const home = useSelector((state) => state.loader.home)

  const [form, setForm] = useState(false)
  const handleData = (value) => {
    setForm(value)
  }
  useEffect(() => {
    if (form && form.length < 2) {
      setIsDisabled(true)
      return setErrorExist('Ingrese un número de serie válido')
    }
    setIsDisabled(false)
    return setErrorExist(false)
  }, [form])

  const submitForm = () => {
    const success = () => {
      navigate('/confirmacion')
    }
    dispatch(actions.callService(form, success))
  }
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__img}></div>
      <div className={style.wrapper__form}>
        <h2>Verifica tu producto</h2>
        <p>
          Ingresa el número de serie de tu tecle o polipasto y certifica tu
          equipo
        </p>
        <Input
          label='Número de serie'
          value={form}
          onChange={handleData}
          minLength={2}
          maxLength={12}
          hasError={
            // eslint-disable-next-line no-nested-ternary
            errorExist.length ? errorExist : home.message ? home.message : ''
          }
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
