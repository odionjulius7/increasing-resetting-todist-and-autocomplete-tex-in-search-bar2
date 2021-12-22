const Header = ({ counters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        {" "}
        <span className="navbar-brand mb-0 h1">
          Navbar{" "}
          <span className="badge bg-secondary">
            {/* {counters.filter((c) => c.value > 0).length} */}
          </span>
        </span>
      </div>
    </nav>
  );
};

export default Header;
