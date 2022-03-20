import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Pizzas from './Components/Pizzas/Pizzas';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Pizzas />
      <Footer />
    </div>
  );
}

export default App;
