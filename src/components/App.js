import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';

function App() {
  const projects = [
    {
      id: 1,
      technologies: ['React', 'Redux'],
    },
    {
      id: 2,
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 3,
      technologies: ['Node.js', 'Express'],
    },
  ];

  return (
    <div>
      <NavBar />
      {/* Other components like Home, About, etc. */}
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
