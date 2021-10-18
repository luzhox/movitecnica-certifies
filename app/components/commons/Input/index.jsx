import React, { Fragment, useState, useEffect, useRef } from 'react'
import { uuid } from './functions.jsx'

/**
 * Input React Component
 * Examples:
   <Input disabled={false} label="Input" value={text} onChange={value => setText(value)} />
 *
 *
 */
const Input = ({
  onChange = null,
  onClick = null,
  onBlur = null,
  disabled = false,
  className = '',
  label = '',
  value = '',
  name = '',
  type = 'text',
  maxLength,
  hasError = null, // ENVIAR UN TEXTO O COMPONENTE
  hasSpan = null, // ENVIAR UN TEXTO O COMPONENTE
  id = uuid(),
  sufixHolder = null,
}) => {
  const refInput = useRef(null)
  const [active, setActive] = useState('')
  const [val, setVal] = useState(value || '')

  const regexByTypeInput = {
    number: /[^0-9]/g,
    decimal: /[^\d+(.\d{1,2})?]/g,
    alphaNumeric: /[^a-z0-9]/gi,
  }

  useEffect(() => {
    if (val !== value) {
      setVal(value)
    }
  }, [val, value])

  const onChangeValue = (event) => {
    if (!disabled && onChange) {
      let text = event.target.value
      if (type !== 'text') {
        text = text.replace(regexByTypeInput[type], '')
      }
      onChange(text)
      setVal(text)
    }
  }

  const mouseDownEvt = (event) => {
    if (!refInput || refInput.current.contains(event.target)) {
      return
    }

    setActive('')
  }

  useEffect(() => {
    document.addEventListener('mousedown', mouseDownEvt)

    return () => document.removeEventListener('mousedown', mouseDownEvt)
  }, [])

  const setDefaultPropsInput = () => {
    const defaultPropsInput = { type: 'text' }
    if (type === 'decimal') {
      defaultPropsInput.type = 'number'
      defaultPropsInput.step = '0.00'
      defaultPropsInput.inputMode = 'decimal'
    }

    return defaultPropsInput
  }

  return (
    <Fragment>
      <div
        id={id}
        ref={refInput}
        className={`rd--input ${active} ${disabled ? 'disabled' : ''} ${
          (val || '').trim().length > 0 ? 'filled' : ''
        } ${hasError ? 'has-error' : ''} ${
          hasSpan ? 'has-span' : ''
        } ${className}`.trim()}
        disabled={disabled}
        onClick={() => setActive('active')}
      >
        <label>{label}</label>
        <input
          name={name}
          maxLength={maxLength}
          value={val || ''}
          onChange={onChangeValue}
          onBlur={onBlur}
          onClick={onClick}
          disabled={disabled}
          {...setDefaultPropsInput()}
        />
        {sufixHolder && <span className='rd--input--sufix'>{sufixHolder}</span>}
      </div>
      {hasSpan ? (
        <div className='rd--input-span' htmlFor={id}>
          {hasSpan}
        </div>
      ) : null}
      {hasError ? (
        <span className='rd--input-error' htmlFor={id}>
          {hasError}
        </span>
      ) : null}
    </Fragment>
  )
}

export default Input
