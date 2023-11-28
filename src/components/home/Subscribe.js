import React from 'react';
import styled from 'styled-components';
import { subscribe } from '../../assets';


const Subcribe = () => {
      return (
            <StyledSubscribe>
                  <div className="container">
                        <div className="subscribe-card">
                              <div className="col-md-6 col-lg-5 mx-auto text-center">
                                    <p className="pry-text">
                                          Our Subscribe
                                    </p>
                                    <h3 className="grey-bold-text mb-4">
                                          Subscribe To Get The Latest Promo from Healthy <span className="pry-text">Bite</span>
                                    </h3>
                                    <p className="small grey-text">
                                          We recommended you to subscribe to our promo program,
                                          drop your email below to get daily update about us
                                    </p>
                                    <div className="input-group">
                                          <div className="col">
                                                <input
                                                      type="email"
                                                      id="subscribe"
                                                      name='email'
                                                      placeholder="Enter your email address"
                                                      // onChange={(e) => setEmail(e.target.value)}
                                                      // value={email}
                                                      required
                                                />
                                          </div>
                                          <button
                                                className="btn pry light-text py-2"
                                                type="submit"
                                          // disabled={sending}
                                          >
                                                Subscribe
                                                {/* {sending ? 'sending' : 'Subscribe'} */}
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>

            </StyledSubscribe>
      );
};

export default Subcribe;

const StyledSubscribe = styled.section`
      margin: 4rem 0;

      .subscribe-card{
            background-color: var(--sec-color);
            background-image: url(${ subscribe });
            background-size: cover;
            border-radius: 50px;
            padding: 4rem 1rem;


             .input-group {
                  display: flex;
                  align-items:center;
                  justify-content: space-between;
                  background-color: var(--light-color);
                  border-radius:100px !important;
                  padding-right:4px;
                  margin-top:3rem;

                  input {
                        width: 100%;
                        padding: 12px 20px;
                        margin: 0;
                        display: inline-block;
                        border: none;
                        box-sizing: border-box;
                        font-size: 13px;
                        line-height: 24px;
                        color: var(--dark-color);
                        box-shadow: none;
                        margin-bottom: 0 !important;
                        background-color: none;
                        border-radius:100px;

                        ::placeholder{
                              color: var(--grey-bold-color);
                        }
                  }
                  button {
                        line-height: 1.5 !important;
                        border-radius:100px !important;
                        box-shadow:none !important;

            }
            }
      }


`;