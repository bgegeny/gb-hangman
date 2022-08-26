import React from 'react';
import {
    BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";
import Game from "./ui/Game/Game";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<Navigate to="/game" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
