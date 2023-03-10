import React, { useState, useEffect } from "react";
import commerce from "./lib/commerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import About from "./About";
import ProductPage from "./ProductPage";

const App = () => {
  //Here is the product list data :)
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
  ];

  return (
    <>
      <Router>
        <NavBar navItems={navItems} />
        <Switch>
          <Route exact path="/">
            <Home productData={products} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
        </Switch>
        <Footer navItems={navItems} />
      </Router>
    </>
  );
};

export default App;
