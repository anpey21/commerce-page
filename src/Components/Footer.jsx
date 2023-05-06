import styled from "styled-components";
/* import fb, ig, and twitter from react icons */
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaAddressBook, FaPhone, FaCcDiscover, FaCcMastercard, FaCcVisa, FaCcAmex, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LEFTEA. </Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
        </Desc> 
        <SocialContainer>
          <SocialIcon color="3b5998">
            <AiOutlineFacebook />
          </SocialIcon>
          <SocialIcon color="962fbf">
            <AiOutlineInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiOutlineTwitter />
          </SocialIcon>
          </SocialContainer>
        </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Saved Items</ListItem>
        </List>  
        </Center>
      <Right>
        <Title>CONTACT</Title>
        <ContactItem>
          < FaAddressBook />
          <p>1234 Main St, New York, NY 10001</p>
        </ContactItem>
        <ContactItem>
        <FaPhone />
          <p> +1 123 456 7890</p>
       </ContactItem>
        <ContactItem>
          < AiOutlineMail />
          <p>lefteainfo@leftea.com</p>
        </ContactItem>
        <PaymentIcons>
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcDiscover />
          <FaCcAmex />
          <FaCcPaypal />
        </PaymentIcons>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-top: 20px;
margin-bottom: 30px;

`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-direction: column;
flex-wrap: wrap;
cursor: pointer;
`;

const ListItem = styled.li`
width: 60%;
margin-bottom: 10px;
@media (max-width: 768px) {
  width: 100%;
}

`;

const Right = styled.div`
flex: 1;
padding: 20px;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  text-align: center;
}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
p {
  margin-left: 10px;
}
`;

const PaymentIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  font-size: 1.5rem;
  @media (max-width: 1020px) {
    width: 70%;
  }
`;


const Logo = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  `;

const Desc = styled.p`
  margin: 20px 0px;
 `;

const SocialContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
  `;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    transform: scale(1.1);
    transition: all 0.5s ease;
  }
  `;




export default Footer;
