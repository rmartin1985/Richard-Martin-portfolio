import React from "react";
import Project from '../components/Project/index'
import spoiler from '../assets/projects/spoiler-alert.png'
import javaScriptImg from '../assets/projects/javascript.png'
import fullStack from '../assets/projects/fullstack.jpeg';
import eCommerce from '../assets/projects/e-commerce.png';
import graphql from '../assets/projects/graphql.png';
import mern from '../assets/projects/mern.jpeg';
import pwa from '../assets/projects/pwa.jpeg';
import shopShop from '../assets/projects/shop-shop.gif';
import books from '../assets/projects/books.gif';
import budget from '../assets/projects/budget.gif';
import blog from '../assets/projects/tech-blog.gif';
import fest from '../assets/projects/fest.gif';

function Portfolio() {
    const projects = [
        {
            title: "React Fest",
            id: 1,
            img: mern,
            hover: fest,
            link: "https://react-fest.herokuapp.com/",
            git: "https://github.com/MERNerds/react-fest"
        },
        {
            title: "Spoiler Alert",
            id: 2,
            img: fullStack,
            hover: spoiler,
            link: "https://obscure-ravine-58128.herokuapp.com/",
            git: "https://github.com/rmartin1985/spoiler-alert"
        },
        {
            title: "Shop-Shop",
            id: 3,
            img: eCommerce,
            hover: shopShop,
            link: "https://radiant-tundra-86540.herokuapp.com/",
            git: "https://github.com/rmartin1985/shop-shop"
        },
        {
            title: "Tech Blog - CMS",
            id: 4,
            img: javaScriptImg,
            hover: blog,
            link: "https://still-cove-88939.herokuapp.com/",
            git: "https://github.com/rmartin1985/Tech-blog-MVC-Week-14"
        },
        {
            title: "Book Search Engine",
            id: 5,
            img: graphql,
            hover: books,
            link: "https://pacific-dawn-01756.herokuapp.com/",
            git: "https://github.com/rmartin1985/book-search-engine-wk-21"
        },
        {
            title: "Budget Tracker",
            id: 6,
            img: pwa,
            hover: budget,
            link: "https://warm-chamber-52689.herokuapp.com/",
            git: "https://github.com/rmartin1985/budget-tracker-wk-19"
        },
    ]
    return (
        <Project
        projects={projects}>

        </Project>

    );
}

export default Portfolio;