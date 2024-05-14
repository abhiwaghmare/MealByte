import React, { useState } from "react";

function User(props) {
  const { Name, Location, Contact } = props;
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div class="user-card">
      <h2>Name: {Name}</h2>
      <h3>Count: {count}</h3>
      <h3>Count2: {count2}</h3>
      <h3>Location: {Location}</h3>
      <h4>Contact: {Contact}</h4>
    </div>
  );
}

export default User;
