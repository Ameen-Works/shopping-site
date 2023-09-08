import React from "react";
import ProductCard from "./ProductCard";

function Section({ setCartCount, cartCount }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Fancy Product"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Special Item"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Popular Item"
            productPrice="$40.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Sale Item"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Product Item"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Sale Item"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Fancy Product"
            productPrice="$80.00 - $180.00"
          />
          <ProductCard
            setCartCount={setCartCount}
            cartCount={cartCount}
            productName="Popular Item"
            productPrice="$40.00"
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
