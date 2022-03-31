import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import useFetch from "../../../hooks/useFetch";

const EnterData = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const setStates = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const { performFetch, cancelFetch } = useFetch("/contact", setStates);

  useEffect(() => {
    return cancelFetch;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    performFetch({
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ fullName, email, phone, message }),
    });
  };

  return (
    <div className="h-full pt-5 pb-5 bg-gray-200 rounded-tr rounded-br xl:w-3/5 lg:w-3/5 xl:pr-5 xl:pl-0">
      <form
        id="contact"
        className="px-8 py-4 bg-white rounded-tr rounded-br"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-800">
          Enter Details
        </h1>
        <div className="flex-wrap justify-between block w-full mb-6 xl:flex">
          <InputField
            onChange={(e) => setFullName(e.target.value)}
            name={"fullName"}
            label={"Full Name"}
            className="w-2/4 max-w-xs mb-6 xl:mb-0"
            placeholder={"Full Name"}
          />

          <InputField
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            label={"Email"}
            className="w-2/4 max-w-xs xl:flex xl:justify-end"
            placeholder={"Email"}
          />
        </div>
        <div className="flex flex-wrap w-full">
          <InputField
            onChange={(e) => setPhone(e.target.value)}
            name={"phone"}
            label={"Phone"}
            className="w-2/4 max-w-xs"
            placeholder={"Phone"}
          />
        </div>
        <div className="w-full mt-6">
          <div className="flex flex-col">
            <label
              className="mb-2 text-sm font-semibold text-gray-800"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
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
      </form>
    </div>
  );
};

export default EnterData;
