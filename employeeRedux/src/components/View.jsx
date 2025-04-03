import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/actions";
import { Container, Card, Row, Col, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View() {
  const emp = useSelector((state) => state.employee || []); // Ensure emp is always an array
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteEmp = (index) => {
    dispatch(deleteEmployee(index));
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="shadow border-0">
            <Card.Header className="bg-primary text-white py-3">
              <h4 className="mb-0 text-center">Employee List</h4>
            </Card.Header>
            <Card.Body className="p-4 bg-light">
              {Array.isArray(emp) && emp.length > 0 ? ( // Check if emp is an array before accessing length
                <Table striped bordered hover responsive className="rounded-3">
                  <thead className="bg-light">
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Role</th>
                      <th>Hobbies</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emp.map((v, i) => (
                      <tr key={i}>
                        <td>{v.name || "N/A"}</td>
                        <td>{v.email || "N/A"}</td>
                        <td>{v.age || "N/A"}</td>
                        <td>{v.city || "N/A"}</td>
                        <td>{v.role || "N/A"}</td>
                        <td>{Array.isArray(v.hobbies) ? v.hobbies.join(", ") : "None"}</td>
                        <td>
                          {v.image ? (
                            <Image src={v.image} thumbnail style={{ maxWidth: "50px", maxHeight: "50px" }} />
                          ) : (
                            "No Image"
                          )}
                        </td>
                        <td>
                          <Button variant="info" size="sm" onClick={() => navigate(`/update/${i}`)} className="me-2">
                            Update
                          </Button>
                          <Button variant="danger" size="sm" onClick={() => deleteEmp(i)}>
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <p className="text-center text-muted">No employees added yet.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default View;
