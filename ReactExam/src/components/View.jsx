import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Pagination,
  InputGroup,
} from 'react-bootstrap';

function View() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('formdataList');
    setRecords(savedData ? JSON.parse(savedData) : []);
  }, []);

  const handleDelete = (id) => {
    const updatedRecords = records.map((item) =>
      item.id === id ? { ...item, status: false } : item
    );
    setRecords(updatedRecords);
    localStorage.setItem('formdataList', JSON.stringify(updatedRecords));
  };

  const visibleRecords = records
    .filter((entry) => entry.status)
    .filter((entry) =>
      [entry.name, entry.email, entry.phone].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

  const totalPages = Math.ceil(visibleRecords.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentData = visibleRecords.slice(startIndex, startIndex + recordsPerPage);

  return (
    <Container className="my-5">
      <h3 className="text-center fw-bold mb-4">View data</h3>

      <Row className="mb-4 align-items-center">
        <Col md={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search by name, email, or phone..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-3"
            />
            <Button
              variant="outline-secondary"
              onClick={() => setSearchTerm('')}
              className="rounded-3"
            >
              Clear
            </Button>
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Select
            value={recordsPerPage}
            onChange={(e) => {
              setRecordsPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded-3"
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={15}>15 per page</option>
          </Form.Select>
        </Col>
      </Row>

      <Table striped bordered hover responsive className="shadow-sm rounded-3">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((entry) => (
              <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>
                  <img
                    src={entry.image}
                    alt="User"
                    width={50}
                    height={50}
                    className="rounded-3"
                    onError={(e) =>
                      (e.target.src = 'https://via.placeholder.com/50?text=Invalid+URL')
                    }
                  />
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(entry.id)}
                    className="rounded-3"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center text-muted">
               No data found..
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
            />
            {Array.from({ length: totalPages }, (_, idx) => (
              <Pagination.Item
                key={idx + 1}
                active={idx + 1 === currentPage}
                onClick={() => setCurrentPage(idx + 1)}
                className="rounded-3"
              >
                {idx + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </Pagination>
        </div>
      )}
    </Container>
  );
}

export default View;
