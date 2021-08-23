import { useState } from "react";

const Input: React.FC = () => {
  const [query, setQuery] = useState("");
  return (
    <input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    ></input>
  );
};

export default Input;
