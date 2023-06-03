import React from 'react';
import styled from 'styled-components';


const Announcement = () => {
  return (
    <AnnouncementDiv>
      Get free shipping on orders over $50!
    </AnnouncementDiv>
  );
}

const AnnouncementDiv = styled.div`
  background:var(--coral-gradient);
  border-bottom: 1px solid #ddd;
  padding: 10px 20px;
  font-size: 14px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  color: white;
  font-weight: bolder;
`;


export default Announcement;
