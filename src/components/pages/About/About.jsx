import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about">
        <span>About</span>
        <h1 className="slide-in">
          We specialize in creating websites that fit your budget perfectly
        </h1>
        <p>
          <hr />
          Techy Software provides custom website solutions made for your
          company. Our mission is to support the growth of your company by
          providing it with strategies and inspiration for business advancement.
          The purpose of our organisation is to empower every business to
          achieve success in both online and offline markets.
          <hr />
          With Techy Software's assistance, follow the business trends of the
          future and let's expand together. Techy Software not only concentrates
          on the website, we are your strategic partner in expanding your
          digital footprint. With a keen eye on the latest trends, we navigate
          the dynamic landscape of online growth, ensuring your business thrives
          in the digital era. Let us elevate your brand and reach new heights
          together.
          <hr />
        </p>
        <button className="btn service-btn">Services</button>
      </div>
    </div>
  );
};

export default About;
