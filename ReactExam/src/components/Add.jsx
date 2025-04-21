import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Add() {
  // Initial form state
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    image: '',
  });

  // Retrieve existing data from localStorage
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('formdataList');
    return saved ? JSON.parse(saved) : [];
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
    image: false,
  });

  // Handle input change and track touched fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setTouchedFields((prevTouched) => ({ ...prevTouched, [name]: true }));
    setErrorMessage('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.name.trim().length < 3) {
      setErrorMessage('Please enter a name with at least 3 characters.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!/^\d+$/.test(formData.phone)) {
      setErrorMessage('Phone number should contain only digits.');
      return;
    }

    if (!formData.image.trim()) {
      setErrorMessage('Image URL is required.');
      return;
    }

    // Create a new entry
    const newEntry = {
      ...formData,
      id: Date.now().toString(),
      status: true,
    };

    const updatedEntries = [...entries, newEntry];
    setEntries(updatedEntries);
    localStorage.setItem('formdataList', JSON.stringify(updatedEntries));

    // Reset form
    setFormData({ id: '', name: '', email: '', phone: '', image: '' });
    setTouchedFields({ name: false, email: false, phone: false, image: false });
    setErrorMessage('');
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm border-0 rounded-3">
            <Card.Body className="p-4">
              <h2 className="text-center mb-4 fw-bold">Add a New Data</h2>

              {errorMessage && (
                <Alert variant="danger" className="rounded-3 text-center">
                  {errorMessage}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label className="fw-semibold">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={touchedFields.name && formData.name.trim().length < 3}
                    className="rounded-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    Name must be at least 3 characters long.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="email" className="mb-3">
                  <Form.Label className="fw-semibold">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={touchedFields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
                    className="rounded-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="phone" className="mb-3">
                  <Form.Label className="fw-semibold">Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={touchedFields.phone && !/^\d+$/.test(formData.phone)}
                    className="rounded-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    Phone number must contain only digits.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="image" className="mb-4">
                  <Form.Label className="fw-semibold">Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    isInvalid={touchedFields.image && !formData.image.trim()}
                    className="rounded-3"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid image URL.
                  </Form.Control.Feedback>
                </Form.Group>

                {formData.image && (
                  <div className="mb-4 text-center">
                    <p className="fw-medium mb-2">Image Preview:</p>
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="img-fluid rounded-3 border"
                      style={{ maxHeight: '100px' }}
                    />
                  </div>
                )}

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="dark"
                    className="rounded-3 px-4 py-2 fw-semibold"
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;
