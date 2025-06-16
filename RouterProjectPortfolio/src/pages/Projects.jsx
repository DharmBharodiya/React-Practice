import { Link } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Project Alpha', description: 'A web app for task management.' },
  { id: 2, name: 'Project Beta', description: 'An e-commerce platform.' },
  { id: 3, name: 'Project Gamma', description: 'A social media dashboard.' },
];

function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.id} className="border p-4 rounded">
            <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline">
              {project.name}
            </Link>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;