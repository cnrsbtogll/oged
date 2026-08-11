import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import News from './pages/News';
import WomenEmployment from './pages/WomenEmployment';
import Membership from './pages/Membership';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
        <Route path="news" element={<News />} />
        <Route path="women-employment" element={<WomenEmployment />} />
        <Route path="membership" element={<Membership />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
