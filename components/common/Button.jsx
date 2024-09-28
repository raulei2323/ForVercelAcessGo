import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'default',
  ...props
}) => {
  let buttonClass = '';

  switch (variant) {
    case 'cancel':
      buttonClass =
        'px-6 py-2 border border-[#2F4F4F] bg-[#F9F9F9] rounded-md text-sm font-medium text-[#2F4F4F] hover:bg-[#ECEFF1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B0BEC5] hidden md:inline-block';
      break;
    case 'continue':
      buttonClass =
        'px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2F4F4F] hover:bg-[#004D40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00695C]';
      break;
    default:
      buttonClass =
        'px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
      break;
  }

  return (
    <button
      variant={variant}
      type={type}
      onClick={onClick}
      className={`${buttonClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'cancel', 'continue']),
};

Button.defaultProps = {
  type: 'button',
  variant: 'default',
  className: '',
  onClick: () => { },
};

export default Button;
