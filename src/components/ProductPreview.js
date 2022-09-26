import React from 'react';
import "../styles/ProductPreview.css";

export default function ProductPreview() {
  return (
    <div className="product-preview">
      <div className="body-details">
        <div className="product-container">
          <div className="product-img-container">""</div>
          <div className="product-content-container">
            <p className="product-category">PERFUME</p>
            <h1 className="product-title">Gabrielle Essence Eau De Parfum</h1>
            <p className="product-details">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="product-price-container">
              <h2 className="current-price">$149.99</h2>
              <p className="orig-price">$169.99 </p>
            </div>

            <button className="add-btn">
              <svg
                className="sample"
                width="15"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
              <span className="btn-txt">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-details-container">
          <p className="footer-name">© Frontend Mentor 2019 - 2022</p>
          <div className="footer-info">
            <p>Challenge by: Frontend Mentor </p>
            <span></span>
            <p>Coded by: Mary Nicole L. Permejo</p>
        </div>
        </div>
        
      </div>
    </div>
  );
}
