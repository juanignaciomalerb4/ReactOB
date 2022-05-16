import "./App.css";
import ComponentA from "./components/componentA";
function App() {
  const defaultContact = {
    nombre: "Ignacio",
    apellido: "Varga",
    email: "nachovarga@email.com",
    conected: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <ComponentA contact={defaultContact} />
      </header>
    </div>
  );
}

export default App;
