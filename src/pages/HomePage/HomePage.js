import styled from 'styled-components';
import NavBar from 'components/NavBar';

const HomePageContainer = styled.div`
  display: block;
    width: 100%;
    height: 100%;
`;

const HomePage = () => (
    <HomePageContainer>
      <NavBar />
    </HomePageContainer>
);

export default HomePage;
