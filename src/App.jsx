import './App.css';
import NavBar from './components/NavBar/NavBar';
//import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import AppRouter from './Router/AppRouter';


function App() {
  return (
    <>
      <NavBar />

      <AppRouter />
    </>
  )
}

//<ItemDetailContainer id={4} Así si funciona>
export default App;