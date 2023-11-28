import styled from "styled-components";
import { ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from "../../utils/icons";
import { testimonials } from "../../utils/data";



const Testimonials = () => {
      return (
            <StyledTestimonial>
                  <div className="container">
                        <div className="row align-items-center">
                              <div className="col-lg-4 mb-5">
                                    <h1 className="grey-bold-text">
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
                              <div className="col-lg-8 mt-5  mt-lg-0">
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
            </StyledTestimonial>
      );
};

export default Testimonials;

const StyledTestimonial = styled.section`
      background-color: var(--sec-color);
      padding: 4rem 0;

      .arrow-nav{
            :hover{
                  background-color:#FFC87A !important;
            }
      }

      .card-bg{
            background-color: var(--light-color);
            border-radius:10px;
            padding: 3rem .8rem 1rem;
            position:relative;

            img{
                  position:absolute;
                  top:-1.6rem;
            }
      }
`;