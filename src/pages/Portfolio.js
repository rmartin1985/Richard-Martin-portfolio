import React from "react";
import Project from '../components/Project/index'
import place from '../assets/projects/placeimg_640_480_tech.jpg'
import spoiler from '../assets/projects/spoiler-alert.png'
import javaScriptImg from '../assets/projects/javascript.png'
import fullStack from '../assets/projects/fullstack.jpeg';
import eCommerce from '../assets/projects/e-commerce.png';
import graphql from '../assets/projects/graphql.png';
import mern from '../assets/projects/mern.jpeg';
import pwa from '../assets/projects/pwa.jpeg';
import shopShop from '../assets/projects/shop-shop.gif';

function Portfolio() {
    const projects = [
        {
            title: "Spoiler Alert",
            id: 1,
            img: fullStack,
            hover: spoiler,
            link: "https://obscure-ravine-58128.herokuapp.com/"
        },
        {
            title: "Shop-Shop",
            id: 2,
            img: eCommerce,
            hover: shopShop,
            link: "https://radiant-tundra-86540.herokuapp.com/"
        },
        {
            title: "Plan My Day",
            id: 3,
            img: javaScriptImg,
            hover: place,
            link: "https://rmartin1985.github.io/plan-my-day/"
        },
        {
            title: "Book Search Engine",
            id: 4,
            img: graphql,
            hover: place,
            link: "https://pacific-dawn-01756.herokuapp.com/"
        },
        {
            title: "Budget Tracker",
            id: 5,
            img: pwa,
            hover: place,
            link: "https://warm-chamber-52689.herokuapp.com/"
        },
        {
            title: "MERN",
            id: 6,
            img: mern,
            hover: place,
            link: "https://rmartin1985.github.io/rock-paper-scissors/"
        }
    ]
    return (
        <Project
        projects={projects}>

        </Project>

    );
}

export default Portfolio;