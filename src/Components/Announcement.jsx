import React from 'react';
import styled from 'styled-components';


const Announcement = () => {
  return (
    <AnnouncementDiv>
      Limited Time Offer! Get free shipping on orders over $50!
    </AnnouncementDiv>
  );
}

const AnnouncementDiv = styled.div`
  background: linear-gradient(to right, #FF7F50, #FF5733);
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
  font-size: 14px;
  text-align: center;
  color: white;
  font-weight: bolder;
`;


export default Announcement;
