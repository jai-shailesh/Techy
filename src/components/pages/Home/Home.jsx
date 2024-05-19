import React from "react";
import "./Home.css";
import background from "../../../assets/background.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <div className="left-text">
            <h1 className="typing-animation" >We Build Tech Products For Startups</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              minus asperiores. Quisquam ratione, perferendis quod fugit tempora
              in, ducimus inventore natus, commodi cumque corrupti alias
              obcaecati mollitia exercitationem necessitatibus veritatis.
            </p>
          </div>

          <div>
            <button className="btn">See More</button>
          </div>
        </div>
        <div className="home-right"></div>
      </div>
    </div>
  );
};

export default Home;
