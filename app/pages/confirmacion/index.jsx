import React, { useState, useEffect } from 'react'
import Banner from '@components/Banner'
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
    setProduct({
      name: 'Cerro Verde S.A.A',
      model: 'Polipasto eléctrico con Trolley Motorizado YJL + VTE / 2 TON 1',
      brand: 'Yale',
      serie: 'JM3110VX / A11411',
      periodo: '6',
      endedTime: '30/10/2021',
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
                Tu garantía vence el: <strong>{product.endedTime}</strong>
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
