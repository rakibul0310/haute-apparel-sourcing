import React from "react";

const PrivacyPolicy = () => {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        Welcome to {"Haute Apparel Sourcing's"} Privacy Policy. We are committed
        to safeguarding the privacy of our website visitors and service users.
        This policy outlines how we collect, use, and protect your personal
        information.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        Information We Collect
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        We may collect the following types of personal information:
      </p>
      <ul className="collapse-list overflow-x-hidden px-5 md:px-0">
        <li className="relative left-[18px] my-2 break-words">
          Contact information, including names, email addresses, phone numbers,
          and postal addresses.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          Educational and professional background information.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          Details related to your inquiries, applications, or requests for our
          consultancy and recruitment services.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          User preferences and interactions with our website, including cookies
          and analytics data.
        </li>
      </ul>
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        How We Use Your Information
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        We use the information collected for the following purposes:
      </p>
      <ul className="collapse-list overflow-x-hidden px-5 md:px-0">
        <li className="relative left-[18px] my-2 break-words">
          To provide our consultancy and recruitment services.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          To respond to your inquiries and requests.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          To improve our website and services.
        </li>
        <li className="relative left-[18px] my-2 break-words">
          To send you updates and promotional material if you have consented to
          receive such communications.
        </li>
      </ul>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Data Security</h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, and
        destruction.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">
        Sharing Your Information
      </h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        We may share your information with trusted third parties, including
        educational institutions, employers, and service providers, when
        necessary to provide our services.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Cookies and Tracking</h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        We use cookies and similar tracking technologies to improve your website
        experience. You can manage your cookie preferences through your browser
        settings.
      </p>
      <h5 className="font-semibold text-2xl mt-4 mb-2">Your Rights</h5>
      <p className="my-2 text-[1.1rem] text-gray-500 dark:text-gray-400">
        You have the right to access, correct, and delete your personal
        information. To exercise these rights or if you have any questions about
        our Privacy Policy, please contact us at{" "}
        <a
          href="mailto:hauteapparelsourcing@gmail.com"
          className="underline underline-offset-1"
        >
          hauteapparelsourcing@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
