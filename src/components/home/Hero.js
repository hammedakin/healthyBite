import styled from "styled-components";
import { hero } from "../../assets";
import { heroBg } from "../../assets";
import { rating } from "../../utils/data";
import Navbar from "../Navbar";
import HelpCenter from "./HelpCenter";
import { useState } from "react";


const Hero = () => {

      // Add Expenses Modal 
      const [show, setShow] = useState(false);
      const Close = () => setShow(false);
      const Show = () => setShow(true);

      function AddModal() {
            Show();
      }
      // Add Expenses Modal
      return (
            <StyledHero>
                  <Navbar />
                  <div className="padded-container">
                        <div className="container">
                              <div className="row align-items-center justify-content-between">

                                    <div className="col-lg-6 col-md-5 align-self-center mt-5"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    // data-aos-delay="1000"
                                    >
                                          <div className="round-btn mt-3">
                                                #1  Best Platform
                                          </div>
                                          <h1 className="grey-bold-text fw-bold my-4">
                                                IMPROVE YOUR
                                                OVERALL MENTAL HEALTH.
                                          </h1>
                                          <p className="imagine grey-text col-md-8">
                                                Find the best professional therapist in the platform to provide
                                                help during your perinatal period!
                                          </p>
                                          <div className="rounded-btn mt-4 pointer"
                                                onClick={() => AddModal()}
                                          >
                                                Get Help
                                          </div>

                                    </div>

                                    <div className="col-md-7 col-lg-5 align-self-center mt-5 mt-md-0"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    >
                                          <img src={hero} alt="Hero" width="100%" />
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* Get Help Modal */}
                  <HelpCenter
                        show={show}
                        onHide={Close}
                        animation={false}
                  />
                  {/* Get Help Modal */}
            </StyledHero>
      );
};

export default Hero;

const StyledHero = styled.section`
      background-image: url(${ heroBg });

      .padded-container{
            padding: 0 0 4rem ;
      }

      h1 {
            font-size: 40px;
      }
      p.imagine{
            font-size: 18px;
      }
      .round-btn{
                       width:fit-content;
                       color: var(--pry-bold-color);
                       background: var(--sec-color);
                       padding: .2rem 1rem ;
                       border-radius: 100px;
                       font-size:13px;
                       font-weight: 600;
                  }
                  .rounded-btn{
                        width:fit-content;
                        color: var(--light-color);
                        background: var(--pry-color);
                        padding: 1rem 2.5rem ;
                        border-radius: 100px;
                        font-size:15px;
                 }


`;