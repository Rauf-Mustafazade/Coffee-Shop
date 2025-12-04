// src/pages/Shop/Shop.jsx
import React, { useState } from 'react';
import './Shop.css';
import products from './ShopApi';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availability, setAvailability] = useState('all'); // all | in | out
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 👇 ДОБАВЛЕНО — сколько показывать карточек
  const [visibleCount, setVisibleCount] = useState(5);

  // Фильтрация карточек
  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase().trim();

    const matchesSearch =
      term === '' ||
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term);

    const matchesAvailability =
      availability === 'all' ||
      (availability === 'in' && product.inStock) ||
      (availability === 'out' && !product.inStock);

    const matchesPrice =
      maxPrice === '' || product.price <= Number(maxPrice);

    return matchesSearch && matchesAvailability && matchesPrice;
  });

  // 👇 ДОБАВЛЕНО — видимые карточки
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Если выбран продукт -> показываем “детальную страницу”
  if (selectedProduct) {
    return (
      <section className="shop-detail">
        <button
          className="shop-back-btn"
          onClick={() => setSelectedProduct(null)}
        >
          ← Back to products
        </button>

        <div className="shop-detail-content">
          <div className="shop-detail-image-wrapper">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="shop-detail-image"
            />
          </div>

          <div className="shop-detail-info">
            <h1 className="shop-detail-title">{selectedProduct.title}</h1>

            <p className="shop-detail-description">
              {selectedProduct.description}
            </p>

            <div className="shop-detail-meta">
              <div className="shop-detail-price">
                <span className="shop-detail-price-label">From</span>
                <span className="shop-detail-price-value">
                  Dhs. {selectedProduct.price.toFixed(2)}
                </span>
              </div>

              <span
                className={
                  'shop-badge ' +
                  (selectedProduct.inStock
                    ? 'shop-badge-in'
                    : 'shop-badge-out')
                }
              >
                {selectedProduct.inStock ? 'In stock' : 'Out of stock'}
              </span>
            </div>

            <div className="shop-detail-actions">
              <button className="btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Основная страница с карточками
  return (
    <section className="shop">
      <div className="shop-header">
        <h2 className="shop-title">Our Coffee Selection</h2>
        <p className="shop-subtitle">
          Filter by availability, price or search by name and flavour notes.
        </p>
      </div>

      {/* Панель фильтров */}
      <div className="shop-filters">
        <input
          type="text"
          placeholder="Search by title or description..."
          className="shop-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="shop-filter-group">
          <span className="shop-filter-label">Availability:</span>
          <button
            className={
              'shop-filter-btn ' + (availability === 'all' ? 'is-active' : '')
            }
            onClick={() => setAvailability('all')}
          >
            All
          </button>
          <button
            className={
              'shop-filter-btn ' + (availability === 'in' ? 'is-active' : '')
            }
            onClick={() => setAvailability('in')}
          >
            In stock
          </button>
          <button
            className={
              'shop-filter-btn ' + (availability === 'out' ? 'is-active' : '')
            }
            onClick={() => setAvailability('out')}
          >
            Out of stock
          </button>
        </div>

        <div className="shop-price-filter">
          <span className="shop-filter-label">Max price:</span>
          <input
            type="number"
            className="shop-price-input"
            placeholder="e.g. 100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="shop-grid">
        {filteredProducts.length === 0 && (
          <p className="shop-empty">No products match your filters.</p>
        )}

        {/* 👇 ИЗМЕНЕНО: вместо filteredProducts → visibleProducts */}
        {visibleProducts.map((product) => (
          <article className="shop-card" key={product.id}>
            <div className="shop-card-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="shop-card-image"
              />
            </div>

            <div className="shop-card-body">
              <h3 className="shop-card-title">{product.title}</h3>
              <p className="shop-card-description">{product.description}</p>
            </div>

            <div className="shop-card-footer">
              <div className="shop-card-price">
                <span className="shop-card-price-label">From</span>
                <span className="shop-card-price-value">
                  Dhs. {product.price.toFixed(2)}
                </span>
              </div>

              <span
                className={
                  'shop-badge ' +
                  (product.inStock ? 'shop-badge-in' : 'shop-badge-out')
                }
              >
                {product.inStock ? 'In stock' : 'Out of stock'}
              </span>
            </div>

            <div className="shop-card-actions">
              <button
                className="btn-outline"
                onClick={() => setSelectedProduct(product)}
              >
                View Product
              </button>
              <button className="btn-primary">Add to Cart</button>
            </div>
          </article>
        ))}
      </div>

      {/* 👇 ДОБАВЛЕНА КНОПКА MORE */}
      {visibleCount < filteredProducts.length && (
        <div className="shop-more-wrapper">
          <button
            className="shop-more-btn"
            onClick={() => setVisibleCount(visibleCount + 5)}
          >
            More
          </button>
        </div>
      )}
    </section>
  );
};

export default Shop;
