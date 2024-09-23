import { useEffect, useState } from 'react';
import axios from 'axios';
import './flow.css';
import NavBarTwo from '../../components/navbartwo/NavBarTwo';
import ChangeBtn from '../../components/changebtn/ChangeBtn';

function Flow() {
  const [inlagg, setInlagg] = useState([]);

  useEffect(() => {
    const fetchInlagg = async () => {
      try {
        const response = await axios.get('https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/posts');
        setInlagg(response.data);
      } catch (error) {
        console.error('Fel vid hämtning av inlägg:', error);
      }
    };

    fetchInlagg();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post/${id}`)
      .then(response => {
        if(response.status === 200) {
          const updatedInlagg = inlagg.filter(post => post.id !== id);
          setInlagg(updatedInlagg);
        }
      })
      .catch(error => console.error('Något gick fel vid radering:', error));
  }

  const handleEdit = (postid) => {
    navigate(`/Writemsg/${postid}`);
  };

  return (
    <div className='container-wrapper'>
      {inlagg.length === 0 ? (
        <h3 className='welcome-text'>Välkommen att skapa ditt första inlägg!</h3>
      ) : (
        inlagg.map((post) => (
          <section className='box-one' key={post.id}>
            <article className='box-update'><ChangeBtn postId={post.id} onClick={() => handleEdit(post.id, post.alias, post.inlagg)} /> 
            <span onClick={() => handleDelete(post.id)} className='close'>X</span> </article>
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