import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Design", "Architect", "Create"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/4360.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
      
          <h1>Ant.Act</h1>
          <h3>
            We <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right1">
      <div className="UX">
      
         </div>
      </div>
     
      
    </div>
  );
}