import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  let [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Nav cartCount={cartCount}></Nav>
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}
      <Section setCartCount={setCartCount} cartCount={cartCount} />
      {/* <!-- Footer--> */}
      <Footer />
      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
    </div>
  );
}

export default App;
