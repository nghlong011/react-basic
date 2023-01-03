import React, { Component } from "react";

export default class About extends Component {
  state = {
    about_main: [
      { id: "1", title: "RESPONSIVE", backgroundColor: "#ad00ff" },
      { id: "2", title: "CUSTOMIZABLE", backgroundColor: "#8200bf" },
      { id: "3", title: "MODERN", backgroundColor: "#56007f" },
    ],
  };
  render() {
    let { about_main } = this.state;
    return (
      <div className="about" id="about">
        <div className="about_text">
          <div className="section-content text-center">
            <h2>
              WELCOME TO <strong className="color">CRUCIO</strong>
            </h2>
            <h3>WE CREATE AWESOME WEBSITES</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid
              ex ea commodi consequat. Quis aute iure reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              obcaecat cupiditat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="about_main">
          {about_main.map((item, index) => {
            return (
              <div
                className="about_main_cl"
                style={{ backgroundColor: item.backgroundColor }}
                key={item.id}
              >
                <div className="content_text">
                  <h3>{item.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                    eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquid ex ea commodi consequat.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
