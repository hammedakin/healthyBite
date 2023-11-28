import { Link } from "react-router-dom";
import { ICON_LIST } from "../utils/icons";
import { navLink } from "../utils/data";
import { StyledNavbar } from "../styles/Navbar.styled";
import { logo } from "../assets";

const Navbar = () => {


      return (
            <StyledNavbar className="navbar shadow-none navbar-expand-lg transparent" id="navbar">
                  <div className="container align-items-end">
                        <Link to="/" className="navbar-brand sec-text fit-content">
                              <img src={logo} width="30px" alt="HealthyBite" loading="lazy" />
                        </Link>
                        <div className="d-flex mb-2">
                              <a
                                    className="navbar-toggler"
                                    type="button"
                                    data-mdb-toggle="collapse"
                                    data-mdb-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                              >
                                    <span className="navbar-toggler-icon toggler">
                                          <span className="h3 m-0 pry-text">
                                                {ICON_LIST}
                                          </span>
                                    </span>
                              </a>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                              <ul className="navbar-nav ms-auto text-center mt-3 mt-md-0">
                                    {navLink?.map(({ title, to }, i) => {
                                          return (
                                                <li className="nav-item" key={i}>
                                                      <a href={to}>
                                                            {title}
                                                      </a>
                                                </li>
                                          );
                                    })}

                              </ul >
                        </div >
                  </div >
            </StyledNavbar >

      );
};

export default Navbar;
