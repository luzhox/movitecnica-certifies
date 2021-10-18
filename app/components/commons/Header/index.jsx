import React from 'react'

const Header = () => {
  return (
    <div className='header-movitecnica'>
      <div className='container'>
        <div className='header-movitecnica__brand'>
          <img src='./resources/assets/logo.png' alt='Movitecnica' />
        </div>
        <div className='header-movitecnica__nav'>
          <ul>
            <li>
              <a href='https://movitecnica.com.pe/somos/'>Somos</a>
            </li>
            <li>
              <a href='https://movitecnica.com.pe/proyectos/'>Ingeniería</a>
            </li>
            <li>
              <a href='https://movitecnica.com.pe/c/izajes/'>Servicios</a>
            </li>
            <li>
              <a href='https://movitecnica.com.pe/productos/tecles/'>
                Productos
              </a>
            </li>
            <li>
              <a href='https://movitecnica.com.pe/blog/'>Blog</a>
            </li>
            <li>
              <a href='https://movitecnica.com.pe/contacto/'>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
