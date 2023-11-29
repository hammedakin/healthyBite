import styled from "styled-components";
import { logo } from "../assets";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import { locations, socials } from "../utils/data";
import { ICON_EMAIL, ICON_PAPER_CLIP, ICON_TELEPHONE } from "../utils/icons";


const Footer = () => {


      return (
            <StyledFooter>
                  <div className="container grey-bold-text">
                        <div className="row justify-content-between">
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <div className="mb-1">
                                          <img src={logo} alt="" width="130px" />
                                    </div>
                                    <p className="">
                                          Jez Salad is the pioneer of healthy fruit salad with high nutrition.
                                    </p>
                                    <p className="mt-4">
                                          ©Copyright Jez Salad
                                    </p>
                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <h5 className="pry-text mb-4">
                                          Feature
                                    </h5>
                                    <p className=""> Menu </p>
                                    <p className=""> Promo </p>
                                    <p className=""> Contact </p>
                                    <p className=""> About Us </p>
                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <h5 className="pry-text mb-4">
                                          Get in Touch
                                    </h5>
                                    <p className="">
                                          <span className="me-3 pry-text">
                                                {ICON_PAPER_CLIP}
                                          </span>
                                          8819 Ohio St. South Gate,
                                          CA 90280 </p>
                                    <p className="">
                                          <span className="me-3 pry-text">
                                                {ICON_EMAIL}
                                          </span>
                                          Ourstudio@hello.com </p>
                                    <p className="">
                                          <span className="me-3 pry-text">
                                                {ICON_TELEPHONE}
                                          </span>
                                          +1 386-688-3295 </p>

                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <div className="d-flex mb-2">
                                          {socials?.map(({ icon, url }, i) =>
                                                <a href={url} target="_blank" rel="noopener noreferrer"
                                                      className="px-2 h4 pry-text"
                                                      key={i}
                                                >
                                                      {icon}
                                                </a>
                                          )}
                                    </div>
                                    <p className="">
                                          Follow our social media.
                                    </p>
                              </div>
                        </div>
                  </div>
                  {/* <div className="footer-copyright pry-text text-center mt-5 py-3">
                        © 2023{" "}
                        <a href="https://healthybite.ng" className="pry-text text-decoration-underline">               {" "}
                              healthybite.ng
                        </a>{" "}
                        || All rights reserved

                                       </div> */}
            </StyledFooter>
      );
};

export default Footer;


const StyledFooter = styled.footer`
      background-color: var(--light-color);
      padding: 5rem 0 ;  

.footer-copyright {
      background: rgba(94, 55, 3, 0.064);
}
`;