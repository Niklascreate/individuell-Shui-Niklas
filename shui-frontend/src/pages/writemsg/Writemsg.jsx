import { useState, useEffect } from 'react';
import axios from 'axios';
import './Writemsg.css';
import { useNavigate, useParams } from 'react-router-dom'; 
import NavBarOne from '../../components/navbarone/NavBarOne';

function Writemsg() {
  const navigate = useNavigate();
  const { id } = useParams(); // Hämta post-ID från URL:en
  const [newInlagg, setNewInlagg] = useState('');
  const [newAlias, setNewAlias] = useState('');

  // Hämta befintlig post om det finns ett ID
  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/posts/${id}`);
          setNewAlias(response.data.alias);
          setNewInlagg(response.data.inlagg);
        } catch (error) {
          console.log('Kunde inte hämta posten', error);
        }
      };
      fetchPost();
    }
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      handleUpdatePost();
    } else {
      try {
        const response = await axios.post('https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post', {
          alias: newAlias,
          inlagg: newInlagg,
        });
        console.log('Post skapad:', response.data);
        navigate('/Flow');
      } catch (error) {
        console.log('Något gick fel vid skapande', error);
      }
    }
  };

  // Ny funktion för att uppdatera en befintlig post
  const handleUpdatePost = async () => {
    try {
      const response = await axios.put(`https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/posts/${id}`, {
        alias: newAlias,
        inlagg: newInlagg,
      });
      console.log('Post uppdaterad:', response.data);
      navigate('/Flow');
    } catch (error) {
      console.log('Något gick fel vid uppdatering', error);
    }
  };

  return (
    <section className="container-wrapper">
      <form className="form-box" onSubmit={handleFormSubmit}>
        <label className="label-boxOne">
          <input
            className="input-alias"
            type="text"
            placeholder="Alias"
            value={newAlias}
            onChange={(e) => setNewAlias(e.target.value)}
          />
        </label>
        <textarea
          className="textarea-post"
          placeholder="Skriv ny post här"
          value={newInlagg}
          onChange={(e) => setNewInlagg(e.target.value)}
        />
      </form>
      <NavBarOne sendPublish={handleFormSubmit} />
    </section>
  );
}

export default Writemsg;