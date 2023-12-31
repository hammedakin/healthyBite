import styled from "styled-components";
import { logo } from "../assets";
import { navLink, socials } from "../utils/data";
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
                                          Our platform is the pioneer of
                                          therapist with professional
                                          skills and educational resources.
                                    </p>

                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <h5 className="pry-bold-text mb-4">
                                          Feature
                                    </h5>
                                    {
                                          navLink?.map(({ title, to }, i) =>
                                                <a href={`${ to }`} className="text-decoration-none grey-text mb-3 d-block" key={i}>
                                                      <p className=""> {title} </p>
                                                </a>
                                          )
                                    }

                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <h5 className="pry-bold-text mb-4">
                                          Get in Touch
                                    </h5>
                                    <p className="">
                                          <span className="me-3 pry-bold-text">
                                                {ICON_PAPER_CLIP}
                                          </span>
                                          21 Albert Road, Birkenhed
                                          CH42 9NH </p>
                                    <p className="">
                                          <span className="me-3 pry-bold-text">
                                                {ICON_EMAIL}
                                          </span>
                                          mumsbest@hello.com </p>
                                    <p className="">
                                          <span className="me-3 pry-bold-text">
                                                {ICON_TELEPHONE}
                                          </span>
                                          +44 386-688-3295 </p>

                              </div>
                              <div className="col-lg-2 col-md-3 mb-4">
                                    <div className="d-flex mb-2">
                                          {socials?.map(({ icon, url }, i) =>
                                                <a href={url} target="_blank" rel="noopener noreferrer"
                                                      className="px-2 h4 pry-bold-text"
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