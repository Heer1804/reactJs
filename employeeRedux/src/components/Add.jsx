import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Add() {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    email: "",
    hobbies: [],
    city: "",
    password: "",
    image: "",
    role: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getInput = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    setError("");
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setEmployee({ ...employee, image: reader.result });
      };
      setError("");
    }
  };

  const handleHobbies = (e) => {
    const { value, checked } = e.target;
    setEmployee((prev) => ({
      ...prev,
      hobbies: checked
        ? [...prev.hobbies, value]
        : prev.hobbies.filter((hobby) => hobby !== value),
    }));
    setError("");
  };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee));
    navigate("/");
  };

  return (
    <Container
      fluid
      className="vh-100 vw-100 d-flex mt-5 flex-column align-items-center justify-content-center p-0 m-0"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        paddingTop: "80px", // Offset for fixed navbar
        paddingBottom: "20px",
      }}
    >
      <Card
        className="border-0 rounded-3 shadow-sm w-100"
        style={{
          maxWidth: "500px", // Slightly reduced for compactness
          backgroundColor: "#ffffff",
        }}
      >
        <Card.Body className="p-4">
          <h3
            className="text-center mb-4"
            style={{ color: "#343a40", fontWeight: "600", fontSize: "1.75rem" }}
          >
            Add Employee
          </h3>
          {error && (
            <Alert variant="danger" className="rounded-3 mb-3" style={{ fontSize: "0.9rem" }}>
              {error}
            </Alert>
          )}
          <Form onSubmit={submitData}>
            <Row className="g-2"> {/* Reduced gap for compactness */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    placeholder="Enter name"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    placeholder="Enter email"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={employee.password}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    placeholder="Enter password"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Age
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={employee.age}
                    onChange={getInput}
                    min="18"
                    max="100"
                    required
                    className="rounded-3"
                    placeholder="Enter age"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    City
                  </Form.Label>
                  <Form.Select
                    name="city"
                    value={employee.city}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  >
                    <option value="">Select a city</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Role
                  </Form.Label>
                  <Form.Select
                    name="role"
                    value={employee.role}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  >
                    <option value="">Select a role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="Analyst">Analyst</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    required
                    className="rounded-3"
                    style={{
                      borderColor: "#20c997",
                      backgroundColor: "#e6fcf5",
                      fontSize: "0.9rem",
                      padding: "8px",
                    }}
                  />
                  {employee.image && (
                    <div className="mt-2 text-center">
                      <img
                        src={employee.image}
                        alt="Preview"
                        className="rounded-circle shadow-sm"
                        style={{
                          width: "50px", // Reduced size for compactness
                          height: "50px",
                          objectFit: "cover",
                          border: "2px solid #20c997",
                        }}
                      />
                    </div>
                  )}
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500", fontSize: "0.9rem" }}>
                    Hobbies
                  </Form.Label>
                  <Row className="g-2">
                    {["Music", "Reading", "Coding", "Dancing"].map((hobby) => (
                      <Col xs={6} key={hobby}>
                        <Form.Check
                          type="checkbox"
                          label={hobby}
                          value={hobby}
                          checked={employee.hobbies.includes(hobby)}
                          onChange={handleHobbies}
                          style={{ color: "#343a40", fontSize: "0.9rem" }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              className="w-100 mt-3 rounded-3"
              style={{
                backgroundColor: "#20c997",
                borderColor: "#20c997",
                fontWeight: "600",
                padding: "10px",
                color: "#fff",
                fontSize: "1rem",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1ba87c")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#20c997")}
            >
              Add Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Add;