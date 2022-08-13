import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-nav navbar-center">
        <ul
          className="nav navbar-nav"
          data-in="fadeInDown"
          data-out="fadeOutUp"
        >
          <li className="dropdown megamenu-fw">
            <ul className="dropdown-menu megamenu-content" role="menu">
              <li>
                <div className="row">
                  <div className="col-menu col-md-3">
                    <h5 className="title">Product</h5>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <Link to="/">Url Spoofing </Link>
                        </li>
                        <li>
                          <Link to="/">Url Spoofing Pro</Link>
                        </li>
                        <li>
                          <Link to="/">Url Spoofing Enterprise</Link>
                        </li>
                        <li>
                          <Link to="/">Bit Traker</Link>
                        </li>
                        <li>
                          <Link to="index-6.html">SSL Monitor</Link>
                        </li>
                        <li>
                          <Link to="freelancing.html">URL Lock</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-menu col-md-3">
                    <h5 className="title">Solutions</h5>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <Link to="/">Url Spoofing Monitor</Link>
                        </li>
                        <li>
                          <Link to="/">Intrusion Detection</Link>
                        </li>
                        <li>
                          <Link to="/">Malicious Code Blocking</Link>
                        </li>
                        <li>
                          <Link to="/">SSL Status Monitor</Link>
                        </li>
                        <li>
                          <Link to="index-6.html">Anti Hacking Monitor</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-menu col-md-3">
                    <h5 className="title">Blog</h5>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <Link to="/">Company News </Link>
                        </li>
                        <li>
                          <Link to="/">Product Updates</Link>
                        </li>
                        <li>
                          <Link to="/">Industry News </Link>
                        </li>
                        <li>
                          <Link to="/">Encryption</Link>
                        </li>
                        <li>
                          <Link to="index-6.html">Site Security</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-menu col-md-3">
                    <h5 className="title">Resource Center</h5>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <Link to="/">Anti-Intrusion</Link>
                        </li>
                        <li>
                          <Link to="/">Thwarting Hackers</Link>
                        </li>
                        <li>
                          <Link to="/">Securing Websites </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-menu col-md-3">
                    <h5 className="title">Help and Support</h5>
                    <div className="content">
                      <ul className="menu-col">
                        <li>
                          <Link to="/">Site Secure Help </Link>
                        </li>
                        <li>
                          <Link to="/">Bit Tracked Help</Link>
                        </li>
                        <li>
                          <Link to="/">SSL Monitor Help </Link>
                        </li>
                        <li>
                          <Link to="/">URL Lock Help</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </>
  );
};

export default Navbar1;
