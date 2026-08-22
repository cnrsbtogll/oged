import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Activities from './pages/Activities.tsx';
import News from './pages/News.tsx';
import Projects from './pages/Projects.tsx';
import PressRelease from './pages/PressRelease.tsx';
import WomenEmployment from './pages/WomenEmployment.tsx';
import Membership from './pages/Membership.tsx';
import Contact from './pages/Contact.tsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="activities" element={<Activities />} />
        <Route path="news" element={<News />} />
        <Route path="projects" element={<Projects />} />
        <Route path="press-release" element={<PressRelease />} />
        <Route path="women-employment" element={<WomenEmployment />} />
        <Route path="membership" element={<Membership />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
