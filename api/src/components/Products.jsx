import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        let productData = await fetch("http://localhost:3000/products");
        let records = await productData.json();
        setProducts(records);
    };

    let deleteProduct = async (id) => {
        let deleteData = await fetch("http://localhost:3000/products/" + id, {
            method: "delete",
        });
        console.log(deleteData)
        getProducts();
    }

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <Card className="shadow-sm h-100 border-0 rounded-lg overflow-hidden">
                            <div className="position-relative">
                                <Button
                                    variant="danger"
                                    className="position-absolute top-0 end-0 m-2 p-0 rounded-circle"
                                    style={{ width: '25px', height: '25px', fontSize: '14px' }}
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    ×
                                </Button>
                                <Card.Img variant="top" src={product.image} className="p-3" style={{ height: '180px', objectFit: 'contain' }} />
                            </div>
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="text-truncate" title={product.title}>{product.title}</Card.Title>
                                <Card.Text className="text-muted small flex-grow-1">
                                    {product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
                                </Card.Text>
                                <Card.Text className="fw-bold text-primary">${product.price.toFixed(2)}</Card.Text>
                                <Card.Text className="text-muted small">Category: {product.category}</Card.Text>
                                <Button variant="primary" className="mt-auto w-100">Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
