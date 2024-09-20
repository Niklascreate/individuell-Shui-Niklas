import './navbartwo.css';
import { Link } from 'react-router-dom';

function NavBarOne() {
  return (
    <nav className='nav-wrapperTwo'>
      <Link className='All-posts' to='/Flow'>
        <p>Se alla inlägg</p>
        <p>Publicera ny post</p>
      </Link>
    </nav>
  );
}

export default NavBarOne;