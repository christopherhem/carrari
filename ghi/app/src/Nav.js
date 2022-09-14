import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
        Carrari
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-tabs"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto mb-5 mb-lg-1">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    to="appointments/"
                  >
                    Service Appointments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    to="appointments/new/"
                  >
                    Register an Appointment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="dropdown-item"
                    to="appointments/history/"
                  >
                    Service History
                  </NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="technicians/new">
                    Register a Technician
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sales
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales">
                    List of All Sales
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customer">
                    List of Customers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salesperson">
                    List of Salepersons
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/history">
                    List of Salesperson's history
                  </NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/customer/new/">
                    Create a New Customer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/sales/new">
                    Create a New Sale
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/salesperson/new/">
                    Create a New Salesperson
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Inventory
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers">
                    Manufacturers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/manufacturers/new">
                    Add a Manufacturer
                  </NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models">
                    Vehicle Models
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/models/new">
                    Add a Vehicle Model
                  </NavLink>
                </li>
                <div className="dropdown-divider"></div>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles">
                    Automobiles
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item" to="/automobiles/new">
                    Add an Automobile
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  )
}

export default Nav;






