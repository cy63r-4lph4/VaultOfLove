
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import './styles/global.css';
import ExplorePage from './pages/Explore';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Features from './pages/Features';
// import Login from './pages/Login';
// import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        {/* <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
};

export default App;
