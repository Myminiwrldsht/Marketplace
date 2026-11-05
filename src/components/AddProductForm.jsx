import { useState } from "react";

const emptyForm = {
  name: "",
  description: "",
  price: "",
  image: "",
  available: true,
};

function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState(emptyForm);

  function handleFormChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name.trim() === "") return;

    onAddProduct({ ...formData, price: Number(formData.price) || 0 });
    setFormData(emptyForm);
  }

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4">
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label" htmlFor="name">
            Product name
          </label>
          <input
            id="name"
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label" htmlFor="price">
            Price
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleFormChange}
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="image">
            Image URL (optional)
          </label>
          <input
            id="image"
            type="text"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleFormChange}
          />
        </div>
        
        <div className="col-12 form-check ms-2">
          <input
            id="available"
            type="checkbox"
            className="form-check-input"
            name="available"
            checked={formData.available}
            onChange={handleFormChange}
          />
          <label className="form-check-label" htmlFor="available">
            Available
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-sm mt-3 align-self-start">
        Add Product
      </button>
    </form>
  );
}

export default AddProductForm;
