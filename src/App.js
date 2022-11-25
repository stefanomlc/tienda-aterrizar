import './App.css';
/* bootstrap CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
/* Navbar */
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <Navbar />,
      <ItemListContainer
        texto = "un contenedor vacío"
      />
    </div>

        

  );
}

export default App;
