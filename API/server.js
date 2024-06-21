import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy product data (you'll replace this with your own database later)
let products = [
  { id: 1, title: "Product 1", price: 10.99 },
  { id: 2, title: "Product 2", price: 19.99 },
  { id: 3, title: "Product 3", price: 5.99 },
  { id: 4, title: "Product 4", price: 15.99 },
  { id: 5, title: "Product 5", price: 8.99 },
  { id: 6, title: "Product 6", price: 12.99 },
  { id: 7, title: "Product 7", price: 42.99 },
  { id: 8, title: "Product 8", price: 23.99 },
  { id: 9, title: "Product 9", price: 4.99 },
  { id: 10, title: "Product 10", price: 6.99 },
  { id: 11, title: "Product 11", price: 18.99 },
  { id: 12, title: "Product 12", price: 7.99 },
  { id: 13, title: "Product 13", price: 11.99 },
  { id: 14, title: "Product 14", price: 9.99 },
  { id: 15, title: "Product 15", price: 13.99 },
  { id: 16, title: "Product 16", price: 16.99 },
  { id: 17, title: "Product 17", price: 20.99 },
  { id: 18, title: "Product 18", price: 22.99 },
  { id: 19, title: "Product 19", price: 24.99 },
  { id: 20, title: "Product 20", price: 26.99 },
];

// Routes
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/products", (req, res) => {
  const { title, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    title,
    price,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
