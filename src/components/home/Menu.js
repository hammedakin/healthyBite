import styled from "styled-components";
import { menu } from "../../utils/data";
import { apple2, leaf2 } from "../../assets";


const Menu = () => {

      return (
            <>
                  <div id="resources"></div>
                  <StyledMenu

                  >
                        <img src={apple2} alt="Orange" className="fruit4" />
                        <div className="container">
                              <div className="col-md-6 mx-auto text-center"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                              >
                                    <img src={leaf2} alt="Orange" className="fruit1" />
                                    <p className="fw-bold pry-bold-text">
                                          Resources
                                    </p>
                                    <h1 className="grey-bold-text">
                                          ENJOY THE BEST HEALTHY MENU AND
                                          GET BETTER.
                                    </h1>
                              </div>

                              <div className="row mt-5 justify-content-between">
                                    {menu?.map(({ img, name, text }, i) =>
                                          <div className="col-md-4 px-2 px-md-4 mb-4" key={i}
                                                data-aos="fade-right"
                                                data-aos-duration="1000"
                                          >
                                                <div className="student"
                                                      style={{
                                                            backgroundImage: `url(${ img })`
                                                      }}
                                                >
                                                      <div className="light-text ps-4 mb-4">
                                                            <h6 className="fw-bold">
                                                                  {name}
                                                            </h6>

                                                            <p className="small text-break">
                                                                  {text}
                                                            </p>
                                                      </div>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        </div>
                  </StyledMenu>
            </>
      );
};

export default Menu;

const StyledMenu = styled.section`
padding: 5rem 0 4rem;
margin: 2rem 0;

.student {      
            width:100%;
            height:500px;
            margin:auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            border-radius: 50px;
            display: flex;
            align-items:end;

}

       .fruit1{
                  z-index:1 !important;
                  position: absolute;
                  top:0rem;
                  left:15%; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 150px;
                  /* transform: rotate(176.441deg); */
                  opacity: 0.7;
            }

        .fruit4{
                  z-index:1 !important;
                  position: absolute;
                  /* top:0rem; */
                  right:0%; 
                  fill:  lightgray -742.486px -484.477px / 596.33% 411.392% no-repeat;
                  width: 50px;
                  opacity: 0.5;
                  
            }
            
            @media screen and (max-width: 580px ) {
                  
                  .fruit1{
                        
                             top:0rem;
                             left:5%; 
                             width: 90px;
                          
                       }
           
                   .fruit4{
                        display: none;
                           /* top:1rem; */
                             right:0%; 
                             width: 50px;
                             
                       }
            }

`;