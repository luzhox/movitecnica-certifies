import React, { useState, useEffect } from 'react'
import Banner from '@components/Banner'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Confirmacion = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: '',
    model: '',
    brand: '',
    serie: '',
    periodo: '',
    endedTime: '',
  })
  const data = useSelector((state) => state.loader.home.data)

  useEffect(() => {
    if (data && data.g_nombre) {
      const emision = moment(data.g_fecha_emi)
      const vencimiento = moment(data.g_fecha_ven)
      const garantia = vencimiento.diff(emision, 'months')
      return setProduct({
        name: data.g_nombre,
        model: data.g_modelo,
        brand: data.g_marca,
        serie: data.g_serie,
        periodo: garantia,
        emision: data.g_fecha_emi,
        vencimiento: moment.utc(data.g_fecha_ven).format('DD/MM/YYYY'),
        estado: data.g_estado,
      })
    }
    return navigate('/')
  }, [data, navigate])
  return (
    <>
      <Banner
        route='./resources/assets/bg-banner.jpg'
        text='¡Tu garantía está próximo a vencer! Programa tu mantenimiento'
        btnText='¡Solicitalo ya!'
        btnUrl={`https://api.whatsapp.com/send/?phone=51969336875&text=Deseo+programar+el+mantenimiento+de+mi+equipo+${product.model}+serie+${product.serie}&type=phone_number&app_absent=0`}
      />
      <div className='confirm-page'>
        <div className='container'>
          <div className='confirm-page__content'>
            <div className='confirm-page__title'>
              <h2>Hola, {product.name}</h2>
              <p>Te mostramos el detalle de tu producto</p>
            </div>
            <h3>Modelo:</h3>
            <p> {product.model}</p>
            <div className='confirm-page__group'>
              <div className='confirm-page__group__field'>
                <h3>Marca:</h3>
                <p>{product.brand}</p>
              </div>
              <div className='confirm-page__group__field'>
                <h3>Serie:</h3>
                <p>{product.serie}</p>
              </div>
            </div>
            <div className='confirm-page__group'>
              <h3>Garantía:</h3>
              <p>
                {product.periodo} {product.periodo > 1 ? 'meses' : 'mes'}
              </p>
            </div>

            <div className='confirm-page__ended'>
              <p>
                Tu garantía vence el: <strong>{product.vencimiento}</strong>
              </p>
            </div>
          </div>
        </div>
        <div className='confirm-page__img'>
          <img src='./resources/assets/character-confirm.jpg' alt='' />
        </div>
      </div>
    </>
  )
}

export default Confirmacion
