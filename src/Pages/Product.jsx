import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import Announcement from "../Components/Announcement";


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="./images/latte.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>COFFEE MUG</Title>
          <p class="subtext">Set of 6</p>
          <Desc>
            This is going to be the product description paragraph.
          </Desc>
          <Price>$ 20</Price>
          <AddToCart>
            <AmountContainer>
             <Add>+</Add>
              <Amount>1</Amount>
              <Subtract>-</Subtract>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddToCart>
          <SmallerImg>
            <img src="./images/latte.jpg" />
            <img src="./images/latte.jpg" />
            <img src="./images/latte.jpg" />
          </SmallerImg>
          </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
`;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    padding: 30px;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  @media only screen and (max-width: 1020px) {
    height: 50vh;
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  .subtext {
    font-style: italic;
    font-weight: light;
    color: darkslategray;
  }
  @media only screen and (max-width: 768px) {
    padding: 30px 12px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 2px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-size: 25px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 12px;
  }
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  color: var(--coral);
`;

const Button = styled.button`
  padding: 15px;
  border: 1px solid var(--primary-teal);
  background-color: white;
  color: var(--primary-teal);
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  margin-top: 12px;
  &:hover {
    background-color: var(--primary-teal);
    opacity: 0.8;
    color: white;
  }
`;

const Amount = styled.span`
  width: 40px;
  height: 30px;
  border: 1px solid var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Subtract = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: var(--coral);
    opacity: 0.8;
    color: white;
  }
`;

const Add = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid var(--coral);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :hover {
    background-color: var(--coral);
    opacity: 0.8;
    color: white;
  }
`;

const SmallerImg = styled.div`
  display: flex;
  width: 200px;
  height: auto;
  justify-content: space-between;
  margin: 20px 0;
  img {
    width: 100%;
    padding: 12px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    `;

export default Product;
