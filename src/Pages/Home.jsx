import React from 'react';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import FullPageSlider from '../Components/Slider';
import Categories from '../Components/Categories';
import styled from 'styled-components';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <FullPageSlider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default Home;
