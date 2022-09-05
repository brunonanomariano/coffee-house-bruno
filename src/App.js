import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <ItemListContainer mensaje="Proximamente catologo de productos" />
    
    </div>
  );
}

export default App;
