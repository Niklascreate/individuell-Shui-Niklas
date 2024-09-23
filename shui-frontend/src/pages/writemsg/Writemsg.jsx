import { useState } from 'react';
import axios from 'axios';
import './Writemsg.css';
import { useNavigate, useParams } from 'react-router-dom'; // Lägg till useParams här
import NavBarOne from '../../components/navbarone/NavBarOne';

function Writemsg() {
  const navigate = useNavigate();
  const { id } = useParams(); // Korrigera syntaxen här
  const [newInlagg, setNewInlagg] = useState('');
  const [newAlias, setNewAlias] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post', {
        alias: newAlias,
        inlagg: newInlagg
      });
      console.log('svar från server:', response.data);
      navigate('/Flow');
    } catch (error) {
      console.log('Något gick fel', error);
    }
  };

  const handlePost = async (e) => {
    e.preventDefault();
    
  };

  return (
    <section className="container-wrapper">
      <form className='form-box' onSubmit={id ? handlePost : handleFormSubmit}>
        <label className='label-boxOne'>
          <input
            className='input-alias'
            type="text"
            placeholder="Alias"
            value={newAlias}
            onChange={(e) => setNewAlias(e.target.value)}
          />
        </label>
        <textarea
          className='textarea-post'
          placeholder='Skriv ny post här'
          value={newInlagg}
          onChange={(e) => setNewInlagg(e.target.value)}
        />
      </form>
      <NavBarOne sendPublish={id ? handlePost : handleFormSubmit} />
    </section>
  );
}

export default Writemsg;
