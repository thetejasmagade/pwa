import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="topnav">
        <a class="active" href="#home">Shop</a>
        <a href="#news">About</a>
        <a href="#contact">Contact</a>
        <a href="#about">Privacy Policy</a>
      </div>

      <div class="grid-container">
        <div class="grid-item">
          <div class="card" style={{ margin: "100px" }}>
            <img src="https://images.pexels.com/photos/5384428/pexels-photo-5384428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Denim T-Shirt" style={{ width: "100%" }} />
            <h3>White T-Shirt</h3>
            <p class="price">$19.99</p>
            <p>Some text about the T-Shirt..</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div class="grid-item">
          <div class="card" style={{ margin: "100px" }}>
            <img src="https://images.pexels.com/photos/6311653/pexels-photo-6311653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Denim T-Shirt" style={{ width: "100%" }} />
            <h3>Gray T-Shirt</h3>
            <p class="price">$19.99</p>
            <p>Some text about the T-Shirt..</p>
            <p><button>Add to Cart</button></p>
          </div>
        </div>
        <div class="grid-item"><div class="card" style={{ margin: "100px" }}>
          <img src="https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Denim T-Shirt" style={{ width: "100%" }} />
          <h3>Brown T-Shirt</h3>
          <p class="price">$19.99</p>
          <p>Some text about the T-Shirt..</p>
          <p><button>Add to Cart</button></p>
        </div></div>
      </div>
    </div>
  );
}

export default App;
