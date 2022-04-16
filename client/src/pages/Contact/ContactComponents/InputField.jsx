import React from "react";
import PropTypes from "prop-types";

const InputField = ({ label, name, onChange, placeholder, value }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label
        htmlFor={name}
        className="mb-2 text-sm font-semibold text-darkBg/70"
      >
        {label}
      </label>
      <input
        required
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="w-full h-10 px-3 text-bodyRegular font-semibold border border-darkFont/20 rounded-md focus:outline-none focus:border focus:border-accent"
        placeholder={placeholder}
      />
    </div>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
export default InputField;
