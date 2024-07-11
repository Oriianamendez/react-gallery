import "./App.css";
import { Header } from "./components/header";
import { Gallery } from "./components/gallery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
function App() {
  return (
    <>
      <Header />
      <main>
        <QueryClientProvider client={client}>
          <Gallery />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default App;
