import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../../assets/next-icon.png";
import back_icon from "../../../assets/back-icon.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Jackson</h3>
                  <span>CTS</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempore doloremque <br />
                odio reprehenderit obcaecati non nam! Iste natus cumque
                inventore, saepe quod cum temporibus, voluptatem quasi minus
                distinctio, voluptatibus officia!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Jackson</h3>
                  <span>CTS</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempore doloremque <br />
                odio reprehenderit obcaecati non nam! Iste natus cumque
                inventore, saepe quod cum temporibus, voluptatem quasi minus
                distinctio, voluptatibus officia!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Jackson</h3>
                  <span>CTS</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempore doloremque <br />
                odio reprehenderit obcaecati non nam! Iste natus cumque
                inventore, saepe quod cum temporibus, voluptatem quasi minus
                distinctio, voluptatibus officia!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Jackson</h3>
                  <span>CTS</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempore doloremque <br />
                odio reprehenderit obcaecati non nam! Iste natus cumque
                inventore, saepe quod cum temporibus, voluptatem quasi minus
                distinctio, voluptatibus officia!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <div>
                  <h3>Jackson</h3>
                  <span>CTS</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                tempore doloremque <br />
                odio reprehenderit obcaecati non nam! Iste natus cumque
                inventore, saepe quod cum temporibus, voluptatem quasi minus
                distinctio, voluptatibus officia!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
