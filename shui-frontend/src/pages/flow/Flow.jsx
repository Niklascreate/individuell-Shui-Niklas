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
        <section className='box-one'>
            <p className="time">måndag 3 Nov, 12:21</p>
            <p className="content">ICA Trumpenten har stängt, jag repeterar. ICA Trumpenten har spelat sitt susta tut! Var försiktiga där ute, detta håller på att balla ur!</p>
            <p className="alias">Fagotten</p>
        </section>
        <footer className='postbutton-container'>
          <Msgbtn />
        </footer>
    </div>
  )
}

export default Flow