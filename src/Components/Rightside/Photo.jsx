import { Link, NavLink } from "react-router-dom";
import image from './1511557881_kachestvennye-png-na-prozrachnom-fone_-veselye-snegoviki-2.jpg';

const Photo = () => {
  return (
    <div>
      <header>
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/blog" className="link">
          Blog
        </NavLink>
        <NavLink to="/about" className="link">
          About
        </NavLink>
      </header>
      <div className="photo">
        <h1>Photo</h1>
        <p>
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom This is a demo website
          about React-Router-dom This is a demo website about React-Router-dom
          This is a demo website about React-Router-dom
        </p>
        <div className='pic'>
        <img  src={image} alt=""/>
       
        </div>
      </div>
      <div className="button">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <footer>All Rights Reserved 2022-2023</footer>
    </div>
  );
};

export { Photo };
