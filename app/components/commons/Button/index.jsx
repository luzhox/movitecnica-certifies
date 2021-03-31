import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'lodash'
import clsx from 'clsx'

import { defaultIcons, defaultIconNames } from './defaults'

const Button = ({
  onClick,
  iconRight,
  iconLeft,
  primary,
  secondary,
  hasBgRed,
  className,
  text,
  children,
  size,
  fullWidth,
  disabled,
  loading,
  type = 'button',
  ...props
}) => {
  const internalIconLeft = defaultIconNames.includes(iconLeft)
    ? defaultIcons[iconLeft]
    : iconLeft ?? null
  const internalIconRight = defaultIconNames.includes(iconRight)
    ? defaultIcons[iconRight]
    : iconRight ?? null

  return (
    <button
      className={clsx('ui--button', className, size, {
        primary,
        secondary,
        hasBgRed: hasBgRed && !disabled,
        'ui--button--full-width': fullWidth,
        loading,
      })}
      type={type}
      onClick={!loading ? onClick : null}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <div className='ui--loader'>
          <div className='ui--spinner' />
        </div>
      ) : (
        <>
          {!isEmpty(internalIconLeft) && (
            <div className='ui--button-icon-left'>{internalIconLeft}</div>
          )}
          {!isEmpty(text) && <span>{text}</span>}
          {!isEmpty(internalIconRight) && (
            <div className='ui--button-icon-right'>{internalIconRight}</div>
          )}
          {children}
        </>
      )}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  iconRight: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.oneOf(defaultIconNames),
  ]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.oneOf(defaultIconNames),
  ]),
  /**
   * Should be `true` if component is over a red background.
   */
  primary: PropTypes.bool,
  /**
   * Should be `true` for an outlined variant.
   */
  secondary: PropTypes.bool,
  /**
   * Should be `true` if component is over a red background.
   */
  hasBgRed: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Should be `true` when only text should be displayed.
   */
  text: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
}

Button.defaultProps = {
  className: null,
  onClick: () => {},
  text: '',
  size: 'large',
  fullWidth: false,
  disabled: false,
  loading: false,
  primary: false,
  secondary: false,
  hasBgRed: false,
  iconRight: false,
  iconLeft: false,
  children: PropTypes.node,
}

export default Button
