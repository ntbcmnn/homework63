const Contacts = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="mb-4">Contact info</h1>

      <div className="d-flex flex-column rounded-4 bg-dark p-4 gap-4 w-auto">
        <p className="d-inline-flex gap-2 fs-5 text-light m-0 p-0">
          <i className="bi bi-geo-alt"></i>
          Lorem st., 576 Building
        </p>

        <a href="#" className="text-decoration-none d-inline-flex gap-2 fs-5 custom-link">
          <i className="bi bi-telephone"></i>
          Hotline
        </a>

        <a href="#" className="text-decoration-none d-inline-flex gap-2 fs-5 custom-link">
          <i className="bi bi-whatsapp"></i>
          W/A
        </a>

        <a href="#" className="text-decoration-none d-inline-flex gap-2 fs-5 custom-link">
          <i className="bi bi-instagram"></i>
          Follow us
        </a>
      </div>
    </div>
  );
};

export default Contacts;