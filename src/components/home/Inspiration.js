import styled from "styled-components";
import { insp1, insp2 } from "../../assets";


const Inspiration = () => {
      return (
            <StyledInspiration>
                  <div className="container">
                        <div className="row">
                              <div className="col-md-6 ">
                                    <h1 className="grey-bold-text mt-5">
                                          Inspiration.
                                    </h1>
                                    <div className="grey-bold-bg py-1 px-4 fit-content">

                                    </div>
                                    <p className="grey-text col-6 mt-4">
                                          The goal was to create a cohesive and memorable brand that would help the company stand out in their industry.
                                    </p>
                              </div>
                              <div className="col-md-6">
                                    <div className="row inspiration flexrow-reverse">
                                          <div className="col-md-6">
                                                <div className="card-bg h-100 border">

                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="card-bg d-flex align-items-end border px-2">
                                                      <div className="d-flex gap-2 justify-content-between w-100 align-items-center">
                                                            <div className="align-self-end">
                                                                  <p className="small fw-bold grey-bold-text m-0">
                                                                        Dreamy Flowers
                                                                  </p>
                                                                  <p className="small grey-text">
                                                                        Behance: Omar Aqil
                                                                  </p>
                                                            </div>
                                                            <div className="">
                                                                  <h1 className="">
                                                                        01
                                                                  </h1>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="card-bg d-flex align-items-end border px-2">
                                                      <div className="d-flex gap-2 justify-content-between w-100 align-items-center">
                                                            <div className="align-self-end">
                                                                  <p className="small fw-bold grey-bold-text m-0">
                                                                        LUMI
                                                                  </p>
                                                                  <p className="small grey-text">
                                                                        Lumi by Roli
                                                                  </p>
                                                            </div>
                                                            <div className="">
                                                                  <h1 className="">
                                                                        02
                                                                  </h1>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="card-bg d-flex align-items-end border p-0">
                                                      <img src={insp1} alt="Inspiration1" width="100%" />
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="card-bg d-flex align-items-end border p-0">
                                                      <img src={insp2} alt="Inspiration1" width="100%" />
                                                </div>
                                          </div>
                                          <div className="col-md-6">
                                                <div className="card-bg d-flex align-items-end border px-2">
                                                      <div className="d-flex gap-2 justify-content-between w-100 align-items-center">
                                                            <div className="align-self-end">
                                                                  <p className="small fw-bold grey-bold-text m-0">
                                                                        LUMI
                                                                  </p>
                                                                  <p className="small grey-text">
                                                                        Lumi by Roli
                                                                  </p>
                                                            </div>
                                                            <div className="">
                                                                  <h1 className="">
                                                                        03
                                                                  </h1>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </StyledInspiration>
      );
};

export default Inspiration;

const StyledInspiration = styled.section`
      
      border-top: 10px solid var(--pry-color);

      .inspiration{
            .col-md-6 {
                  padding: 0 !important;
            }
      }

      .card-bg{
            height: 250px;    
            width:auto;
                  img {
                    width:100%;
                    height:100%;
                    margin:0;
                    object-fit:cover;
                    background-position: center;
                  }
            
                  h1{
                        font-size: 80px;
                        -webkit-text-stroke: 1px var(--pry-color);
                        color: transparent;
                        
                  }
      }

      .border {
            border: 1px solid var(--grey-light-color) !important;
            border-bottom: 0px !important;
            border-top: 0px !important;
      }

`;