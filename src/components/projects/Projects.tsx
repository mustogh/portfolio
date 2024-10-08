﻿import { useState } from 'react';
import './Projects.css';
import projectsData from '../../constants/projects.json';

export const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    console.log(projectsData);
    return (
        <div className="projects-container">
            {projectsData.map((project) => (
                <div
                    key={project.id}
                    className={`project-card ${hoveredIndex === project.id ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIndex(project.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {project.url ? (
                        <a target="_blank" href={project.url} className="flex items-center">
                            <h3 className="project-name  text-white" data-full-text={project.name}>{project.name}</h3>
                        </a>
                    ) : (
                        <h3 className="project-name" data-full-text={project.name}>{project.name}</h3>
                    )}
                    <img src={project.image} alt={project.name} className="project-image" />
                    <p className="project-description">{project.description}</p>
                    <ul className="project-technologies">
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};