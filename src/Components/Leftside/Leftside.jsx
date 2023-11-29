import { NavLink } from "react-router-dom";
import './Leftside.css'



const Leftside = () => {
  return (
    <div className="leftside">
      <ul className='title-left'>
    <li><NavLink to="/building" className="link-l">
        Building
      </NavLink></li> 
      <li><NavLink to="/house" className="link-l">
        House
      </NavLink></li>
      <li><NavLink to="/flat" className="link-l">
        Flat
      </NavLink></li>
</ul>
    </div>
  );
};

export { Leftside };
