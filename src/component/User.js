import { useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user_card">
      <h1>Hi User Count:{count}</h1>
      <h2>Name: {name}</h2>
      <h2>Location: Delhi</h2>
      <h2>Contact: @ajay.info.in</h2>
    </div>
  );
};
export default User;
