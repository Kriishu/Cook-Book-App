import './components/styles/App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Provider } from 'react-redux';
import { store } from './components/redux/store';
import RecipeDetails from './components/pages/RecipeDetails';
import CreateRecipe from './components/pages/CreateRecipe';


function App() {
  return (
    <Provider store={store}>
      
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateRecipe/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
      </Routes>
    </Router>
    
    </Provider>
  );
}

export default App;