import React, { useState } from "react";

function ProductCard({ productName, productPrice, cartCount, setCartCount }) {
  let [added, setadded] = useState(false);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        {(productName === "Popular Item" || productName === "Special Item") && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        {/* <!--Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!--Product name--> */}
            <h5 className="fw-bolder">{productName}</h5>
            {/* <!--Product reviews--> */}
            {(productName === "Popular Item" ||
              productName === "Special Item") && (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            )}

            {/* <!--Product price--> */}
            {(productName === "Popular Item" ||
              productName === "Special Item") && (
              <div>
                <span className="text-muted text-decoration-line-through">
                  $50.00
                </span>
                $25.00
              </div>
            )}
            {productName !== "Popular Item" && productName !== "Special Item"
              ? productPrice
              : ""}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              href="#"
              onClick={() => {
                !added
                  ? setCartCount(cartCount + 1)
                  : setCartCount(cartCount - 1);
                setadded(!added);
              }}
            >
              {added ? "Remove From Cart" : " Add To Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
