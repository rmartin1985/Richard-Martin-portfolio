import React from "react";

function Project(props) {
    const projects = props.projects
    
    return (
        <ul className="list-group">
            {projects.map((project) => (
                <li className="list-group-item" key={project.id}>
                    {project.title}
                </li>
            ))}
        </ul>
    );


}

export default Project;