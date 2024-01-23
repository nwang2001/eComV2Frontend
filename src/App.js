import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Store from './components/Store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
