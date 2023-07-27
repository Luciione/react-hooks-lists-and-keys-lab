import React from 'react';

function ProjectItem({ technologies }) {
  return (
    <div>
      <h3>Project Title</h3>
      <p>Description of the project</p>
      <div>
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
