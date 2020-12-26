import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              肯定要旅行
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                肯定要追隨
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  肯定要知道
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  肯定要服務
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  肯定要曬圖
                </a>
              </li>
              <li>
                <a href="#testimonials" className="page-scroll">
                  肯定要媒體
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  肯定要團隊
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                肯定要連絡
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
