//import { AddButton, RemoveButton } from "./Button.jsx";

export default function ProductCard(props) {
  return (
    <div className="card h-100 border-0">
      <img
        src={props.image}
        className="card-img-top rounded"
        alt={props.name}
        style={{ height: "300px", objectFit: "cover", opacity: props.available ? 1 : 0.4 }}
      />

      <div className="card-body px-0">
        <h6 className="card-title">{props.name}</h6>

        {props.available ? (
          <p className="text-muted">Starting at {props.price}</p>
        ) : (
          <p className="text-danger fw-bold">Not available</p>
        )}

        <button className="btn btn-dark btn-sm me-auto" 
        disabled={!props.available}
        onClick={props.onAdd}
      >
        Add to Cart
      </button>

      </div>
    </div>
  );
}