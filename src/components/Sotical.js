import React, { Component } from "react";
import logo1 from "../assets/images/logo-1.png";
export default class Sotical extends Component {
  state = {
    arrLogo: [
      { id: "1", logo: "ri:facebook-box-fill" },
      { id: "2", logo: "ri:twitter-fill" },
      { id: "3", logo: "ph:instagram-logo-fill" },
      { id: "4", logo: "ri:linkedin-box-fill" },
      { id: "5", logo: "ph:dribbble-logo-fill" },
      { id: "6", logo: "icon-park-solid:youtobe" },
    ],
  };
  render() {
    let { arrLogo } = this.state;
    return (
      <>
        <div className="social">
          <div className="logo_social text-center">
            <img src={logo1} alt="" />
          </div>
          <div className="all_social">
            {arrLogo.map((item) => {
              return (
                <a href="/#" className="info" key={item.id}>
                  <iconify-icon icon={item.logo}></iconify-icon>
                </a>
              );
            })}
          </div>
        </div>
        <footer>
          <div className="copyright">
            <p>© 2017. Crucio. All Rights Reserved.</p>
          </div>
        </footer>
        <div className="back-to-top" style={{ display: "block" }}>
          <a href="#top">
            <iconify-icon icon="material-symbols:keyboard-arrow-up"></iconify-icon>
          </a>
        </div>
      </>
    );
  }
}
