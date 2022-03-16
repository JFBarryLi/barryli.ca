import NavBar from 'components/NavBar';
import PageHeader from 'components/PageHeader';

const ContactPage = () => (
  <div sx={{
    display: 'block',
    width: '100%',
    height: '100%',
  }}>
    <NavBar />
    <PageHeader text='Contact' />
  </div>
);

export default ContactPage;
