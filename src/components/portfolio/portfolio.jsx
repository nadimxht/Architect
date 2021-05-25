  
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import {Button ,Modal} from 'react-bootstrap'


import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
 
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const list = [
    {
      id: "featured",
      title: "Architecture",
    },
    {
      id: "web",
      title: "Design",
    },
    {
      id: "mobile",
      title: "Big projects",
    },
    {
      id: "design",
      title: "Architect",
    },
    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
 
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div  className="item">
            <img onClick={handleShow}
              src={d.img}
              alt=""
            />
         
            <h3>{d.title}</h3>
            

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Modal title</Modal.Title>
          <Button variant="secondary" onClick={handleClose}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          Your projects HERE (photos , informations ...)
        </Modal.Body>
        <Modal.Footer>
          
         
        </Modal.Footer>
      </Modal>
          </div>
          
        ))}
      </div>
    </div>
  );
}