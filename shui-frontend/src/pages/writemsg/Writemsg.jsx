import { useState } from 'react';
import axios from 'axios';
import './Writemsg.css';
import { useNavigate } from 'react-router-dom';
import NavBarTwo from '../../components/navbartwo/NavBarTwo'


function Writemsg() {
  const navigate = useNavigate();
  const [content, setContent] = useState(''); // State för postens innehåll
  const [alias, setAlias] = useState('');     // State för användarnamn
  const [message, setMessage] = useState(''); // State för fel-/framgångsmeddelande


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      inlagg: content,
      alias: alias
    };

    try {
      const response = await axios.post('https://g7jux13pha.execute-api.eu-north-1.amazonaws.com/post', newPost);
      setMessage('Inlägget har skickats!');
      setContent('');
      setAlias('');
      navigate('/')
    } catch (error) {
      setMessage('Kunde inte skicka inlägget. Försök igen.');
    }
  };

  return (
    <section className="container-wrapper">
      <form className='form-box' onSubmit={handleSubmit}>
      <label className='label-boxOne'>
          <input className='input-alias'
            type="text"
            placeholder="Användarnamn"
            value={alias}
            onChange={(e) => setAlias(e.target.value)} // Uppdaterar state för användarnamn
          />
        </label>
          <textarea className='textarea-post'
            type="text"
            placeholder='Skriv ny post här'
            value={content}
            onChange={(e) => setContent(e.target.value)} // Uppdaterar state för innehåll
          />
      </form>
      {/* Meddelande efter POST-anrop */}
      {message && <p>{message}</p>}
      <NavBarTwo />
    </section>
  );
}

export default Writemsg;