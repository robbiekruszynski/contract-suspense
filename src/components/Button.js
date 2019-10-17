import React from 'react';
import classnames from 'classnames';
import styles from './Button.css';
export const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
}

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE:  'large'
}

const BaseButton = ({
  text,
  onClick,
  type,
  disabled,
  buttonType,
  buttonSize
  }) => (
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    classnames={
      styles.button,
      styles[ buttonType || TYPES.PRIMARY],
      styles[ buttonSize || SIZES.MEDIUM]
    }
  >
    {text}
    </button>
);
