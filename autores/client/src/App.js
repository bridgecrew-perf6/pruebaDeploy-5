import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/Main';
import New from './views/New';
import Edit from './views/Edit';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Main/>}/>
          <Route path='/new' exact element={<New/>}/>
          <Route path='/edit/:id' exact element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
