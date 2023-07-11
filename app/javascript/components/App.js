import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Greeting from "./Greeting";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/api/v1/greeting" element={<Greeting />} />
            </Routes>
        </Router>
    );
};

export default App;