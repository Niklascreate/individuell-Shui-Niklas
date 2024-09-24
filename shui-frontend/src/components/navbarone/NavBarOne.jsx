import './navbarone.css'


function NavBarOne({ sendPublish }) {
  return (
    <nav className='nav-wrapper'>
      <p className='all-posts' onClick={sendPublish} >Publicera nytt inlägg</p>
    </nav>
  );
}

export default NavBarOne;