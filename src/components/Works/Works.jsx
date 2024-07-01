import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/css-3.svg";
import Fiverr from "../../img/javascript-1.svg";
import Amazon from "../../img/html-1.svg";
import Shopify from "../../img/react-1.svg";
import Csharp from "../../img/c--4.svg";
import Net from "../../img/netframework-1.svg";
import Angular from "../../img/angular-icon-1.svg";
import Git from "../../img/github-icon-1.svg";
import Bootstrap from "../../img/bootstrap-5-1.svg";
import tailwind from "../../img/tailwind-css-svgrepo-com.svg";
import Sql from "../../img/microsoft-sql-server-1.svg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            
          </span>
          <span className="cwork" >My Skills</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}

          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img className="simg" src={Upwork} alt="" />
            
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Amazon} alt="" />
            
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Csharp} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Net} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Angular} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Git} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Bootstrap} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={tailwind} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Sql} alt="" />
          </div>
          <div className="w-secCircle">
            <img className="simg" src={Sql} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
