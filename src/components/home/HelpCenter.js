import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import styled from "styled-components";


const HelpCenter = (props) => {
      const [issending, setissending] = useState(false);

      const [formField, setformField] = useState({});


      function handleChange(e) {
            setformField((inputs) => ({
                  ...inputs,
                  [e.target.name]: e.target.value,
            }));
      }

      //  Get All Items


      function submitFn(e) {
            e.preventDefault();
      }

      return (

            <Modal
                  show={props.show}
                  onHide={props.onHide}
                  // backdrop="static"
                  keyboard={true}
                  centered
                  size="md"
            >
                  <Modal.Body>
                        <Modal.Header className="border-0" closeButton>
                              <h3 className="fw-bold">
                                    HELP CENTER
                              </h3>
                        </Modal.Header>

                        <StyledHelpCenter>
                              <div className="container">
                                    <div className="text-center">
                                          <div className="">
                                                <form onSubmit={(e) => submitFn(e)}>
                                                      <div className="row justify-content-center text-start mt-4">

                                                            <div className="col-md-12">
                                                                  <label className="mb-0"> First Name:</label>
                                                                  <input
                                                                        type="text"
                                                                        name="firstName"
                                                                        className="input-style"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formField.firstName}
                                                                  />
                                                            </div>
                                                            <div className="col-md-12">
                                                                  <label className="mb-0"> Last Name:</label>
                                                                  <input
                                                                        type="text"
                                                                        name="lastName"
                                                                        className="input-style"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formField.lastName}
                                                                  />
                                                            </div>
                                                            <div className="col-md-12">
                                                                  <label className="mb-0"> Email:</label>
                                                                  <input
                                                                        type="email"
                                                                        name="email"
                                                                        className="input-style"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formField.email}
                                                                  />
                                                            </div>
                                                            <div className="col-md-12">
                                                                  <label className="mb-0"> Mobile Number:</label>
                                                                  <input
                                                                        type="number"
                                                                        name="phone"
                                                                        className="input-style"
                                                                        onChange={handleChange}
                                                                        required
                                                                        value={formField.phone}
                                                                  />
                                                            </div>

                                                            <div className="col-md-12 mx-auto text-center">

                                                                  <div className="my-4 text-center">
                                                                        <button
                                                                              pry
                                                                              type="submit"
                                                                              disabled={issending}
                                                                              className="btn m-0 w-100 pry light-text br-lg"  >
                                                                              {issending ? 'loading...' : "Submit"}
                                                                        </button>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </StyledHelpCenter>
                  </Modal.Body>
            </Modal>


      );
};

export default HelpCenter;


const StyledHelpCenter = styled.section`
      
.input-style {

  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 100px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  background-color: #F4FFF8;
  
}

button {
      padding: 1rem 0 !important;
}
`;