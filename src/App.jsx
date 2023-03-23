import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function App() {

  
  return (
    <div className='App'> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
      
    </div> 
  );
}

export default App
