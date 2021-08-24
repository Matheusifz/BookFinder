import { useEffect, useState } from "react";
import "./style.css";

interface Book {
  volumeInfo: {
    title: string;
    imageLinks: { smallThumbnail: string };
    description: string;
  };
  id: string;
}
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
      `https://www.googleapis.com/books/v1/volumes?q=${query}=free-ebooks&key=${APP_KEY}`
    );
    const data = await response.json();
    setBooks(data.items);
    console.log(data);
    setSearch("");
  };

  const updateSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const getSearch = (e: any) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {books.map((book: Book) => (
        <div key={book.id}>
          <h1>{book.volumeInfo.title}</h1>
          <img src={book.volumeInfo.imageLinks?.smallThumbnail} alt="" />
          <p>{book.volumeInfo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
