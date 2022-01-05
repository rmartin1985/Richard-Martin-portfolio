import React from "react";
import Project from '../components/Project/index'
import robots from '../assets/projects/robots.jpeg'
import runner from '../assets/projects/generic-runner-picture.jpeg'
import place from '../assets/projects/placeimg_640_480_tech.jpg'
import rps from '../assets/projects/rock-paper-scissors-hand-gesture-vector-25169737.jpeg'
import spoiler from '../assets/projects/spoiler-alert.png'

function Portfolio() {
    const projects = [
        {
            title: "Run Buddy",
            id: 1,
            img: runner,
            link: "https://rmartin1985.github.io/run-buddy/"
        },
        {
            title: "Robot Gladiators",
            id: 2,
            img: robots,
            link: "https://rmartin1985.github.io/robot-gladiators/"
        },
        {
            title: "Plan My Day",
            id: 3,
            img: place,
            link: "https://rmartin1985.github.io/plan-my-day/"
        },
        {
            title: "Spoiler Alert",
            id: 4,
            img: spoiler,
            link: "https://obscure-ravine-58128.herokuapp.com/"
        },
        {
            title: "Rock Paper Scissors",
            id: 5,
            img: rps,
            link: "https://rmartin1985.github.io/rock-paper-scissors/"
        },
        {
            title: "MERN",
            id: 6,
            img: place,
            link: "https://rmartin1985.github.io/rock-paper-scissors/"
        }
    ]
    return (
        <Project projects={projects}></Project>

    );
}

export default Portfolio;