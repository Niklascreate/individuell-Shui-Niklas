import './changebtn.css';
import { useNavigate } from 'react-router-dom';

function ChangeBtn({ postId }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/writemsg/${postId}`);
  }

  return (
    <button className='change-btn' onClick={handleClick}>Redigera inlägg</button>
  );
}

export default ChangeBtn;
