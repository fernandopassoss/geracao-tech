import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/produtos' element={<ProductListingPage/>}/>
        <Route path='/produtos/tenis' element={<ProductViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
