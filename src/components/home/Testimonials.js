import styled from "styled-components";
import { ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from "../../utils/icons";
import { testimonials } from "../../utils/data";
import { leaf, lotOrange, orange, orange2, orange3, orange4, orange5 } from "../../assets";



const Testimonials = () => {
      return (
            <>
                  <div id="reviews"></div>
                  <StyledTestimonial
                        data-aos="zoom-in"
                        data-aos-duration="500"
                  >
                        <img src={leaf} alt="Orange" className="fruit1" />
                        <div className="container">
                              <div className="row align-items-center">
                                    <div className="col-lg-4 mb-5"
                                          data-aos="fade-left"
                                          data-aos-duration="1000"
                                          data-aos-delay="500"
                                    >
                                          <h1 className="grey-bold-text text-uppercase">
                                                What Are People
                                                Saying <span className="pry-text"> About Us
                                                </span>
                                          </h1>
                                          <p className="small grey-light-text mt-4">
                                                We are very happy if you are satisfied with our service and products, let's read pure reviews from customers who bought our products.
                                          </p>

                                          <h1 className="grey-bold-text">02 <span className="h6 grey-light-text">/ 05</span></h1>

                                          <div className="d-flex gap-3 mt-4 light-text">
                                                <div className="pry br-sm px-3 py-2 arrow-nav">
                                                      {ICON_ARROW_LEFT}
                                                </div>
                                                <div className="pry br-sm px-3 py-2 arrow-nav">
                                                      {ICON_ARROW_RIGHT}
                                                </div>
                                          </div>

                                    </div>
                                    <div className="col-lg-8 mt-5  mt-lg-0"
                                          data-aos="fade-right"
                                          data-aos-duration="1000"
                                          data-aos-delay="500"
                                    >
                                          <div className="row">
                                                {
                                                      testimonials.map(({ img, name, age, text }, i) =>
                                                            <div className="col-md-4 mt-5 mt-md-0" key={i}>
                                                                  <div className="card-bg">
                                                                        <img src={img} alt={name} width='80px' />
                                                                        <div className="mt-5">
                                                                              <h5 className="grey-bold-te">
                                                                                    {name}
                                                                              </h5>
                                                                              <p className="small grey-light-text">{age} Years</p>
                                                                              <p className="grey-bold-text mt-4">
                                                                                    {text}
                                                                              </p>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      )
                                                }
                                          </div>
                                    </div>
                              </div>

                        </div>
                        <img src={orange4} alt="Orange" className="fruit2" />
                        <img src={orange5} alt="Orange" className="fruit3" />
                        <img src={lotOrange} alt="Orange" className="fruit4" />
                  </StyledTestimonial>
            </>
      );
};

export default Testimonials;

const StyledTestimonial = styled.section`
      /* background-color: var(--sec-color) ; */
      background: linear-gradient(180deg, #FFF6EA 0%, rgba(255, 232, 199, 0.5) 100%);

      /* z-index:5 !important; */
      padding: 4rem 0;
      position: relative;

      .arrow-nav{
            :hover{
                  background-color:#FFC87A !important;
            }
      }

      .card-bg{
            background: #FFFFFFCC;
            border-radius:10px;
            padding: 3rem .8rem 1rem;
            position:relative;
            z-index:3;
            img{
                  position:absolute;
                  top:-1.6rem;
            }
      }

      .container {
      }


        .fruit1{
                  z-index:1 !important;
                  position: absolute;
                  top:13rem;
                  left:-5rem; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 150px;
                  transform: rotate(176.441deg);
                  opacity: 0.3;
                  
            }
      .fruit2{
                  z-index:1 !important;
                  position: absolute;
                  bottom:3rem;
                  left:0rem; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 120px;
                  /* transform: rotate(-50.441deg); */
                  opacity: 0.3;
                  
            }
            .fruit3{
                  z-index:1 !important;
                  position: absolute;
                  bottom:-3rem;
                  left: 50%;
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 130px;
                  /* transform: rotate(176.441deg); */
                  opacity: 0.3;
                  
            }
            .fruit4{
                  z-index:1 !important;
                  position: absolute;
                  bottom:1rem;
                  right:0; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 170px;            
                  opacity: 0.3;
            }
            `;