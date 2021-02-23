import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "Photoshopa", price: "$90" },
    { name: "PDF Reder", price: "$6.99" },
    { name: "Html ", price: "$5.99" },
    { name: "Web Development", price: "$6.99" },
  ];
  function Product(props) {
    const productStyle = {
      border: "1px solid gray",
      borderRadius: "5px",
      backgroundColor: "lightblue",
      height: "200px",
      width: "200px",
      textAlign: "center",
    };
    const { name, price } = props.product;
    return (
      <dir style={productStyle}>
        <h3>Name :{name} </h3>
        <h2>{price}</h2>
        <button>Buy Now</button>
      </dir>
    );
  }

  function Person(props) {
    return (
      <div
        style={{ border: "2px solid yellow", padding: "10px", margin: "10px" }}
      >
        <h>{props.name}</h>
        <h2>{props.job}</h2>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        {products.map((prod) => (
          <Product product={prod}></Product>
        ))}

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product> */}
        <p>I am a react person</p>
        <Person name="Rakib Hosen" job="Software Engineer"></Person>
        <Person name="Faysal Ahmed" job="Networing Engineer"></Person>
      </header>
    </div>
  );
}

export default App;
