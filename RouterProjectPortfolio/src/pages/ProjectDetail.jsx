import { useParams, Link, Navigate } from "react-router-dom";

const projects = [
    {id: 1, name: "Project Alpha", description: "A web app for task management."},
    {id: 2, name: "Project Beta", description: "An e-commerce platform."},
    {id: 3, name: "Project Gamma", description: "A social media dashboard"}
]

function ProjectDetail() {
    const {id} = useParams();
    const project = projects.find((p) => p.id === parseInt(id))

    if(!project){
        return <Navigate to="/not-found" replace/>
    }
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
            <Link to="/projects">
            Back to projects
            </Link>
        </div>
    )
}

export default ProjectDetail;