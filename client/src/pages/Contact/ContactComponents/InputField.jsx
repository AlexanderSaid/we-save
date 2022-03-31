import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, name, onChange, placeholder }) => {
  return (
    <div>
      <div className="flex flex-col">
        <label
          htmlFor="full_name"
          className="mb-2 text-sm font-semibold leading-tight tracking-normal text-gray-800"
        >
          {label}
        </label>
        <input
          required
          id="full_name"
          name={name}
          type="text"
          onChange={onChange}
          className="flex items-center w-64 h-10 pl-3 text-sm font-normal border border-gray-300 rounded focus:outline-none focus:border focus:border-indigo-700"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
export default InputField;
