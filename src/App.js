import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {UpButton} from "./components/UpButton/UpButton";

export class App extends React.Component {
    render() {
    return (
        <div className="App">
                <Header/>
                <Main/>
                <UpButton/>
        </div>
    );
  }
}