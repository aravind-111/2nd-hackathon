import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Questions from './qnsblock';

const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const BlueButton = styled(Link)`
  background-color: #378ad3;
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 10px 10px;
  text-decoration: none;
  height: 10px;
  margin-top: 1rem;
`;

function MainPage() {
  return (
    <>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <BlueButton>Ask&nbsp;Questions</BlueButton>
      </HeaderRow>
      <Questions />
      <Questions />
      <Questions />
      <Questions />
      <Questions />
      <Questions />
    </>
  );
}

export default MainPage;
