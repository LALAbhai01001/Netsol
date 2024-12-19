import React, { useRef } from 'react'
import './Background.css'
import { BsList } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";




const Background = () => {
    const heading = useRef();
    const ani = useRef();
    
    const handleclick = ()=>{
      // console.log(heading.current);
      heading.current.style.left = '0'
      ani.current.style.transition = 'all 1.5s'
      setTimeout(() => {
        
        ani.current.style.transform = 'translateY(0)'
      }, 1000);
      
      setTimeout(() => {
        
        ani.current.style.display = 'flex'
      }, 900);
      
    }
    
    const handleremove = ()=>{
      heading.current.style.left = '-180%'
      ani.current.style.transform = 'translateY(180%)'
      setTimeout(() => {
        
        ani.current.style.display = 'none'
      }, 900);

    }
    
return (
  <>
  
    <div className="parent" style={{ position: "relative" }}>
      <div
        ref={heading}
        className=" container-fluid main2"
        style={{
          height: "100vh",
          position: "absolute",
          transition: "all 1s  linear",
          left: "-180%",
        }}
      >
        <div className="d-flex nav justify-content-between align-items-center">
          <div className="logo-img">
            <img
              width={50}
              src="https://www.netsolpk.com/images/netsol-logo-white.svg"
              alt="netsol logo pic"
            />
          </div>
          <div className=" list1 flex-column">
            <h6 className="m-0">MENU</h6>
            <RxCross1 onClick={handleremove} style={{ fontSize: "30" }} />
          </div>
        </div>

        <div
          className="row w-100 justify-content-center align-items-center"
          style={{ height: "60vh" }}
        >
          <div className="back-img " style={{ height: "100%" }}>
            <div className="col-lg-1">
              <div className="list2 flex-column">
                <h6 className="m-0">MENU</h6>
                <RxCross1 onClick={handleremove} style={{ fontSize: "30" }} />
              </div>
            </div>
            <div className="col-lg-11">
              <ul ref={ani} className="links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#"> About Us</a>
                </li>

                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Consultancy</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid main">
        <div className="d-flex nav justify-content-between align-items-center">
          <div className="logo-img">
            <img
              width={50}
              src="https://www.netsolpk.com/images/netsol-logo-white.svg"
              alt="netsol logo pic"
            />
          </div>
          <div className=" list1 flex-column">
            <h6 className="m-0">MENU</h6>
            <BsList onClick={handleclick} style={{ fontSize: "30" }} />
          </div>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "60vh",
          }}
        >
          <div className="row w-100 align-items-center">
            <div className="col-lg-2">
              <div className="list2 flex-column">
                <h6 className="m-0">MENU</h6>
                <BsList onClick={handleclick} style={{ fontSize: "30" }} />
              </div>
            </div>
            <div className="col-lg-10">
              <h1 className="text-primary m-0">adaptive</h1>
              <h2>
                to your business, your growth & the <br /> future.
              </h2>
              <p>
                Proudly serving the world's top asset finance & leasing
                companies with smart <br /> software technology.
              </p>
            </div>
          </div>
        </div>

        <div
          className="cle mx-auto rounded-pill border"
          style={{
            width: "80px",
            height: "80px",
            position: "relative",
          }}
        >
          <p
            className="m-0"
            style={{
              fontSize: "12px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%",
            }}
          >
            EXPLORE
          </p>
        </div>
      </div>
    </div>
  </>
);
}

export default Background