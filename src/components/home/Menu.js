import styled from "styled-components";
import { TextTitle } from "../../styles";
import { menu } from "../../utils/data";


const Menu = () => {

      return (
            <>
                  <div id="menu"></div>
                  <StyledMenu>
                        <div className="container ">
                              <div className="col-md-6 mx-auto text-center">
                                    <p className="small pry-text">
                                          TODAY'S MENU
                                    </p>
                                    <h1 className="grey-bold-text">
                                          ENJOY THE BEST MENU AND GET
                                          <span className="pry-text"> DISCOUNTS </span>
                                          AVAILABLE
                                    </h1>
                              </div>

                              <div className="row mt-5 justify-content-between">
                                    {menu?.map(({ img, name, price }, i) =>
                                          <div className="col-md-4 px-2 px-md-4 mb-4" key={i}
                                          >
                                                <div className="student"
                                                      style={{
                                                            backgroundImage: `url(${ img })`
                                                      }}
                                                >
                                                      <div className="light-text ps-4 mb-4">
                                                            <h6 className="">
                                                                  {name}
                                                            </h6>
                                                            <h4 className="">
                                                                  {price}
                                                            </h4>
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
padding: 4rem 0;
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


.img-container {
}


`;