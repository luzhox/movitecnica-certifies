import React from 'react'

const Banner = ({ route, text, btnText, btnUrl, classNames }) => {
  const redirectButton = () => {
    window.open(btnUrl)
  }
  return (
    <div
      className={`banner-movitecnica ${classNames}`}
      style={{ backgroundImage: `url(${route})` }}
    >
      <div className='banner-movitecnica__content'>
        <p>{text}</p>
        <button
          className='banner-movitecnica__btn'
          onClick={() => redirectButton()}
        >
          {btnText}
        </button>
      </div>
    </div>
  )
}

export default Banner
