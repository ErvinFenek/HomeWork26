import React from "react";
import './UpButton.css'

export class UpButton extends React.Component {
    render() {
        return (
            <span className = "UpButton">
                <a href="#0." className="arrow up"></a>
            </span>
        );
    }
}