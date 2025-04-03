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
    role: ""
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
        : prev.hobbies.filter((hobby) => hobby !== value)
    }));
    setError("");
  };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(addEmployee(employee)); 
    navigate("/");
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow border-0">
            <Card.Header className="bg-primary text-white text-center">
              <h4>Add New Employee</h4>
            </Card.Header>
            <Card.Body className="p-4 bg-light">
              {error && (
                <Alert variant="danger" className="mb-4 rounded-3">
                  {error}
                </Alert>
              )}
              <Form onSubmit={submitData}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={employee.name} onChange={getInput} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" value={employee.email} onChange={getInput} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" value={employee.password} onChange={getInput} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" name="age" value={employee.age} onChange={getInput} min="18" max="100" required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Select name="city" value={employee.city} onChange={getInput} required>
                    <option value="">Select a city</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Pune">Pune</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control type="file" accept="image/*" onChange={handleImage} required />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Role</Form.Label>
                  <Form.Select name="role" value={employee.role} onChange={getInput} required>
                    <option value="">Select a role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="Analyst">Analyst</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Hobbies</Form.Label>
                  <Row>
                    <Col>
                      <Form.Check type="checkbox" label="Music" value="Music" checked={employee.hobbies.includes("Music")} onChange={handleHobbies} />
                      <Form.Check type="checkbox" label="Reading" value="Reading" checked={employee.hobbies.includes("Reading")} onChange={handleHobbies} />
                    </Col>
                    <Col>
                      <Form.Check type="checkbox" label="Coding" value="Coding" checked={employee.hobbies.includes("Coding")} onChange={handleHobbies} />
                      <Form.Check type="checkbox" label="Dancing" value="Dancing" checked={employee.hobbies.includes("Dancing")} onChange={handleHobbies} />
                    </Col>
                  </Row>
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-4 py-2 rounded-3"
                >
                  Add Employee
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Add;
