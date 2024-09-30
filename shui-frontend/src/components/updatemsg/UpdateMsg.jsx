import { useState } from 'react';
import './updatemsg.css';

function UpdateMsg({ isOpen, onClose, onSubmit, currentAlias, currentInlagg }) {
  const [newAlias, setNewAlias] = useState(currentAlias);
  const [newInlagg, setNewInlagg] = useState(currentInlagg);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newAlias, newInlagg);
  };

  if (!isOpen) return null;

  return (
    <div className="overlay">
      <form onSubmit={handleSubmit}>
        <label>
          Alias:
          <input
            type="text"
            value={newAlias}
            onChange={(e) => setNewAlias(e.target.value)}
          />
        </label>
        <label>
          Inlägg:
          <textarea
            value={newInlagg}
            onChange={(e) => setNewInlagg(e.target.value)}
          />
        </label>
        <button type="submit">Spara</button>
        <button type="button" onClick={onClose}>Avbryt</button>
      </form>
    </div>
  );
}

export default UpdateMsg;