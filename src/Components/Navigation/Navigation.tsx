import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container py-3">
        <NavLink
          to="/"
          className="nav-link navbar-brand text-light"
        >
          Blog
        </NavLink>

        <div className="collapse navbar-collapse ms-auto">
          <div className="navbar-nav ms-auto">
            <NavLink
              to="/"
              className="nav-item nav-link text-light mx-3"
            >
              Home
            </NavLink>

            <NavLink
              to="/posts/new-post"
              className="nav-link nav-item text-light mx-3"
            >
              New post
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link nav-item text-light mx-3"
            >
              About
            </NavLink>

            <NavLink
              to="/contacts"
              className="nav-link nav-item text-light mx-3"
            >
              Contacts
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;