import { Link } from 'react-router-dom';

const TopPanel = () => {
  return (
    <>
      <Link style={{ marginRight: 20 }} to={'/'}>
        Home
      </Link>
      <Link to={'/products'}>products</Link>
    </>
  );
};

export default TopPanel;
