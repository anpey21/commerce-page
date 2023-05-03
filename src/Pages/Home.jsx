import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import FullPageSlider from '../Components/Slider';
import Categories from '../Components/Categories';
import styled from 'styled-components';
import Products from '../Components/Products';

const Home = () => {
  return (
    <div>
      <LandingWrapper>
        <Announcement />
        <Navbar />
        <FullPageSlider />
        <Categories />
        <Products />
      </LandingWrapper>
    </div>
  );
}

const LandingWrapper = styled.div`
  height: 100vh;
`;

export default Home;
