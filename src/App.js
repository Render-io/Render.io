import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Header from './Components/Pages/Header';

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
