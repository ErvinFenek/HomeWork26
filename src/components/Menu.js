import React from "react";

export class Menu extends React.Component {
    render() {
        return (
            <ul className="main_nav">
                <li><a href="#1." className="main_nav_item">1. Внешность</a></li>
                <li><a href="#2." className="main_nav_item">2. Характер</a></li>
                <li><a href="#3." className="main_nav_item">3. История</a></li>
                <li><a href="#4." className="main_nav_item">4. Оборудование</a></li>
                <li><a href="#5." className="main_nav_item">5. Силы и способности</a></li>
            </ul>
        );
    }
}