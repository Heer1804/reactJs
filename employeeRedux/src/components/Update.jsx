import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../redux/actions";
import { Container, Card, Form, Button, Row, Col, Alert } from "react-bootstrap";

function Update() {
    const { id } = useParams();
    const empList = useSelector((state) => state.employee);
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
        role: ""
    });
    const [error, setError] = useState("");

    useEffect(() => {
        // Check if empList is defined and if the id is a valid index
        if (empList && empList.length > 0 && empList[id]) {
            setEmployee(empList[id]);
        } else {
            // Redirect or show an error if the employee is not found
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

        dispatch(updateEmployee(id, employee));
        navigate("/");
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow border-0">
                        <Card.Header className="bg-primary text-white text-center">
                            <h4>Update Employee</h4>
                        </Card.Header>
                        <Card.Body className="p-4 bg-light">
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={updateData}>
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
                                    <Form.Control type="file" accept="image/*" onChange={handleImage} />
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

                                <Button variant="primary" type="submit" className="w-100 mt-4 py-2 rounded-3">
                                    Update Employee
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Update;

