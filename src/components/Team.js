import React, { Component } from "react";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
export default class Team extends Component {
  state = {
    arrTeam: [
      {
        id: "1",
        nameTeam: "SAMANTA L.",
        imgTeam: team1,
        animation: "animate__fadeInLeft",
      },
      {
        id: "2",
        nameTeam: "PAMELA K.",
        imgTeam: team2,
        animation: "animate__fadeInDown",
      },
      {
        id: "3",
        nameTeam: "MICHEAL J.",
        imgTeam: team3,
        animation: "animate__fadeInRight",
      },
    ],
    arrNumberBanner: [
      {
        id: "1",
        titleNumber: "Clients",
        data_to: 150,
        data_from: 0,
        data_speed: 1500,
      },
      {
        id: "2",
        titleNumber: "Projects",
        data_to: 620,
        data_from: 0,
        data_speed: 1500,
      },
      {
        id: "3",
        titleNumber: "Awards",
        data_to: 25,
        data_from: 0,
        data_speed: 1500,
      },
      {
        id: "4",
        titleNumber: "Coffee",
        data_to: 940,
        data_from: 0,
        data_speed: 1500,
      },
    ],
  };
  render() {
    let { arrTeam, arrNumberBanner } = this.state;
    return (
      <div id="team" className="team">
        <div className="about_text">
          <div className="section-content text-center">
            <h2>OUR TEAM</h2>
            <hr />
          </div>
        </div>
        <div className="img_team">
          {arrTeam.map((item, index) => {
            return (
              <div
                className={
                  "img_team_main animate__animated wow " + item.animation
                }
                data-wow-duration="1s"
                key={item.id}
              >
                <div className="img_team_content">
                  <img src={item.imgTeam} alt="" />
                  <div className="mask">
                    <h2>{item.nameTeam}</h2>
                    <p className="">Architect</p>
                    <a href="/#" className="info">
                      <iconify-icon icon="ri:facebook-box-fill"></iconify-icon>
                    </a>
                    <a href="/#" className="info">
                      <iconify-icon icon="ri:twitter-fill"></iconify-icon>
                    </a>
                    <a href="/#" className="info">
                      <iconify-icon icon="ph:instagram-logo-fill"></iconify-icon>
                    </a>
                    <a href="/#" className="info">
                      <iconify-icon icon="ri:linkedin-box-fill"></iconify-icon>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="serv_banner">
          <div className="serv_banner_main text-center">
            {arrNumberBanner.map((item, index) => {
              return (
                <div className="number_banner" key={item.id}>
                  <h2
                    className="countTo   "
                    data-to={item.data_to}
                    data-from={item.data_from}
                    data-speed={item.data_speed}
                  >
                    {item.data_to}
                  </h2>
                  <h3>{item.titleNumber}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
