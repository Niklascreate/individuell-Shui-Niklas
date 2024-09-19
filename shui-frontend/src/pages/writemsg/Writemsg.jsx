import './Writemsg.css';

function Writemsg() {
  return (
    <section className="container-wrapper">
      <form className='form-box'>
         <label>
          <input className='input'type="text" placeholder='Skriv ny post här' />
         </label>
         <label>
         <input type="text" placeholder="Användarnamn" />
         </label>
        </form>
    </section>
  );
}

export default Writemsg;