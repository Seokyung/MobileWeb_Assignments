import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import UserProvider from "./components/user/UserProvider";
import MainPage from "./MainPage";
import LoginPage from "./components/login/LoginPage";
import TodoPage from "./components/todo/TodoPage";

function App() {
    return(
        <UserProvider>
            <BrowserRouter>
                <div id="app-wrapper">
                    <h1>Check your daily lists with Plan & Do</h1>
                </div>
                <nav id="app-nav">
                    <Link to={'/'}>Home</Link>&nbsp;&nbsp;
                    <Link to={'/login'}>Login</Link>&nbsp;&nbsp;
                    <Link to={'/todo'}>TodoList</Link>
                </nav>
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/todo' element={<TodoPage/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;