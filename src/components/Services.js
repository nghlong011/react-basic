import React, { Component } from "react";

export default class Services extends Component {
  state = {
    arrServices: [
      { id: "1", titleServ: "WEB DESIGN", icon: "ic:outline-desktop-mac" },
      { id: "2", titleServ: "BRAND DESIGN", icon: "ion:albums" },
      { id: "3", titleServ: "UI/UX DESIGN", icon: "ion:apps" },
      { id: "4", titleServ: "GRAPHIC DESIGN", icon: "ion:color-palette" },
      { id: "5", titleServ: "PHOTOGRAPHY", icon: "ion:camera-sharp" },
      { id: "6", titleServ: "VIDEO EDITING", icon: "ion:videocam-sharp" },
      { id: "7", titleServ: "DATA ANALYSIS", icon: "ion:pulse" },
      { id: "8", titleServ: "CLIENT ASSISTANCE", icon: "ion:person-sharp" },
    ],
  };
  render() {
    let { arrServices } = this.state;
    return (
      <div id="services" className="services">
        <div className="about_text">
          <div className="section-content text-center">
            <h2>SERVICES</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, <strong>consectetur</strong> adipisci
              elit, sed eiusmod tempor incidunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure
              reprehenderit in
              <strong>voluptate</strong>
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              obcaecat cupiditat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="serv_main">
          {arrServices.map((item, index) => {
            return (
              <div className="serv_content " key={item.id}>
                <div className="serv_icon">
                  <iconify-icon icon={item.icon}></iconify-icon>
                </div>
                <div className="serv_text">
                  <h4>{item.titleServ}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="serv_banner">
          <div className="serv_banner_main text-center ">
            <h2
              className="animate__animated wow animate__fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              WE CREATE
              <strong>AWESOME</strong> PROJECTS
            </h2>
            <a
              href="/#"
              className="animate__animated wow animate__fadeInUp "
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    );
  }
}
