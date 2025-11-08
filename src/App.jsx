import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Insert from './pages/Insert';
import Edit from './pages/Edit'
//const Home = ('./pages/Home').default;
//const Insert = require('./pages/Insert').default;

function App() {

  return (

    <BrowserRouter>
      <div className="App">
        <nav>
          <Link to="/">Home</Link> | <Link to="/insert">Insert</Link>
        </nav>

        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}

export default App
