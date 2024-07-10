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
      </main>
    </>
  );
}

export default App;
