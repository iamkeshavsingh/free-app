import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import { YOUTUBEProvider } from './Components/Context/APIContext';
import Recommend from './Components/Recommend/Recommend';
import Play from './Components/Video Play/play';

function App() {
  return (
 <div>
  <YOUTUBEProvider>
  <Login/>
  <Header/>
  <Routes>
  <Route path='/' element={<Recommend/>}/>
    <Route path='/:id' element={<Play/>}/>
  </Routes>
  
  </YOUTUBEProvider>

 </div>
  );
}

export default App;
