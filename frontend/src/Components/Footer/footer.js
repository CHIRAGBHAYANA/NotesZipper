import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function footer() {
  return (
    <div>
      <footer
        style={{
          width: "100%",
          position: "relative",
          bottom: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col className="text-center py-3">Copyright &copy; NotesZipper</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default footer;
