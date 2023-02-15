import './components/styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { APIContextProvider } from './components/context/useContext';
import RecipeDetails from './components/pages/RecipeDetails';
import CreateRecipe from './components/pages/CreateRecipe';

function App() {
  return (
    <APIContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateRecipe/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
    </APIContextProvider>
  );
}

export default App;