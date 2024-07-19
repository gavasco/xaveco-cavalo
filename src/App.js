import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicial from './paginas/Inicial/inicial';
import Cavalo from './paginas/Concluido/Cavalo';
import Rinoceronte from './paginas/Concluido/Rinoceronte';
import Pato from './paginas/Concluido/Pato';
import Cachorro from './paginas/Concluido/Cachorro';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicial />}/>
          <Route path='cavalo' element={<Cavalo />}/>
          <Route path='rinoceronte' element={<Rinoceronte />}/>
          <Route path='pato' element={<Pato />}/>
          <Route path='cachorro' element={<Cachorro />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
