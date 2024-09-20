import './navbarone.css';
import { Link } from 'react-router-dom';

function NavBarOne() {
  return (
    <nav className='nav-wrapper'>
      <Link className='All-posts' to='/Writemsg'>
        <p>Skriv nytt inlägg</p>
      </Link>
    </nav>
  );
}

export default NavBarOne;