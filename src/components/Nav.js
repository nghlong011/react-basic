import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/logo-1.png";
export default class Nav extends Component {
  state = {
    checkTogget: true,
    listNav: [
      { idNav: "1", titleNav: "home" },
      { idNav: "2", titleNav: "about" },
      { idNav: "3", titleNav: "services" },
      { idNav: "4", titleNav: "team" },
      { idNav: "5", titleNav: "portfolio" },
      { idNav: "6", titleNav: "blog" },
      { idNav: "7", titleNav: "contact" },
    ],
    width: 0,
    height: 0,
    activeNav: "",
  };
  clickMenu = () => {
    this.setState({
      checkTogget: !this.state.checkTogget,
    });
  };
  handleScroll = () => {
    const titleNavArray = this.state.listNav.map((item) => item.titleNav);
    titleNavArray.forEach((item) => {
      const section = document.getElementById(item);
      if (section) {
        if (
          window.scrollY >= section.offsetTop - 20 &&
          window.scrollY < section.offsetTop + section.offsetHeight - 20
        ) {
          this.setState({ activeNav: item });
        }
      }
    });
  };
  handleClick = (titleNav) => {
    document.getElementById(titleNav).scrollIntoView({ behavior: "smooth" });
    this.setState({
      activeNav: titleNav,
    });
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  //sau khi render
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    let { checkTogget, width, activeNav } = this.state;
    if (width > 1200) {
      checkTogget = true;
    }
    return (
      <div className="NavBar">
        <div className="nav_container">
          <a href="/#">
            <img src={logo1} alt="CRUCIO" />
          </a>
          <div id="main_menu" className="main_menu">
            <iconify-icon
              icon="ic:outline-menu"
              onClick={() => this.clickMenu()}
            ></iconify-icon>
          </div>
          {checkTogget && (
            <div className="main_nav">
              <ul>
                {this.state.listNav.map((item, index) => {
                  return (
                    <li
                      key={item.idNav}
                      onClick={() => this.handleClick(item.titleNav)}
                    >
                      <NavLink
                        to={item.titleNav}
                        className={activeNav === item.titleNav ? "active" : ""}
                      >
                        {item.titleNav}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
