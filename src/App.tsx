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
        <Gallery />
        <button>Prev</button>
        <button>Next</button>
      </main>
    </>
  );
}

export default App;
