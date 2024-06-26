import React from "react";
import { Navbar } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <div style={{ height: "50px" }}></div>
      <Navbar style={{ padding: "0px", width: "100%", marginTop: "10px" }} fixed="bottom">
        <div className="text-center p-2" style={{ backgroundColor: "#2D5090", width: "100%" }}>
          {/* <div className="bg-light text-center text-white" >
            <section>
              
              <a className="btn text-white  m-1" style={{ backgroundColor: "#3b5998" }} href="#!" role="button" >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              
              <a className="btn text-white  m-1" style={{ backgroundColor: "#55acee" }} href="#!" role="button" >
                <i className="fa-brands fa-twitter"></i>
              </a>
              
              <a className="btn text-white  m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button" >
                <i className="fa-brands fa-google"></i>
              </a>
              
              <a className="btn text-white  m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button" >
                <i className="fa-brands fa-instagram"></i>
              </a>
              
              <a className="btn text-white  m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button" >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </section>
          </div> */}

          <h4 style={{ color: "white" }}>© 2024 Copyright:&nbsp;&nbsp;&nbsp;&nbsp;
            <a style={{ color: "white", textDecoration: "none" }} target="_blank" href="https://www.amu.ac.in/training-and-placement/general">
              JECRC TRAINING AND PLACEMENT CELL
            </a>
          </h4>
        </div>
      </Navbar>
    </>
  );
};

export default Footer;
