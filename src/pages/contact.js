import CustomIcon from "@/components/CustomIcon/CustomIcon";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { SiMediamarkt } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="min-h-full px-6 md:px-12 lg:px-32 pb-28 py-6 my-14 flex flex-col">
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-[#002147] font-bold my-12 text-center">
        Make an Enquiry
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <div className="flex justify-center items-center flex-col">
            <div className="flex w-full">
              <form
                // onSubmit={sendMail}
                className="w-full bg-gray-100 p-8 rounded-md"
              >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@something.com"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Topic
                  </label>
                  <select
                    name="topic"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option defaultValue={"Education services"}>
                      Education services
                    </option>
                    <option value={"Recruitment services"}>
                      Recruitment services
                    </option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={"Submit"}
                  className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-0 md:gap-1 lg:gap-4">
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-4 bg-[#002147] text-white">
            <CustomIcon className="text-[2rem]">
              <FaPhoneVolume />
            </CustomIcon>
            <h3 className="mt-2 text-2xl font-bold">CALL US</h3>
            <span className="font-semibold">
              Phone: <span className="font-normal">+61469345721</span>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-4">
            <CustomIcon className="text-[2rem]">
              <ImLocation />
            </CustomIcon>
            <h3 className="mt-2 text-2xl font-bold">OFFICE LOCATION</h3>
            <span className="font-semibold">
              <span className="font-normal inline-block mt-2">
                2 Clapham Road, HughesdaleVIC 3166,
              </span>
              <span className="font-normal inline-block">Australia</span>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-4">
            <CustomIcon className="text-[2rem]">
              <HiMail />
            </CustomIcon>
            <h3 className="mt-2 text-2xl font-bold">EMAIL US</h3>
            <span className="font-semibold">
              Email:{" "}
              <a
                href="mailto:hauteapparelsourcing@gmail.com"
                className="font-normal"
              >
                hauteapparelsourcing@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-col justify-center items-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-4 bg-[#002147] text-white">
            <CustomIcon className="text-[2rem]">
              <SiMediamarkt />
            </CustomIcon>
            <h3 className="mt-2 text-2xl font-bold">SOCIAL MEDIA</h3>
            <div className="grid grid-cols-3 gap-5 text-3xl mt-5">
              <CustomIcon>
                <AiFillLinkedin />
              </CustomIcon>
              <CustomIcon>
                <AiFillTwitterCircle />
              </CustomIcon>
              <CustomIcon>
                <BsFacebook />
              </CustomIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
