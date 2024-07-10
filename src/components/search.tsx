import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export const Search = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onSearch(input);
  };
  return (
    <form action="">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={() => handleSubmit}>Search</button>
    </form>
  );
};
