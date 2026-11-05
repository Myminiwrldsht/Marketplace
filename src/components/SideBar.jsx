const categories = [
  { id: 1, name: "View all", count: 668 },
  { id: 2, name: "Framework Laptop", count: 21 },
  { id: 3, name: "Mainboards", count: 35 },
  { id: 4, name: "Expansion Cards", count: 48 },
  { id: 5, name: "Keyboards", count: 267 },
];

export default function Sidebar() {
  return (
    <div className="p-3">
      <input className="form-control mb-2" type="text" placeholder="Search" />
      <p className="text-muted small">668 results</p>

      <h6 className="mt-4">Categories</h6>
      <ul className="list-group list-group-flush">
        {categories.map((category) => (
          <li
            key={category.id}
            className="list-group-item d-flex justify-content-between"
          >
            <span>{category.name}</span>
            <span>{category.count}</span>
          </li>
        ))}
      </ul>

      <h6 className="mt-4">Sort by</h6>
      <select className="form-select">
        <option>Featured</option>
        <option>Price: low to high</option>
        <option>Price: high to low</option>
      </select>
    </div>
  );
}