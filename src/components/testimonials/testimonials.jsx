// import "./testimonials.scss";

// export default function Testimonials() {
//   const data = [
//     {
//       id: 1,
//       name: "Tom Durden",
//       title: "Senior Developer",
//       img:
//         "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/twitter.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
//     },
//     {
//       id: 2,
//       name: "Alex Kalinski",
//       title: "Co-Founder of DELKA",
//       img:
//         "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/youtube.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
//       featured: true,
//     },
//     {
//       id: 3,
//       name: "Martin Harold",
//       title: "CEO of ALBI",
//       img:
//         "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//       icon: "assets/linkedin.png",
//       desc:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
//     },
//   ];
//   return (
//     <div className="testimonials" id="testimonials">
//       <h1>Testimonials</h1>
//       <div className="container">
//         {data.map((d) => (
//           <div className={d.featured ? "card featured" : "card"}>
//             <div className="top">
//               <img src="assets/right-arrow.png" className="left" alt="" />
//               <img
//                 className="user"
//                 src={d.img}
//                 alt=""
//               />
//               <img className="right" src={d.icon} alt="" />
//             </div>
//             <div className="center">
//               {d.desc}
//             </div>
//             <div className="bottom">
//               <h3>{d.name}</h3>
//               <h4>{d.title}</h4>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// }
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
import "./testimonials.scss";
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  };

  slides = [
    {
      key: 0,
      content:  <div className="testimonials" id="testimonials">
           
           <div className="container"> <div className="container">
                <div className={true ? "card featured" : "card"}>
                  <div className="top">
                    <img src="assets/right-arrow.png" className="left" alt="" />
                    <img
                      className="user"
                      src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p75x225/190916678_304239804584759_3200275853016573078_n.png?_nc_cat=109&ccb=1-3&_nc_sid=58c789&_nc_ohc=EVlpqMmI0i0AX9oCZq8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a7be2b5c678ff320c4b635785afc869b&oe=60D2725D"
                      alt=""
                    />
                    <img className="right" src="assets/twitter.png" alt="" />
                  </div>
                  <h2 className="tit">Skande Ezzedine</h2>
                  <div className="center">
                      <h3>Architect</h3>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."
                  </div>
                  <div className="bottom">
                    
                  </div>
                </div>
           </div>
           </div>
            </div>
            
    },
    {
        key: 1,
        content:  <div className="testimonials" id="testimonials">
             
             <div className="container"> <div className="container">
                  <div className={true ? "card featured" : "card"}>
                    <div className="top">
                      <img src="assets/right-arrow.png" className="left" alt="" />
                      <img
                        className="user"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p160x160/189613083_232512148205250_420460529771908231_n.png?_nc_cat=101&ccb=1-3&_nc_sid=58c789&_nc_ohc=2DCjuFB8yvEAX8JNhPY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=76676815535710605116d8bfbada42e3&oe=60D08B68"
                        alt=""
                      />
                      <img className="right" src="assets/twitter.png" alt="" />
                    </div>
                    <h2 className="tit">Waddah Dridi</h2>
                    <div className="center">
                        <h3>Architect</h3>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."
                    </div>
                    <div className="bottom">
                      
                    </div>
                  </div>
             </div>
             </div>
              </div>
              
      },{
        key: 2,
        content:  <div className="testimonials" id="testimonials">
             
             <div className="container"> <div className="container">
                  <div className={true ? "card featured" : "card"}>
                    <div className="top">
                      <img src="assets/right-arrow.png" className="left" alt="" />
                      <img
                        className="user"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/190456578_954525301791355_1254843511790211482_n.png?_nc_cat=108&ccb=1-3&_nc_sid=58c789&_nc_ohc=Adha0e_Pg9gAX-JnJTa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=c01f4a9abf7092745eeb57e98130fa02&oe=60D02D19"
                        alt=""
                      />
                      <img className="right" src="assets/twitter.png" alt="" />
                    </div>
                    <h2 className="tit">Karam Dabbour </h2>
                    <div className="center">
                        <h3>Architect</h3>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."
                    </div>
                    <div className="bottom">
                      
                    </div>
                  </div>
             </div>
             </div>
              </div>
              
      },{
        key: 3,
        content:  <div className="testimonials" id="testimonials">
             
             <div className="container"> <div className="container">
                  <div className={true ? "card featured" : "card"}>
                    <div className="top">
                      <img src="assets/right-arrow.png" className="left" alt="" />
                      <img
                        className="user"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/190579532_519798639196136_7139955479689201612_n.png?_nc_cat=110&ccb=1-3&_nc_sid=58c789&_nc_ohc=ddGgYYEB6RMAX_yhL_r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=9c0af06394cf697e61aa983655372536&oe=60D10F86"
                        alt=""
                      />
                      <img className="right" src="assets/twitter.png" alt="" />
                    </div>
                    <h2 className="tit">Ons Msilini </h2>
                    <div className="center">
                        <h3>Architecte</h3>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."
                    </div>
                    <div className="bottom">
                      
                    </div>
                  </div>
             </div>
             </div>
              </div>
              
      },{
        key: 4,
        content:  <div className="testimonials" id="testimonials">
             
             <div className="container"> <div className="container">
                  <div className={true ? "card featured" : "card"}>
                    <div className="top">
                      <img src="assets/right-arrow.png" className="left" alt="" />
                      <img
                        className="user"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/190142170_3005865319692604_3378116343249063906_n.png?_nc_cat=111&ccb=1-3&_nc_sid=58c789&_nc_ohc=kjRPeUcxp60AX9LBd82&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=e1566fc1034c20412cfc9e2f1c23b189&oe=60D0EFAC"
                        alt=""
                      />
                      <img className="right" src="assets/twitter.png" alt="" />
                    </div>
                    <h2 className="tit">Anouar Gharbi </h2>
                    <div className="center">
                        <h3>Draftsman</h3>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem."
                    </div>
                    <div className="bottom">
                      
                    </div>
                  </div>
             </div>
             </div>
              </div>
              
      },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{ width: "90%", height: "500px", margin: "0 auto" }}>
          <h1 className="h1" >Our Team</h1>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={false}
          animationConfig={this.state.config}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "80%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
         
         
        </div>
      </div>
    );
  }
}
