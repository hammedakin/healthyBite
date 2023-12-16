import styled from "styled-components";
import { testimonials } from "../../utils/data";
import { apple1, halfApple, leaf1, orange5 } from "../../assets";



const Testimonials = () => {
      return (
            <>
                  <div id="reviews"></div>
                  <StyledTestimonial
                        data-aos="zoom-in"
                        data-aos-duration="500"
                  >
                        <img src={halfApple} alt="Orange" className="fruit1" />
                        <img src={leaf1} alt="Orange" className="fruit2" />
                        <div className="container">
                              <div className="row align-items-center  ">
                                    <div className="col-lg-4 mb-5 title"
                                          data-aos="fade-left"
                                          data-aos-duration="1000"
                                          data-aos-delay="500"
                                    >
                                          <h1 className="grey-bold-text text-uppercase">
                                                What Are People
                                                Saying <span className="pry-bold-text"> About Us
                                                </span>
                                          </h1>
                                          <p className="small grey-light-text mt-4">
                                                We are very happy if you are satisfied with our service and resources, let's read pure reviews from customers who used our services.
                                          </p>

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
                                                                              <h5 className="grey-bold-text">
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
                        <img src={apple1} alt="Orange" className="fruit3" />

                  </StyledTestimonial>
            </>
      );
};

export default Testimonials;

const StyledTestimonial = styled.section`

background: linear-gradient(180deg, #EFFFF4 0%, rgba(199, 255, 216, 0.5) 100%);

      padding: 4rem 0;
      position: relative;

   
      .title {

            p {
                  font-size: 20px;
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

        .fruit1{
                  z-index:1 !important;
                  position: absolute;
                  top:-5rem;
                  left:3rem; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 150px;
                  /* transform: rotate(176.441deg); */
                  opacity: 0.7;
                  
            }

        .fruit2{
                  z-index:1 !important;
                  position: absolute;
                  top:0rem;
                  right:0rem; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 70px;
                  /* transform: rotate(176.441deg); */
                  opacity: 0.5;
                  
            }
      .fruit3{
                  z-index:1 !important;
                  position: absolute;
                  bottom:-4rem;
                  left:0rem; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 120px;
                  /* transform: rotate(-50.441deg); */
                  opacity: 0.7;
                  
            }
            .fruit4{
                  z-index:1 !important;
                  position: absolute;
                  bottom:-3rem;
                  left: 50%;
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 130px;
                  /* transform: rotate(176.441deg); */
                  opacity: 0.3;
                  
            }
            .fruit5{
                  z-index:1 !important;
                  position: absolute;
                  bottom:1rem;
                  right:0; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 170px;            
                  opacity: 0.3;
            }
            `;