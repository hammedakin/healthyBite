import styled from "styled-components";
import { whyUs } from "../../utils/data";
import { ICON_ARROW_RIGHT } from "../../utils/icons";


const WhyUs = () => {


      return (
            <StyledWhyUs>
                  <div className="container">
                        <div className="row justify-content-between">
                              <div className="col-md-4">
                                    <h1 className="grey-bold-text">
                                          WHY CHOOSE US FOR    <span className="pry-text"> YOUR SALAD DIET </span>
                                    </h1>
                              </div>
                              <div className="col-md-4 mt-4 mt-md-0">
                                    <p className="small grey-text">
                                          We continue to consistently choose and maintain the quality of the fruit served, so that it remains fresh and nutritious when you eat it.
                                    </p>
                              </div>
                        </div>

                        <div className="row mt-5">
                              {
                                    whyUs.map(({ img, title, text }, i) =>
                                          <div className="col-md-4 mb-4" key={i}>
                                                <div className="card-bg h-100">
                                                      <img src={img} alt={title} width='100px' className="" />
                                                      <h6 className="fw-bold mt-5">
                                                            {title}
                                                      </h6>
                                                      <p className="small grey-text mt-3">
                                                            {text}
                                                      </p>
                                                      <div className="rounded-btn  mt-3">
                                                            learn more {ICON_ARROW_RIGHT}
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              }
                        </div>
                  </div>

            </StyledWhyUs>
      );
};

export default WhyUs;

const StyledWhyUs = styled.section`
      margin: 4rem 0;

      .card-bg {
            padding: 29px;
            border-radius: 50px;
            
            .rounded-btn{
                  width:fit-content;
                  color: var(--grey-color);
                  padding: .5rem 0rem ;
                  border-radius: 100px;
            }
            
            :hover{
                  box-shadow: 0px 50px 80px -30px #976D0033;
                  
                  .rounded-btn{
                        color: var(--light-color);
                        background: #FB9333;
                        padding: .5rem 1rem ;
                  }
            }
      }
      

`;