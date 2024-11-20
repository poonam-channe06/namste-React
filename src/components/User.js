import { useState } from "react";

const User = (props) => {
  const { name, location, twitter } = props;
  const [count, setCount] = useState(0);
  const [count2] = useState(1)

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h2>Location : {location}</h2>
      <h3>Twitter : {twitter}</h3>
      <h3>Count : {count}</h3>
      <h3>Count: {count2}</h3>
    </div>
  );
};

export default User;
