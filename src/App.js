import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ViewMore from './ViewMore';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <div className="bg-info p-2 fs-3 fw-bold text-center">
        Very Easy Deals
      </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewMore/:id' element={<ViewMore/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
