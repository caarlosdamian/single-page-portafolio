import "./App.scss";
import { Header } from "./components/header/Header";
import { About } from "./sections/about/About";
import { GridContainer } from "./sections/gridContainer/GridContainer";
import { MainHeaders } from "./sections/mainHeaders/MainHeaders";

function App() {
  return (
    <main className="App">
      <Header />
      <MainHeaders />
      <GridContainer />
      <About />
    </main>
  );
}

export default App;
