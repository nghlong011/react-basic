import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import logo1 from "../assets/images/logo-client1-150x150.png";
import logo2 from "../assets/images/logo-client2-150x150.png";
import logo3 from "../assets/images/logo-client3-132x150.png";
import logo4 from "../assets/images/logo-client4.png";
import logo5 from "../assets/images/logo-client5.png";
import logo6 from "../assets/images/logo-client6.png";
export default class Blog extends Component {
  state = {
    arrLogo: [
      { id: "1", logoimg: logo1 },
      { id: "2", logoimg: logo2 },
      { id: "3", logoimg: logo3 },
      { id: "4", logoimg: logo4 },
      { id: "5", logoimg: logo5 },
      { id: "6", logoimg: logo6 },
    ],
  };
  render() {
    let options = {
      autoPlay: true,
      showArrows: false,
      emulateTouch: true,
      showStatus: false,
      interval: 10000,
      infiniteLoop: true,
      showDots: false,
    };
    let { arrLogo } = this.state;
    return (
      <div id="blog" className="blog">
        <div className="about_text">
          <div className="section-content text-center">
            <h2>TESTIMONIALS</h2>
            <hr />
          </div>
        </div>
        <div className="main_blog">
          <div id="slider" className="slider">
            <Carousel className="owl-carousel owl-theme" {...options}>
              <div className="item text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquid ex ea commodi consequat. Quis aute
                  iure reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
                <p className="mini">- Jim P. -</p>
              </div>
              <div className="item text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquid ex ea commodi consequat. Quis aute
                  iure reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                </p>
                <p className="mini">- Long N. -</p>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="blog_logo">
          <div className="main_blog_logo">
            {arrLogo.map((item) => {
              return (
                <div className="item_logo" key={item.id}>
                  <img src={item.logoimg} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
