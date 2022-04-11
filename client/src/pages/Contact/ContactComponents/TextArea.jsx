import React from "react";
import PropTypes from "prop-types";

const TextArea = ({ setMessage }) => {
  return (
    <div className="w-full mt-6">
      <div className="flex flex-col">
        <label
          className="mb-2 text-sm font-semibold text-gray-800"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          required
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          className="px-3 py-2 mb-4 text-sm border border-gray-300 rounded outline-none resize-none focus:border focus:border-indigo-700"
          rows={6}
          id="message"
          defaultValue={""}
          placeholder={"Message"}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="px-8 py-3 text-sm leading-6 transition duration-150 ease-in-out rounded text-darkBg bg-primary focus:outline-none hover:bg-darkBg hover:text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

TextArea.propTypes = {
  setMessage: PropTypes.func,
};

export default TextArea;
