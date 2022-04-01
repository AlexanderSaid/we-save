import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import useFetch from "../../../hooks/useFetch";
import TextArea from "../ContactComponents/TextArea";
import SuccessMessage from "./SuccessMessage";

const EnterData = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const setStates = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSuccess(true);
  };

  const { performFetch, cancelFetch, error } = useFetch("/contact", setStates);

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

  if (success) {
    return <SuccessMessage setSuccess={setSuccess} />;
  }

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
        {error && (
          <span className="mb-4 text-xl text-center text-red">{error}</span>
        )}
        <div className="flex-wrap justify-between block w-full mb-6 xl:flex">
          <InputField
            onChange={(e) => setFullName(e.target.value)}
            name={"fullName"}
            label={"Full Name"}
            value={fullName}
            className="w-2/4 max-w-xs mb-6 xl:mb-0"
            placeholder={"Full Name"}
          />

          <InputField
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            label={"Email"}
            value={email}
            className="w-2/4 max-w-xs xl:flex xl:justify-end"
            placeholder={"Email"}
          />
        </div>
        <div className="flex flex-wrap w-full">
          <InputField
            onChange={(e) => setPhone(e.target.value)}
            name={"phone"}
            label={"Phone"}
            value={phone}
            className="w-2/4 max-w-xs"
            placeholder={"Phone"}
          />
        </div>
        <TextArea setMessage={setMessage} value={message} />
      </form>
    </div>
  );
};

export default EnterData;
