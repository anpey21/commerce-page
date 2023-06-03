
import styled from 'styled-components';
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import Newsletter from '../Components/Newsletter';
import Footer from '../Components/Footer';

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>BROWSE INVENTORY</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By: </FilterText>
            <Select>
              <Option disabled selected>Product Type</Option>
              <Option>Tea</Option>
              <Option>Coffee</Option>
              <Option>Ceramics</Option>
              <Option>Glasssware</Option>
              <Option>Espresso Machines</Option>
              <Option>Bulk</Option>
            </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By: </FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (High to Low)</Option>
            <Option>Price (Low to High)</Option>
          </Select>
        </Filter>
        </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 20px;
  font-weight: lighter;
  letter-spacing: 4px;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 20px;
  text-align: center;
`;

const Filter = styled.div`
  margin-left: 20px;
  @media only screen and (max-width: 480px) {
    margin: 0;
  }
`;

const FilterText = styled.span`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  outline: none;
  margin: 0;
  border: 1px solid teal;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin: 0 10px;
    font-size: 10px;
  }
`;

const Option = styled.option`
margin: 0;
`;

export default ProductList;
