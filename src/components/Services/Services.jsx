import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span style={{maxWidth:'250px',fontSize:'19px'}}>
        As a versatile fullstack developer, I bring expertise in both frontend and backend development. Harnessing my strong JavaScript proficiency, 
        
        I specialize in crafting dynamic user interfaces with frameworks like React and Angular. My backend capabilities extend across MongoDB, Firebase, Express, and Node.js, enabling robust server-side solutions.
<br />
<br />
Additionally, leveraging my proficiency in C# technologies such as ASP.NET, Web API, and Azure, I excel in delivering scalable and secure backend architectures. Whether you require frontend innovation or backend optimization.
<br />
<br />
I am passionate about nurturing the next generation of developers. I actively teach programming classes, guiding upcoming developers in mastering essential skills. Whether you need innovative frontend solutions, optimized backend architectures, or educational insights, I offer comprehensive development services tailored to your project's needs.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"C#"}
            detail={"ASP.Net,Web-api,Console-app"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-2rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"JS & TS"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express and Angular"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"DataBase"}
            detail={
              "SQL,MongoDb,Firebase and Azure"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
