import './header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to='/Flow'>
    <header className='header-container'>
        <h1 className='header-title'><span>K</span><span>l</span><span>a</span><span>g</span><span>o</span><span>m</span><span>u</span><span>r</span><span>e</span><span>n</span></h1>
    </header>
    </Link>
  )
}

export default Header