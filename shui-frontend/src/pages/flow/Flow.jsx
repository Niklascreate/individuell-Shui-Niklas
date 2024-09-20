import { Link } from 'react-router-dom';
import Msgbtn from '../../components/msgbtn/Msgbtn';
import './flow.css';



function Flow() {



  return (
    <div className='container-wrapper'>
        <section className='box-one'>
            <p className="time">3 nov, 09:23</p>
            <p className="content">Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.</p>
            <p className="alias">Snodden</p>
        </section>
        <footer className='postbutton-container'>
          <Link to='/WriteMsg'>
            <Msgbtn />
          </Link>
        </footer>
    </div>
  )
}

export default Flow