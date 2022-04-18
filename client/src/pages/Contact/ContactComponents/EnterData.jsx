import React, { useState, useEffect, useContext } from "react";
import InputField from "./InputField";
import useFetch from "../../../hooks/useFetch";
import TextArea from "../ContactComponents/TextArea";
import SuccessMessage from "./SuccessMessage";
import UserContext from "../../../context/UserContext";
import { motion } from "framer-motion";
import { fade } from "../../../animation";

const EnterData = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const { user } = useContext(UserContext);

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
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ fullName, email, phone, message }),
    });
  };

  if (success) {
    return <SuccessMessage setSuccess={setSuccess} />;
  }

  return (
    <motion.div
      variants={fade}
      className="py-12 px-4 xs:p-12 bg-lightFont text-darkFont w-full min-w-[50%]"
    >
      <h1 className="pb-12 text-2xl font-extrabold text-center font-[Fira]">
        Send Us Message
      </h1>
      {error && (
        <span className="mb-4 text-xl text-center text-red">{error}</span>
      )}
      <form
        id="contact"
        className="flex flex-col items-center justify-between w-full mb-6 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputField
          onChange={(e) => setFullName(e.target.value)}
          name={"fullName"}
          label={"Full Name"}
          value={fullName}
          placeholder={"Full Name"}
        />

        <InputField
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
          label={"Email"}
          value={email}
          placeholder={"Email"}
        />

        <InputField
          onChange={(e) => setPhone(e.target.value)}
          name={"phone"}
          label={"Phone"}
          value={phone}
          placeholder={"Phone"}
        />
        <TextArea setMessage={setMessage} value={message} />

        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default EnterData;
