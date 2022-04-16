import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ setMessage }) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label
        className="mb-2 text-sm font-semibold text-darkBg/70"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        required
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        className="px-3 py-2 mb-4 text-sm text-bodyRegular font-semibold border border-darkFont/20 rounded-md focus:outline-none focus:border focus:border-accent outline-none resize-none"
        rows={6}
        id="message"
        defaultValue={""}
        placeholder={"Message"}
      />
    </div>
  );
};

TextArea.propTypes = {
  setMessage: PropTypes.func,
};

export default TextArea;
