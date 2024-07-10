import "./App.css";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { Gallery } from "./components/gallery";

function App() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <div>
          <article>
            <img src="" alt="image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              amet.
            </p>
          </article>
        </div>
        <button>Prev</button>
        <button>Next</button>
      </main>
    </>
  );
}

export default App;
