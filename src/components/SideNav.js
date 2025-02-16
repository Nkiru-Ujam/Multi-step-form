import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <div>
            <NavLink to="/" className="btnLike">
              1
            </NavLink>
          </div>
          <div className="text">
            <span>Step 1</span>
            <p>Your Info</p>
          </div>
        </li>

        <li>
          <div>
            <NavLink to="plans" className="btnLike">
              2
            </NavLink>
          </div>
          <div className="text">
            <span>Step 2</span>
            <p>select plan</p>
          </div>
        </li>

        <li>
          <div>
            <NavLink to="add-ons" className="btnLike">
              3
            </NavLink>
          </div>
          <div className="text">
            <span>Step 3</span>
            <p>Add-ons</p>
          </div>
        </li>

        <li>
          <div>
            <NavLink to="summary" className="btnLike">
              4
            </NavLink>
          </div>
          <div className="text">
            <span>Step 4</span>
            <p>Summary</p>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;
