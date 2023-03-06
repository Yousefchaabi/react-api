import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function UserItem({ name, email, phone, id }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{phone}</Card.Text>
          <Button as={Link} to={`/posts/${id}`} variant="primary">
            See Posts
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserItem;
