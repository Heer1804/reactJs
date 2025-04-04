import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../redux/actions";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Update() {
  const { id } = useParams();
  const empList = useSelector((state) => state.employee || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    const empIndex = parseInt(id, 10);
    if (empList && empList.length > empIndex && empIndex >= 0) {
      const selectedEmployee = empList[empIndex];
      setEmployee({
        ...selectedEmployee,
        hobbies: Array.isArray(selectedEmployee.hobbies)
          ? [...selectedEmployee.hobbies]
          : [],
      });
    } else {
      setError("Employee not found");
      navigate("/");
    }
  }, [empList, id, navigate]);

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
        setEmployee((prev) => ({ ...prev, image: reader.result }));
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
        : prev.hobbies.filter((h) => h !== value),
    }));
    setError("");
  };

  const updateData = (e) => {
    e.preventDefault();
    if (employee.age < 18 || employee.age > 100) {
      setError("Age must be between 18 and 100");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(employee.email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!employee.city) {
      setError("Please select a city");
      return;
    }
    if (employee.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!employee.role) {
      setError("Please select a role");
      return;
    }
    if (!employee.image) {
      setError("Please add an image");
      return;
    }
    if (employee.hobbies.length === 0) {
      setError("Please select at least one hobby");
      return;
    }

    dispatch(updateEmployee({ id: parseInt(id, 10), updatedEmployee: employee }));
    navigate("/");
  };

  const hobbyOptions = ["Music", "Reading", "Coding", "Dancing"];

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        paddingTop: "80px", // Offset for fixed navbar height
        paddingBottom: "20px",
      }}
    >
      <Card
        className="border-0 rounded-3 shadow-sm w-100"
        style={{
          maxWidth: "550px",
          backgroundColor: "#ffffff",
        }}
      >
        <Card.Body className="p-4">
          <h3
            className="text-center mb-4"
            style={{ color: "#343a40", fontWeight: "600" }}
          >
            Update Employee
          </h3>
          {error && (
            <Alert variant="danger" className="rounded-3 mb-4">
              {error}
            </Alert>
          )}
          <Form onSubmit={updateData}>
            <Row className="g-3">
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
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
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
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
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
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
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
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
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
                    City
                  </Form.Label>
                  <Form.Select
                    name="city"
                    value={employee.city}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
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
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
                    Role
                  </Form.Label>
                  <Form.Select
                    name="role"
                    value={employee.role}
                    onChange={getInput}
                    required
                    className="rounded-3"
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
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
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
                    Profile Image
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="rounded-3"
                    style={{ borderColor: "#20c997", backgroundColor: "#e6fcf5" }}
                  />
                  {employee.image && (
                    <div className="mt-3 text-center">
                      <img
                        src={employee.image}
                        alt="Preview"
                        className="rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
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
                  <Form.Label style={{ color: "#6c757d", fontWeight: "500" }}>
                    Hobbies
                  </Form.Label>
                  <Row className="g-2">
                    {hobbyOptions.map((hobby) => (
                      <Col xs={6} key={hobby}>
                        <Form.Check
                          type="checkbox"
                          label={hobby}
                          value={hobby}
                          checked={employee.hobbies.includes(hobby)}
                          onChange={handleHobbies}
                          style={{ color: "#343a40" }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <Button
              type="submit"
              className="w-100 mt-4 rounded-3"
              style={{
                backgroundColor: "#20c997",
                borderColor: "#20c997",
                fontWeight: "600",
                padding: "10px",
                color: "#fff",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1ba87c")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#20c997")}
            >
              Update Employee
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Update;