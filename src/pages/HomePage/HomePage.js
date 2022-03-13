import styled from 'styled-components';
import NavBar from 'components/NavBar';
import SummaryCard from './components/SummaryCard';

const HomePageContainer = styled.div`
  display: block;
    width: 100%;
    height: 100%;
`;

const HomePage = () => (
    <HomePageContainer>
      <NavBar />
      <SummaryCard />
    </HomePageContainer>
);

export default HomePage;
