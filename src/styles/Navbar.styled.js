import styled from "styled-components";


export const StyledNavbar = styled.nav`
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  transition: 0.5s ease !important;

  img {
    width: 120px;
  }

  button.navbar-toggler {
  background-color: none !important;
}

.navbar-toggler-icon {
  background: none !important;
}

  .rounded-btn{
                        width:fit-content;
                        color: var(--light-color);
                        background: #FB9333;
                        padding: .5rem 1rem ;
                        border-radius: 100px;
                        font-size:15px;
                 }

  .nav-item {
    
    a {
      color: var(--pry-color);
      font-size: 1rem;
      display: block;
      padding: 2rem 1rem 0.5rem;
      margin: 0 1rem;
      width: fit-content;
      margin-left: auto;
      margin-right: auto;
      font-weight:600;
      
      
      :hover {
       transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s;
      background-color: var(--pry-color);
      color: var(--light-color);
      }
    }


}

`;
