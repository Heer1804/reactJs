import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/actions";
import { Container, Card, Button, Table, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function View() {
  const emp = useSelector((state) => state.employee || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteEmp = (index) => {
    dispatch(deleteEmployee(index));
  };

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
          maxWidth: "1000px",
          backgroundColor: "#ffffff",
        }}
      >
        <Card.Body className="p-4">
          <h3
            className="text-center mb-4"
            style={{ color: "#343a40", fontWeight: "600" }}
          >
            Employee List
          </h3>
          {Array.isArray(emp) && emp.length > 0 ? (
            <div className="table-responsive">
              <Table
                striped
                hover
                className="rounded-3"
                style={{ backgroundColor: "#e6fcf5" }}
              >
                <thead style={{ backgroundColor: "#20c997", color: "#fff" }}>
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
                      <td>
                        {Array.isArray(v.hobbies)
                          ? v.hobbies.join(", ")
                          : "None"}
                      </td>
                      <td>
                        {v.image ? (
                          <Image
                            src={v.image}
                            roundedCircle
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "cover",
                              border: "2px solid #20c997",
                            }}
                          />
                        ) : (
                          "No Image"
                        )}
                      </td>
                      <td>
                        <Button
                          variant="outline-info"
                          size="sm"
                          onClick={() => navigate(`/update/${i}`)}
                          className="me-2 rounded-3"
                          style={{
                            borderColor: "#20c997",
                            color: "#20c997",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#20c997";
                            e.target.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#20c997";
                          }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => deleteEmp(i)}
                          className="rounded-3"
                          style={{
                            borderColor: "#dc3545",
                            color: "#dc3545",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#dc3545";
                            e.target.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#dc3545";
                          }}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            <p className="text-center text-muted fs-5 mt-3">
              No employees added yet.
            </p>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default View;