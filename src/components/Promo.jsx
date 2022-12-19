import promo from "../assets/promo.png";
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';

function Promo() {
  const [name, setName] = useState("");
 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(login({
          name : name,
      }));
  }


  return (
    <div className="promo-container">
      <div className="container mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Never Miss a Promo</h2>
            <p>
              We always give our customers a promo for being loyal to us. Just
              subscribe to us:
            </p>
          </div>
          <form className="subscribe-container" onSubmit={(e) => handleSubmit(e)}>
            <input type="email" placeholder="yourname@mail.com" value={name} onChange={(e) => setName(e.target.value)}/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="promo-image">
          <img src={promo} alt="Promo" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
