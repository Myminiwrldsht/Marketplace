import {useState} from "react";
import Cart from "./components/Cart.jsx";


import productImage1 from "./assets/frameworklaptop12.webp"
import productImage2 from "./assets/frameworklaptop12diy.webp"
import productImage3 from "./assets/frameworklaptop13pro.webp"
import productImage4 from "./assets/frameworklaptop13prodiy.webp"
import productImage5 from "./assets/frameworklaptop16.webp"
import productImage6 from "./assets/frameworklaptop16diy.webp"
import productImage7 from "./assets/frameworklaptop12diy(13thgen).webp"
import productImage8 from "./assets/frameworklaptop13diyedition.webp"


import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/SideBar.jsx";
import ProductCard from "./components/ProductCard.jsx";


const products = [
  { id: 1, name: "Framework Laptop 13 Pro DIY Edition (Intel® Core™ Ultra Series 3)", price: "$1,199", available: true, image: productImage4 },
  { id: 2, name: "Framework Laptop 13 Pro (AMD Ryzen™ AI 300 Series)", price: "$2,299", available: true, image: productImage1 },
  { id: 3, name: "Framework Laptop 13 Pro (Intel® Core™ Ultra Series 3)", price: "$1,599", available: false, image: productImage3 },
  { id: 4, name: "Framework Laptop 16 (AMD Ryzen™ AI 300 Series)", price: "$1,839", available: true, image: productImage5 },
  { id: 5, name: "Framework Laptop 16 DIY Edition (AMD Ryzen™ AI 300 Series)", price: "$1,249", available: true, image: productImage6 },
  { id: 6, name: "Framework Laptop 12 DIY Edition (13th Gen Intel® Core™)", price: "$499", available: false, image: productImage2 },
  { id: 7, name: "Framework Laptop 12 DIY Edition (13th Gen Intel® Core™)", price: "$499", available: false, image: productImage7 },
  { id: 8, name: "Framework Laptop 13 DIY Edition (Intel® Core™ Ultra Series 3)", price: "$1,199", available: true, image: productImage8 },
];

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    if (cart.some((item) => item.id === product.id)) return;
    setCart([...cart, product]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <>
      <NavBar />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <Sidebar />
          </div>

          <div className="col-md-9 col-lg-10 p-4">
            <h2>
              Framework Laptop{" "}
              <small className="text-muted fs-6">/ {products.length} items</small>
            </h2>

            <div className="row row-cols-1 row-cols-md-4 g-8 mt-2">
              {products.map((product) => (
                <div className="col" key={product.id}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    available={product.available}
                    onAdd={() => addToCart(product)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3">
            <Cart items={cart} onRemove={removeFromCart} />
          </div>
        </div>
      </div>
    </>
  );
}
export default App