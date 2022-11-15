import './App.css';
import Formulario from './components/Formulario';
// import FormNoControlled from './components/FormNoControlled';

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>Forms</h1>
      </header>
      {/* <FormNoControlled/> */}
      <Formulario/>
    </div>
  );
}

export default App;
