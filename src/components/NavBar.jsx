export default function NavBar() {
  return (
    <nav className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-white">
      <button className="btn fs-4 p-0" aria-label="Menu">☰</button>

      <span className="fs-3 fw-semibold">⬡ framework</span>

      <div className="d-flex gap-3 fs-4">
        <span role="img" aria-label="Account"></span>
        <span role="img" aria-label="Cart"></span>
      </div>
    </nav>
  );
}