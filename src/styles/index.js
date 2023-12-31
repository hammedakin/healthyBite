import Styled from 'styled-components';

export const Form = Styled.form`

`;

export const Input = Styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid var(--grey-color);
  box-sizing: border-box;
  border-radius: 5px !important;
  font-size: 13px;
  line-height: 24px;
  color: var(--dark-color);
  box-shadow: none;
  margin-bottom: 1.5rem !important;
  background-color: var(--light-color);
  
  :hover,:focus{
      border: 1px solid var(--pry-color) !important;
    }
    
    ::placeholder{
        color: var(--grey-bold-color);
    } 
    :disabled{
        background-color: var(--light-bold-color);
    } 
    
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none !important;
      appearance: none !important;
}
`;

export const Label = Styled.label`
margin:0;
color: var(--dark-color);
font-size:14px; 
font-weight: 600;
`;



export const ErrorPageMain = Styled.main`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: center;
    overflow: hidden;
    color: var(--dark-color);
  `;


