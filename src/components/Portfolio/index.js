import React from "react";
import Project from "../Project";

function Portfolio() {
    const projects = [
        {
            title: "Run Buddy",
            id: 1
        },
        {
            title: "Robot Gladiators",
            id: 2
        },
        {
            title: "Plan My Day",
            id: 3
        },
        {
            title: "Spoiler Alert",
            id: 4
        },
        {
            title: "Rock Paper Scissors",
            id: 5
        },
        {
            title: "MERN",
            id: 6
        }
    ]
    return (
        <div>
            <Project projects={projects}></Project>

        </div>
        
        

    );
}

export default Portfolio;