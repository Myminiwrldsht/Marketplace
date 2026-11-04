export function AddButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      className="btn-solid theme-primary"
      onClick={onClick}
      disabled={disabled}
    >
      Add Product
    </button>
  );
}

export function RemoveButton({ onClick, disabled }) {
  return (
    <button
      type="button"
      className="btn-solid theme-success"
      onClick={onClick}
      disabled={disabled}
    >
      Remove Product
    </button>
  );
}