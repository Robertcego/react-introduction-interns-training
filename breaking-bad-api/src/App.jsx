import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import CharacterDetails from './components/CharacterDetailsComponent/CharacterDetails';
import NavBar from './components/NavBar/NavBar';
import SearchBar from './components/SearchComponent/SearchBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/character-details/:id' element={<CharacterDetails />} />
        <Route path='/characters' element={<SearchBar />} />
      </Routes>
    </div>
  );
}

export default App;
