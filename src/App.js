import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// pages
import Home from './pages/Home';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Supabase</h1>{' '}
        <p className="title-example">GET - POST - PATCH - DELETE</p>
        <Link to="/">Home</Link>
        <Link to="/create">Create New Text</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
