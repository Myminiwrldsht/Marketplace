export default function Cart (props) {
  return (
    <div className="p-3 border-start h-100">
      <h5>Cart ({props.items.length})</h5>
      {props.items.length === 0 ? (
        <p className="text-muted">Your cart is empty</p>
      ) : (
        <ul className="list-group list-group-flush">
          {props.items.map((item) => (
            <li key={item.id} className="list-group-item px-0 d-flex align-items-center gap-2">
              <img
                src={item.image}
                alt={item.name}
                className="rounded"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div className="flex-grow-1">
                <div className="small">{item.name}</div>
                <div className="text-muted small">{item.price}</div>
              </div>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => props.onRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}