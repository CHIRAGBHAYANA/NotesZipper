import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import Mainscreen from "../../Components/Mainscreen";
import notes from "../../data/notes";

function MyNotes() {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <div>
      <Mainscreen title="Welcome back i am chirag bhayana...">
        <Link to="createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
            Create New Note
          </Button>
        </Link>

        {notes.map((note) => (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Card>
                <Accordion.Header>
                  <Card.Header
                    style={{
                      display: "flex",
                      width: "73vw",
                    }}
                  >
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Item
                        as={Card.Text}
                        variant="link"
                        eventkey="0"
                      >
                        {note.title}
                      </Accordion.Item>
                    </span>
                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                </Accordion.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge variant="sucess">Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created ON {}
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </Mainscreen>
    </div>
  );
}

export default MyNotes;
