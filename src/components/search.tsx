import { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

export const Search = ({ onSearch }: Props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};
