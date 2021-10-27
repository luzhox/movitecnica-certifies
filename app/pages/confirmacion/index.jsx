import React, { useState, useEffect } from 'react'
import Banner from '@components/Banner'
import moment from 'moment'
const Confirmacion = () => {
  const [product, setProduct] = useState({
    name: '',
    model: '',
    brand: '',
    serie: '',
    periodo: '',
    endedTime: '',
  })
  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('data'))
    setProduct({
      name: data.g_nombre,
      model: data.g_modelo,
      brand: data.g_marca,
      serie: data.g_serie,
      periodo: 3,
      emision: data.g_fecha_emi,
      vencimiento: moment.utc(data.g_fecha_ven).format('DD/MM/YYYY'),
      estado: data.g_estado,
    })
  }, [])
  return (
    <>
      <Banner
        route='./resources/assets/bg-banner.jpg'
        text='!Tu garantía está próximo a vencer! Programa tu mantenimiento'
        btnText='¡Solicitalo ya!'
        btnUrl='https://movitecnica.com.pe/'
      />
      <div className='confirm-page'>
        <div className='container'>
          <div className='confirm-page__content'>
            <div className='confirm-page__title'>
              <h2>Hola, {product.name}</h2>
              <p>Te mostramos el detalle de tu producto</p>
            </div>
            <h3>Modelo:</h3>
            <p>{product.model}</p>
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
