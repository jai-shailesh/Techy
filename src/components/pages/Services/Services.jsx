import React from "react";
import "./Services.css";
import service_1 from "../../../assets/service-1.png";
import service_2 from "../../../assets/service-2.png";
import service_3 from "../../../assets/service-3.png";
import service_4 from "../../../assets/service-4.png";

const Services = () => {
  return (
    <div className="service-container">
      <h1 className="typing-animation">Glimpse Of Our Services</h1>

      <div className="services">
        <div className="service">
          <img src={service_1} />
          <div className="caption">
            <p>Buisness Website</p>
          </div>
        </div>
        <div className="service">
          <img src={service_2} />
          <div className="caption">
            <p>E-Commerce Site</p>
          </div>
        </div>
        <div className="service">
          <img src={service_3} />
          <div className="caption">
            <p>Custom Website</p>
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="service-text">
          <h1 className="typing-animation">
            Get a website for your business within your budget
          </h1>
          <p>
            Build your ideal website or online store tailored to your budget.
            Our expert team crafts tailored solutions with your financial
            constraints in mind. Get a professional online presence without
            breaking the bank. Let us bring your vision to life affordably.
          </p>
        </div>
        <img src={service_4} alt="" />
      </div>
    </div>
  );
};

export default Services;
