import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CharacterDetails from './components/CharacterDetailsComponent/CharacterDetails';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/character-details/:id' element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
