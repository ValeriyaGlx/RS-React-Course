import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h2>Oh dear. Are you lost?</h2>
      <Link to="/">Go to Main</Link>
    </>
  );
};

export default NotFound;
