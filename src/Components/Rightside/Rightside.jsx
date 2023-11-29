import { NavLink } from "react-router-dom";
import './Rightside.css'


const Rightside = () => {
  return (
    <div className="rightside">
    <ul>
      <li><NavLink to="/history" className="link-r">
       History
      </NavLink></li>
      <li><NavLink to="/Photo" className="link-r">
       Photo
      </NavLink></li>
      <li><NavLink to="/contact" className="link-r">
      Contact
      </NavLink></li>
      </ul>
    </div>
  );
};

export { Rightside };
