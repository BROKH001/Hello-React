import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import ContactPage from './views/ContactPage';
import ProjectPage from './views/ProjectPage';
import RouteNotFound from './views/NotFound';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </ BrowserRouter>
  );
}

export default App
