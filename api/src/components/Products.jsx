import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    getProducts();
  };

  return (
    <Container className="mt-5 pt-5">
      <h2 className="text-center mb-4 fw-bold">Our Products</h2>
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col key={product.id} md={6} className="mb-4">
            <Card className="shadow-lg h-100 border-0 rounded-4 position-relative hover-shadow">
              <Button
                variant="outline-danger"
                className="position-absolute top-0 end-0 m-2 p-0 rounded-circle border-0"
                style={{
                  width: '30px',
                  height: '30px',
                  fontSize: '18px',
                  lineHeight: '1',
                }}
                onClick={() => deleteProduct(product.id)}
                title="Delete Product"
              >
                ×
              </Button>

              <Card.Img
                variant="top"
                src={product.image}
                className="p-3"
                style={{ height: '180px', objectFit: 'contain' }}
              />

              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate fw-semibold" title={product.title}>
                  {product.title}
                </Card.Title>

                <Card.Text className="text-muted small mb-2" style={{ minHeight: '60px' }}>
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </Card.Text>

                <div className="mb-2">
                  <span className="fw-bold text-primary fs-5">${product.price.toFixed(2)}</span>
                </div>

                <Card.Text className="text-muted small">Category: <strong>{product.category}</strong></Card.Text>

                <Button
                  variant="primary"
                  className="mt-auto w-100 rounded-pill fw-semibold"
                  style={{ transition: 'all 0.2s ease-in-out' }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
