import { useEffect, useRef } from 'react'
import './works.scss'
import { init } from "ityped";



const Works=()=> {
  // const textRef = useRef();

  // useEffect(() => {
  //   init(textRef.current, {
  //     showCursor: true,
  //     backDelay: 1500,
  //     backSpeed:60,
  //     strings: ["Design", "Architect", "Create"],
  //   });
  // }, []);
   
    return (
      <div className="pro1">

      
        <div className="pro">
            <div className="left">
        <div className="Container">
        <h1 style={{color:"#dc143c",marginRight:"7%"}}>1</h1> <h1> Agence</h1>
        </div>
        <div className="Container">
          <h1 style={{color:"#dc143c",marginRight:"7%"}}>5    </h1> <h1> Membres</h1>
        </div>
        <div className="Container">
        <h1 style={{color:"#dc143c", marginLeft:"-2%"}}>+10   &nbsp;</h1> <h1> Projets</h1>
        </div>
        <div className="Container">
          
        </div>
      </div>
      <div className="pro2">
      <div className="UX2">
      
         </div>
      </div>
        </div>
        
        </div>
    )
}
export default Works;
