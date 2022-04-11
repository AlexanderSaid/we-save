import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <div className="py-16 rounded-tl rounded-tr bg-darkBg xl:w-2/5 lg:w-2/5 xl:rounded-bl xl:rounded-tr-none">
      <div className="px-8 mx-auto xl:w-5/6 xl:px-0">
        <h1 className="pb-4 text-3xl font-bold text-white xl:text-4xl">
          Get in touch
        </h1>
        <p className="pb-8 text-xl font-normal leading-relaxed text-white lg:pr-4">
          Got a question about us? Are you interested in partnering with us?
          Have some suggestions or just want to say Hi? Just contact us. We are
          here to asset you.
        </p>
        <div className="flex items-center pb-4">
          <div>
            <FiPhoneCall className="text-white" />
          </div>
          <p className="pl-4 text-base text-white">+1 (308) 321 321</p>
        </div>
        <div className="flex items-center">
          <div>
            <AiOutlineMail className="text-white" />
          </div>
          <p className="pl-4 text-base text-white">Info@alphas.com</p>
        </div>
        <p className="pt-10 text-lg tracking-wide text-white">
          Fazanstraat 9, 7523DL <br />
          George Roumieh
        </p>
      </div>
    </div>
  );
};

export default GetInTouch;
