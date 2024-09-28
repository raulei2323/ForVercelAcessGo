import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, type, name, value, onChange, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-[#B0BEC5] bg-[#F9F9F9] rounded-md text-[#263238] placeholder-[#78909C] focus:outline-none focus:ring-2 focus:ring-[#B0BEC5] focus:border-transparent focus:bg-blue-50"
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

const InputWithLabel = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={props.id} className="block text-sm font-medium text-[#546E7A] mb-1">
          {label}
        </label>
      )}
      <Input {...props} />
    </div>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

InputWithLabel.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default InputWithLabel;
