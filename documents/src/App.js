import './App.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import Introduction from './components/Introduction';



function App() {
 
 

  return (
    <div className='app'>
      
      <Navbar/>

      <Introduction/>

      <Game/>
      
      
      </div>
  );
}

export default App;
