import Container from "@/components/Container/Container";
import React from "react";

const BusinessWithUs = () => {
  return (
    <div className="business-with-us min-h-[500px] flex justify-center items-center">
      <Container cls={""}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800">Interested To Do</h2>
          <h2 className="text-3xl font-bold text-gray-800 my-2">
            Business With Us?
          </h2>
          <button className="px-6 py-3 my-4 rounded-md text-white font-semibold bg-[#57c3a6] hover:bg-gray-900 transition-all ease-in-out duration-300">
            Contact Us
          </button>
        </div>
      </Container>
    </div>
  );
};

export default BusinessWithUs;
