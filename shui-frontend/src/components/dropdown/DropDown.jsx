import './dropdown.css';


function DropDown({ onSortChange }) {
    return (
      <div className="dropdown-btn">
        <select onChange={(event) => onSortChange(event.target.value)}>
          <option value="alias">Sortera efter Alias</option>
          <option value="tid-nyast">Nyast till Äldst</option>
          <option value="tid-aldst">Äldst till Nyast</option>
        </select>
      </div>
    );
  }

export default DropDown