import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './component/shop/Shop';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
