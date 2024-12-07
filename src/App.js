
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import Tv from './components/Tv';
import Movies from './components/Movies';
import Pepole from './components/Pepole';
import Moviesprovider from './Stor';

function App() {
  return (
<>
<Moviesprovider>
<Nav/>
    <div className='container mt-5'>
<Routes>
<Route path='' element={<Home/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='people' element={<Pepole/>}/>
  <Route path='movies' element={ <Movies/>}/>
  <Route path='tv' element={<Tv/>}/>
</Routes>
  </div>
</Moviesprovider>

</>
  );
} 
  
export default App;
