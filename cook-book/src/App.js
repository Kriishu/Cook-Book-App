import './components/styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { RecipeContextProvider } from './components/context/Context';
import RecipeDetails from './components/pages/RecipeDetails';
import CreateRecipe from './components/pages/CreateRecipe';

function App() {
  return (
    <RecipeContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateRecipe/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
    </RecipeContextProvider>
  );
}

export default App;