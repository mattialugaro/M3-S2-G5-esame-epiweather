import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Welcome from './components/Welcome';
import NotFound from './components/NotFound';
import CardMeteo from './components/CardMeteo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/card' element={<CardMeteo/>}/>
          <Route path='/card/:lat/:long' element={<CardMeteo/>}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
