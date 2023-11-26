import React from "react";

const TermsAndConditions = () => {
  return (
    <div
      className="py-[120px] px-28"
      id="accordion-collapse"
      data-accordion="collapse"
    >
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        User Responsibilities
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        You are responsible for providing accurate and complete information when
        using our services. You agree to follow our guidelines and cooperate in
        the application and recruitment processes.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Privacy</h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        Your use of our website and services is subject to our Privacy Policy,
        which outlines how we collect, use, and protect your personal
        information.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        Intellectual Property
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        All content on our website is protected by copyright and other
        intellectual property laws. You may not reproduce, distribute, or modify
        our content without our written consent.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Disclaimer</h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        We make every effort to provide accurate information, but we do not
        guarantee the accuracy or completeness of the content on our website. We
        are not liable for any errors or omissions.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        Changes to Terms and Conditions
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        We reserve the right to update these terms and conditions at any time.
        It is your responsibility to review them periodically.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Contact Information</h5>
      <p className="my-2 text-[1.1rem] text-gray-600">
        If you have questions or concerns about these terms and conditions,
        please contact us at{" "}
        <a
          href="mailto:hauteapparelsourcing@gmail.com"
          className="underline underline-offset-1"
        >
          hauteapparelsourcing@gmail.com
        </a>
      </p>
      <p className="my-2 text-[1.1rem] text-gray-600">
        Please note that this template is a starting point, and {"it's"} crucial
        to consult with legal professionals to ensure that these documents are
        compliant with applicable laws and regulations in your jurisdiction and
        tailored to your specific business needs.
      </p>
    </div>
  );
};

export default TermsAndConditions;
