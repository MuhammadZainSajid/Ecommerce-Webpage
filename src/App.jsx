import ProductList from "./components/productList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>eCommerce Store</h2>
        <nav>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
}

export default App;
