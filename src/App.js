import './App.css';
import ProductCollection from './components/productCollection';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductCollection/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
