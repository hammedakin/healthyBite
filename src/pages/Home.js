import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTopButton from "../components/ScrollToTop";
import Subcribe from "../components/home/Subscribe";
import Menu from "../components/home/Menu";
import WhyUs from "../components/home/WhyUs";
import Testimonials from "../components/home/Testimonials";
import Hero from "../components/home/Hero";
import Inspiration from "../components/home/Inspiration";



const Home = () => {

  return (
    <StyledHome>
      {/* <Navbar /> */}
      <Hero />
      <WhyUs />
      <Testimonials />
      <Menu />
      <Inspiration />
      <Subcribe />
      <Footer />
      <ScrollToTopButton />
    </StyledHome>

  );
};

export default Home;

const StyledHome = styled.main`
background-color: var(--light-color);
color: var(--dark-color);
align-items: center;
justify-content: center;
overflow-x: hidden;
 margin: 0 auto;
  padding: 0;
  width: 100%;

`;