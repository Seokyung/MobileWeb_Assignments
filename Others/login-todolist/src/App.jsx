import React from "react";
import "./App.css";
import LoginPage from "./components/login/LoginPage";

function App() {
    return(
        <div id="app-wrapper">
            <h1>Check your daily lists with Plan & Do</h1>
            <LoginPage/>
        </div>
    );
}

export default App;