import Header from "./components/Header";
import Contato from "./components/Contato";
import Experiencias from "./components/Experiencias";
import Rodape from "./components/Rodape";
import SobreMim from "./components/SobreMim";
import Habilidades from "./components/Habilidades";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <SobreMim />
        <Contato />
        <Experiencias />
        <Habilidades />
      </main>

      <Rodape />
    </>
  );
}

export default App;