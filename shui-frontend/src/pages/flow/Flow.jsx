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
    axios.delete(`https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post/${id}`)
      .then(response => {
        if(response.status === 200) { // Kontrollerar om raderingen lyckades
          const updatedInlagg = inlagg.filter(post => post.id !== id);
          setInlagg(updatedInlagg); // Uppdaterar inlägg till att inte inkludera det raderade inlägget
        }
      })
      .catch(error => console.error('Något gick fel vid radering:', error));
  }

  const handlePost = (id) => {
    axios.put(`https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post/${id}`)
      .then(response => {
        if(response.status === 200) {
          const updatedInlagg = inlagg.filter(post => post.id !== id);
          setInlagg(updatedInlagg);
        }
      })
      .catch(error => console.error('Något gick fel vid uppdatering av meddelandet.', error));
  }


  return (
    <div className='container-wrapper'>
      {inlagg.length === 0 ? ( // Kontrollera om det finns några inlägg
        <h3 className='welcome-text'>Välkommen att skapa ditt första inlägg!</h3> // Visa meddelandet om inga inlägg finns
      ) : (
        inlagg.map((post) => (
          <section className='box-one' key={post.id}>
            <article className='box-update'><ChangeBtn /> <span onClick={() => handleDelete(post.id)} className='close'>X</span> </article>
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