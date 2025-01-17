import { NavLink } from 'react-router-dom';

const HeaderNavigationBar = () => {
  return (
    <section className="header-navigation-bar">
      <nav className="navbar navbar-expand-lg bg-body-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              backgroundColor: '#5233',  /* Darker background */
              border: '1px solid #222' /* Darker border */
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link')}
                  style={({ isActive }) => ({
                    color: isActive ? '' : '#111',
                    textAlign: 'left',
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link')}
                  style={({ isActive }) => ({
                    color: isActive ? '' : '#111',
                    textAlign: 'left',
                  })}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/resources"
                  className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link')}
                  style={({ isActive }) => ({
                    color: isActive ? '' : '#111',
                    textAlign: 'left',
                  })}
                >
                  Resources
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contactUs"
                  className={({ isActive }) => (isActive ? 'nav-link active fw-bold' : 'nav-link')}
                  style={({ isActive }) => ({
                    color: isActive ? '' : '#111',
                    paddingBottom: '40px',
                    textAlign: 'left',
                  })}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default HeaderNavigationBar;
