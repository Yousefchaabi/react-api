import React, { useEffect } from "react";
import UserItem from "./UserItem";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions/postActions";

function Users() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
    <div className="users">
      {users.map((user) => {
        return <UserItem {...user} />;
      })}
    </div>
  );
}

export default Users;
