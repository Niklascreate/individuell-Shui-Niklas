import { useEffect, useState } from 'react';
import axios from 'axios';
import './flow.css';
import NavBarTwo from '../../components/navbartwo/NavBarTwo';
import ChangeBtn from '../../components/changebtn/changeBtn';

function Flow() {
  const [inlagg, setInlagg] = useState([]);

  useEffect(() => {
    const fetchInlagg = async () => {
      try {
        const response = await axios.get('https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/posts');
        setInlagg(response.data); // antar att responsen är en lista med inlägg
      } catch (error) {
        console.error('Fel vid hämtning av inlägg:', error);
      }
    };

    fetchInlagg();
  }, []); // Tom beroendelista innebär att effekten körs en gång vid montering

const handleDelete = (id) => {
  console.log('Tog bort ett inlägg:', id)
  axios.delete
}

  return (
    <div className='container-wrapper'>
      {inlagg.length === 0 ? ( // Kontrollera om det finns några inlägg
        <h3 className='welcome-text'>Välkommen att skapa ditt första inlägg!</h3> // Visa meddelandet om inga inlägg finns
      ) : (
        inlagg.map((post) => (
          <section className='box-one' key={post.id}>
            <article className='box-update'><ChangeBtn /> <span className='close'>X</span> </article>
            <p className="time">{post.tid}</p>
            <p className="content">{post.inlagg}</p>
            <p className="alias">{post.alias}</p>
          </section>
        ))
      )}
      <NavBarTwo />
    </div>
  );
}

export default Flow;