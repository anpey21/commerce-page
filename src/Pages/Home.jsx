import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import FullPageSlider from '../Components/Slider';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <LandingWrapper>
      <Announcement />
      <Navbar />
      <FullPageSlider />
      </LandingWrapper>
    </div>
  );
}

const LandingWrapper = styled.div`
  height: 100vh;
`;

export default Home;
