import React, { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/postActions";

function NavBar() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>CHECKPOINT</Navbar.Brand>
        <Nav.Link as={Link} to="/" style={{ color: "white", fontSize: "20px" }}>
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          to="/users"
          style={{ color: "white", fontSize: "20px" }}
        >
          Users <span className="length">{users.length}</span>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
