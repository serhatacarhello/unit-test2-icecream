function Header() {
  return (
    <div className="container-full bg-white bg-opacity-50">
      <header className="header d-flex flex-wrap justify-content-center py-3 mb-4 shadow">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Marash-Icecream</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Features
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <button
              role="link"
              className="nav-link bg-info opacity-75 text-white border-2 border-success border me-1"
            >
              Sign up
            </button>
          </li>
          <li className="nav-item ">
            <button
              role="link"
              className="nav-link bg-body opacity-75 border-2  border-primary border me-2"
            >
              Sign in
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
