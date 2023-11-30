import styled from "styled-components";
import { hero } from "../../assets";
import { heroBg } from "../../assets";
import { rating } from "../../utils/data";
import Navbar from "../Navbar";


const Hero = () => {


      return (
            <StyledHero>
                  <Navbar />
                  <div className="padded-container">
                        <div className="container">
                              <div className="row align-items-center justify-content-between">

                                    <div className="col-lg-6 col-md-5 align-self-center"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    // data-aos-delay="1000"
                                    >
                                          <div className="round-btn mt-3">
                                                #1  Best Selling
                                          </div>
                                          <h1 className="grey-bold-text my-4">
                                                Just Eat Healthy
                                                With Fruit Salad.
                                          </h1>
                                          <p className="imagine grey-text col-md-8">
                                                Imagine you always have a appetite because we provide
                                                healthy and delicious salad for you!
                                          </p>
                                          <div className="rounded-btn  mt-4"
                                                data-aos="zoom-in"
                                                data-aos-duration="2000"
                                                data-aos-delay="2000"
                                          >
                                                Order Now
                                          </div>

                                          <div className="d-flex gap-4 flex-break mt-5 pt-4">
                                                {
                                                      rating.map(({ no, name }, i) =>
                                                            <div className="text-center" key={i}>
                                                                  <p className="grey-bold-text fw-bold mb-0">
                                                                        {no}
                                                                  </p>
                                                                  <p className="small grey-color">
                                                                        {name}
                                                                  </p>
                                                            </div>
                                                      )
                                                }
                                          </div>
                                    </div>

                                    <div className="col-md-7 col-lg-5 align-self-center"
                                          data-aos="zoom-in"
                                          data-aos-duration="2000"
                                    // data-aos-delay="1000"
                                    >
                                          <img src={hero} alt="Hero" width="100%" />
                                    </div>
                              </div>
                        </div>
                  </div>
            </StyledHero>
      );
};

export default Hero;

const StyledHero = styled.section`
      background-image: url(${ heroBg });

      .padded-container{
            padding: 4rem 0;
      }

      h1 {
            font-size: 60px;
      }
      p.imagine{
            font-size: 18px;
      }
      .round-btn{
                       width:fit-content;
                       color: var(--pry-color);
                       background: var(--sec-color);
                       padding: .2rem 1rem ;
                       border-radius: 100px;
                       font-size:13px;
                       font-weight: 600;
                  }
                  .rounded-btn{
                        width:fit-content;
                        color: var(--light-color);
                        background: #FB9333;
                        padding: .5rem 1rem ;
                        border-radius: 100px;
                        font-size:15px;
                 }


`;