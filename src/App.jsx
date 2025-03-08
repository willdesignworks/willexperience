import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProjectsWeb from './pages/ProjectsWeb.jsx';
import ProjectsSocialMedia from './pages/ProjectsSocialMedia.jsx';
import ProjectsEdm from './pages/ProjectsEdm.jsx';
import ProjectApp from './pages/ProjectApp.jsx';
import ProjectsUx from './pages/ProjectsUx.jsx';

const App = () => {
  return (
    <Router> {/* 這裡設置了 basename */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectsweb/:id" element={<ProjectsWeb />} />
        <Route path="/projectssocialmedia/:id" element={<ProjectsSocialMedia />} />
        <Route path="/projectsedm/:id" element={<ProjectsEdm />} />
        <Route path="/projectapp/:id" element={<ProjectApp />} />
        <Route path="/projectsux/:id" element={<ProjectsUx />} />
      </Routes>
    </Router>
  );
};

export default App
