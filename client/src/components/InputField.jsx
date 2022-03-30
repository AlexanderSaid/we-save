import React from "react";

function InputField({
  type,
  id,
  refer,
  autoComplete,
  onChange,
  ariaInvalid,
  ariaDescribedby,
  className,
  placeholder,
}) {
  const handleChange = (e) => {
    if (onChange) onChange(e);
  };
  return (
    <div>
      <input
        type={type}
        id={id}
        ref={refer}
        autoComplete={autoComplete}
        onChange={handleChange}
        aria-invalid={ariaInvalid}
        aria-describedby={ariaDescribedby}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputField;
