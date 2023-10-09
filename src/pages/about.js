import Container from "@/components/Container/Container";
import PrimarySectionHeader from "@/components/SectionTitle/PrimarySectionHeader";
import Image from "next/image";
import React from "react";
import about from "../assets/images/about.jpg";

const About = () => {
  return (
    <Container cls={"mt-28 mb-10 md:mx-10"}>
      <PrimarySectionHeader title={"About Us - Haute Apparel Sourcing"} />
      <p className="text-xl text-gray-700 my-5">
        Welcome to Haute Apparel Sourcing, your trusted partner in the world of
        fashion and garment sourcing. Founded in 2011, we take pride in our rich
        heritage of delivering exceptional fashion products to clients around
        the globe. With a vision deeply rooted in quality, sustainability, and
        client satisfaction, we have positioned ourselves as a leading name in
        the industry.
      </p>
      <div className="w-full flex justify-center items-center py-10">
        <Image src={about} alt="about" />
      </div>
      <h2 className="text-3xl font-bold">Our Journey</h2>
      <p className="text-xl text-gray-700 my-5">
        In 2011, Haute Apparel Sourcing embarked on its journey with a
        commitment to redefine the fashion sourcing experience. Our journey
        began with a small team of passionate individuals who shared a common
        goal: to provide high-quality fashion products that reflect the evolving
        trends and tastes of our clients. From our modest beginnings, we have
        grown into a dynamic force in the industry, with our headquarters
        located in the vibrant Gazipur District of Bangladesh.
      </p>
      <h2 className="text-3xl font-bold">Crafting Fashion Excellence</h2>
      <p className="text-xl text-gray-700 my-5">
        At Haute Apparel Sourcing, we believe that fashion is not just about
        clothing; it{"'s"} a reflection of your style, personality, and
        individuality. With an unwavering commitment to quality, we ensure that
        every piece of clothing that bears our name is a masterpiece in itself.
        We do not compromise on the standards we set for our products. Our team
        of skilled artisans and designers work tirelessly to create fashionable
        designs that are tailored to your preferences.
      </p>
      <h2 className="text-3xl font-bold">Our Vision</h2>
      <p className="text-xl text-gray-700 my-5">
        Our corporate color, green, symbolizes our deep-rooted connection to the
        natural beauty of our motherland. We are not only dedicated to our
        {"client's"} satisfaction but also to upholding the reputation of
        Bangladesh as a hub for quality fashion and garment manufacturing.
        Timely deliveries and exceptional quality are the cornerstones of our
        operations, making Haute Apparel Sourcing a renowned buying house and
        manufacturer in Bangladesh.
      </p>
      <h2 className="text-3xl font-bold">What Sets Us Apart</h2>
      <p className="text-xl text-gray-700 my-5">
        At Haute Apparel Sourcing, we are dedicated to delivering beyond
        expectations. Our comprehensive range of services includes:
      </p>
      <ul className="list-disc md:ms-10 text-lg text-gray-700 my-5">
        <li>Best Quality Product Development & Sourcing</li>
        <li>Fabric Sourcing & Patternmaking</li>
        <li>On-time production & timely deliveries</li>
        <li>Quality assurance & Inspection</li>
        <li>Effective Communication & Co-ordination</li>
        <li>Shipment & Tracking</li>
        <li>
          Flexible production capabilities, catering to quantities from 100 to
          10,000 units
        </li>
      </ul>
      <h2 className="text-3xl font-bold">Our Product Range</h2>
      <p className="text-xl text-gray-700 my-5">
        We offer an extensive selection of garment products to cater to your
        diverse needs. Whether {"you're"} in search of T-Shirts, Polo Shirts,
        Jeans, Trousers, Jackets, or even PPE and Face Masks in various colors
        and qualities, Haute Apparel Sourcing has got you covered. Our
        commitment to quality and attention to detail shine through in every
        piece we create.
      </p>
      <h2 className="text-3xl font-bold">
        Our Commitment to Quality Assurance
      </h2>
      <p className="text-xl text-gray-700 my-5">
        To ensure the highest standards of quality, we employ a dedicated team
        of quality assurance experts who meticulously select manufacturers that
        adhere to our strict policies, principles, and guidelines. We leverage
        the latest technology, including ERP systems, to provide our clients
        with real-time updates on their products, ensuring transparency and
        peace of mind.
      </p>
      <p className="text-xl text-gray-700 my-5">
        At Haute Apparel Sourcing, we {"don't"} just create fashion; we craft
        experiences. Your satisfaction is our ultimate goal, and we are here to
        bring your fashion aspirations to life. Join us in this exciting journey
        of style, quality, and innovation, and experience fashion like never
        before.
      </p>
      <p className="text-xl text-gray-700 my-5">
        {'"Haute Apparel Sourcing - Where Fashion Meets Excellence."'}
      </p>
    </Container>
  );
};

export default About;
