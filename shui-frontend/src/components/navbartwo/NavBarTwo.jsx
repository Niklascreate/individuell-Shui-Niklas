import './navbartwo.css';
import { Link } from 'react-router-dom';

function NavBarTwo() {
  return (
    <nav className='nav-wrapper'>
      <Link className='All-posts' to='/Writemsg'>
      <p>Skapa nytt inlägg</p>
      </Link>
    </nav>
  );
}

export default NavBarTwo;