import { useState, useEffect } from "react";

const App = () => {
  const APP_KEY = "AIzaSyAkMbdssAf21gkimm-OPJw2d-chzCxfcTs";
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("javascript");

  useEffect(() => {
    getBooks();
  }, [query]);

  const getBooks = async () => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks&key=yourAPIKey`
    );
    const data = await response.json();
    setBooks(data.hits);
    console.log(data.hits);
    setSearch("");
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
  };
};
const Button: React.FC = () => {
  return <button>Submit</button>;
};

export default Button;
