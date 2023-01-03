import React, { Component } from "react";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";
import work4 from "../assets/images/work4.jpg";
import work5 from "../assets/images/work5.jpg";
import work6 from "../assets/images/work6.jpg";
import work7 from "../assets/images/work7.jpg";
import work8 from "../assets/images/work8.jpg";

export default class Portfolio extends Component {
  state = {
    arrJob: [
      {
        id: "1",
        namejob: "design",
        imgJob: work1,
        namePrj: "Project #1",
        desPrj: "Project Description",
      },
      {
        id: "2",
        namejob: "dev",
        imgJob: work2,
        namePrj: "Project #2",
        desPrj: "Project Description",
      },
      {
        id: "3",
        namejob: "graphic",
        imgJob: work3,
        namePrj: "Project #3",
        desPrj: "Project Description",
      },
      {
        id: "4",
        namejob: "design",
        imgJob: work4,
        namePrj: "Project #4",
        desPrj: "Project Description",
      },
      {
        id: "5",
        namejob: "dev",
        imgJob: work5,
        namePrj: "Project #5",
        desPrj: "Project Description",
      },
      {
        id: "6",
        namejob: "design",
        imgJob: work6,
        namePrj: "Project #6",
        desPrj: "Project Description",
      },
      {
        id: "7",
        namejob: "dev",
        imgJob: work7,
        namePrj: "Project #7",
        desPrj: "Project Description",
      },
      {
        id: "8",
        namejob: "graphic",
        imgJob: work8,
        namePrj: "Project #8",
        desPrj: "Project Description",
      },
    ],
    jobClick: "*",
  };
  clickJob = (event, nameJob) => {
    event.preventDefault();
    this.setState({
      jobClick: nameJob,
    });
    document.getElementById("loadmore").style.display = "none";
  };

  render() {
    let { arrJob, jobClick } = this.state;
    return (
      <div id="portfolio" className="portfolio">
        <div className="about_text">
          <div className="section-content text-center">
            <h2>OUR PORTFOLIO</h2>
            <hr />
          </div>
        </div>
        <div className="title_portf text-center">
          <a
            href="/#"
            onClick={(event) => this.clickJob(event, "*")}
            className={"filter " + (jobClick === "*" ? "active" : "")}
            data-filter="*"
          >
            All
          </a>
          <a
            href="/#"
            onClick={(event) => this.clickJob(event, "graphic")}
            className={"filter " + (jobClick === "graphic" ? "active" : "")}
            data-filter="graphic"
          >
            Graphic Design
          </a>
          <a
            href="/#"
            onClick={(event) => this.clickJob(event, "design")}
            className={"filter " + (jobClick === "design" ? "active" : "")}
            data-filter="design"
          >
            Web Design
          </a>
          <a
            href="/#"
            onClick={(event) => this.clickJob(event, "dev")}
            className={"filter " + (jobClick === "dev" ? "active" : "")}
            data-filter="dev"
          >
            Web Development
          </a>
        </div>
        <div className="all_item">
          <div className="row_item">
            {arrJob.map((item, index) => {
              return jobClick === "*" ? (
                <div className={"item " + item.namejob} key={item.id}>
                  <img src={item.imgJob} alt="" />
                  <div className="image-overlay">
                    <a href="/#" className="media-popup" title={item.namePrj}>
                      <div className="work-item-info">
                        <h3>{item.namePrj}</h3>
                        <p>{item.desPrj}</p>
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                jobClick === item.namejob && (
                  <div className={"item " + item.namejob} key={item.id}>
                    <img src={item.imgJob} alt="" />
                    <div className="image-overlay">
                      <a href="/#" className="media-popup" title={item.namePrj}>
                        <div className="work-item-info">
                          <h3>{item.namePrj}</h3>
                          <p>{item.desPrj}</p>
                        </div>
                      </a>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="crucio-purchase section text-center" id="loadmore">
          <div className="section-content ">
            <button className="btn load-more">Load More</button>
          </div>
        </div>
        <div className="newsletter">
          <div className="content_news text-center">
            <h3
              className="animate__animated wow animate__fadeInDown"
              data-wow-duration="1s"
            >
              Subscribe To Our Newsletter
            </h3>
            <div className="ip_content">
              <form action="">
                <input
                  className="animate__animated wow animate__fadeInLeft"
                  data-wow-delay="0.5s"
                  data-wow-duration="1s"
                  type="text"
                  placeholder="Enter your email..."
                />
                <br />
                <button
                  type="submit "
                  className="animate__animated wow animate__fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="serv_banner">
          <div className="serv_banner_main text-center">
            <h2
              className="animate__animated wow animate__fadeInLeft"
              data-wow-delay="0.5s"
            >
              WANT TO DISCUSS YOUR NEW PROJECT?
            </h2>
            <a
              className="animate__animated wow animate__fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
              href="/#"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    );
  }
}
