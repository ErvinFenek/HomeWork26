import React from "react";
import {Menu} from "./Menu";
import {MainText} from "./MainText";

export class Main extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Menu/>
                <MainText/>
            </React.Fragment>
        );
    }
}