import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import "./styles/style.css";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Dashboard/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;